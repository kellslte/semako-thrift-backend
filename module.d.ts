declare namespace NodeJS {
  export interface ProcessEnv {
    MONGOD_DB_URI: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASSWORD: string;
    MAIL_FROM: string;
    PORT: number;
    JWT_SECRET_KEY: string;
    JWT_REFRESH_KEY: string;
    JWT_EXPIRES_IN: string;
  }
}
