FROM node:16-alpine AS builder

ARG COMMIT_HASH
ENV NEXT_PUBLIC_COMMIT_HASH=$COMMIT_HASH

WORKDIR /app

COPY package*.json tsconfig.json ./


RUN apk update && apk add git && rm -rf /var/cache/apk/*

RUN npm install && npm install sharp

COPY . .

RUN npm run build

FROM node:16-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/next.config.js /app/next-i18next.config.js /app/next-sitemap.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

CMD ["./node_modules/.bin/pm2-runtime","npm","--", "start"]
