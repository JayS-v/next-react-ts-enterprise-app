import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { IContactData } from 'types/IContactData';
import { useTranslation } from 'next-i18next';

export const useValidationSchema = (type: string) => {
  const { t } = useTranslation();

  const companySchema =
    type === 'contact'
      ? yup.string().trim()
      : yup
          .mixed<FileList>()
          .required('You need to provide a file')
          .test('required', 'You need to provide a file', (file) => {
            if (file?.length) return true;
            return false;
          });

  const messageSchema =
    type === 'contact'
      ? yup
          .string()
          .trim()
          .required(`${t('contacts:form_error_required')}`)
      : yup.string().trim();

  const validationSchema: ObjectSchema<IContactData> = yup.object({
    name: yup
      .string()
      .trim()
      .required(`${t('contacts:form_error_required')}`),
    email: yup
      .string()
      .email(`${t('contacts:form_error_email')}`)
      .trim()
      .required(`${t('contacts:form_error_required')}`),
    company: companySchema,
    phone: yup.string().trim(),
    message: messageSchema,
  });

  return { validationSchema };
};
