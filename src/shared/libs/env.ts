import { z } from 'zod';

const envSchema = z.object({
  DEBUG: z.string().transform((value) => value === 'true'),
  APP_TITLE: z.string(),
  APP_URL: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_MAIL_LIST: z.string(),
  NEON_DATABASE_URL: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_FROM: z.string(),
  RESEND_ADMIN: z.string(),
  RECAPTCHA_SITE_KEY: z.string(),
  RECAPTCHA_SECRET_KEY: z.string(),
  GOOGLE_TAG_MANAGER_ID: z.string(),
});

const parsedEnv = envSchema.safeParse({
  DEBUG: process.env.NEXT_PUBLIC_DEBUG,
  APP_TITLE: process.env.APP_TITLE,
  APP_URL: process.env.APP_URL,
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_MAIL_LIST: process.env.AUTH_MAIL_LIST,
  NEON_DATABASE_URL: process.env.NEON_DATABASE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM: process.env.RESEND_FROM,
  RESEND_ADMIN: process.env.RESEND_ADMIN,
  MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
  MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
});

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}

export const env = parsedEnv.data;
