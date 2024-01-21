import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { encode } from 'html-entities';
import { IContactRequestBody } from 'types/IContactData';

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const host = process.env.SMTP_HOST;

const transporter = nodemailer.createTransport({
  host,
  port: 587,
  auth: {
    user,
    pass,
  },
});

const requestBodySchema: ObjectSchema<IContactRequestBody> = yup.object({
  name: yup
    .string()
    .trim()
    .transform((value) => encode(value))
    .required(),
  email: yup
    .string()
    .email()
    .trim()
    .transform((value) => encode(value))
    .required(),
  company: yup
    .string()
    .trim()
    .transform((value) => encode(value)),
  phone: yup
    .string()
    .trim()
    .transform((value) => encode(value)),
  message: yup
    .string()
    .trim()
    .transform((value) => encode(value))
    .required(),
  token: yup.string().required(),
});

const validateHuman = async (token: string): Promise<boolean> => {
  const endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const body = `secret=${secret}&response=${token}`;

  const res = await fetch(endpoint, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  const data = await res.json();
  return data.success;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const requestBody = await requestBodySchema.validate(req.body, {
        stripUnknown: true,
      });

      const {
        name,
        email,
        message,
        phone,
        company,
        token,
      }: IContactRequestBody = requestBody;

      const human: boolean = await validateHuman(token);
      if (!human) {
        throw new Error();
      }

      await transporter.sendMail({
        from: user,
        to: user,
        replyTo: email,
        subject: `New from ${name}`,
        html: `
       <p>You have a new message sent via contact form:</p> 
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Company:</strong> ${company}</p>
       <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
       <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
       <p><strong>Message:</strong> ${message}</p>   
        `,
      });

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: 'Failed to send email' });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
}
