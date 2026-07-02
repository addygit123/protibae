import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

/**
 * Environment variable validation for PROTIBAE.
 *
 * Every variable used anywhere in the application must be declared here.
 * The application will refuse to start if any required variable is missing.
 *
 * @see https://env.t3.gg/docs/nextjs
 */
export const env = createEnv({
  /**
   * Server-side environment variables.
   * Never exposed to the browser.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    DATABASE_URL: z.string().min(1),
  },

  /**
   * Client-side environment variables.
   * Must be prefixed with NEXT_PUBLIC_.
   * Exposed to the browser.
   */
  client: {
    // NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  /**
   * Destructured manually to avoid bundler tree-shaking.
   * For each server variable: process.env.VARIABLE_NAME
   * For each client variable: process.env.NEXT_PUBLIC_VARIABLE_NAME
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    // NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  /**
   * Run validation even in production builds.
   */
  skipValidation: false,

  /**
   * Treat empty strings as undefined.
   * A variable set to "" is treated as missing.
   */
  emptyStringAsUndefined: true,
});
