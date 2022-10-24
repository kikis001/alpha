import { registerAs } from "@nestjs/config/dist";

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT
    },
    mongo: {
      dbName: process.env.MONGO_DB
    },
    apiKey: process.env.API_KEY,
  }
})
