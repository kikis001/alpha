import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';

import config from '../config'

const API_KEY = 'druk developer in development mode';
const API_KEY_PROD = 'druk developer in production mode';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const uri = 'mongodb://Elliot:NubeElPeque%C3%B1oMundo@localhost:27017/?authMechanism=DEFAULT'
        return {

        }
      },
      inject: [config.KEY],
    })
  ],

  providers: [
    {
      provide: "API_KEY",
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY
    },
    {
      provide: "MONGO",
      useFactory: async (configService: ConfigType<typeof config>) => {
        // const client = new MongoClient(configService.mongo.uri, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        // });
        // await client.connect();
        // return client;
      }
    }
  ]
})
export class DatabaseModule {}
