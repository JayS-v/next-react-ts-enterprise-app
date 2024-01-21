import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import type { JWT } from 'next-auth/jwt';
import type { User, Account, Session, Awaitable } from 'next-auth/core/types';
import { authorizedRequest, post } from '../base';
import process from 'process';
import { signIn } from 'next-auth/react';

interface JWTData {
  token: JWT;
  user?: User;
  account?: Account | null;
}
interface SessionData {
  session: Session;
  token: JWT;
  user?: User;
}
interface LogoutMessage {
  session: Session;
  token: JWT;
}

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.CLIENDID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      authorization: `${process.env.KEYCLOAK_URL}/${process.env.AUTH_API}`,
      issuer: `${process.env.KEYCLOAK_URL}/${process.env.ISSUER}`,
    }),
  ],
  callbacks: {
     redirect: async ({ url, baseUrl }) => {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    jwt: (data: JWTData): Awaitable<JWT> => {
      if (data.user) {
        const url = '';
        authorizedRequest(data.account?.access_token, { url }, post);
      } else {
        console.log('No user data present. Behavior will be undefined.');
      }
      return data.token;
    },
    session: (data: SessionData): Awaitable<Session> => {
      return data.session;
    },
  },
  events: {
    signOut: (message: LogoutMessage): Awaitable<void> => {
      const url = '';
      if (message.session?.user?.name) {
        post({
          url: url,
          body: { name: message.session.user?.name },
          backendType: 'auth',
        }).then(
          (_) => console.log('Logout success'),
          (r) => console.log('Logout fail: ', r)
        );
      } else if (message.token.name) {
        post({
          url: url,
          body: { name: message.token.name },
          backendType: 'auth',
        }).then(
          (_) => console.log('Logout success'),
          (r) => console.log('Logout fail: ', r)
        );
      }
    },
  },
  secret: process.env.KEY,
});

export const handleKeycloackSignIn = (asPath: string): void => {
  signIn('keycloak', { callbackUrl: asPath })
};
