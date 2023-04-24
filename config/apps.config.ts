import { options } from './orm.config';

export const configs = () => ({
  api: {
    port: parseInt(String(process.env.API_PORT), 10) || 3000,
  },
  database: { ...options },
});
