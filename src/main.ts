import 'dotenv/config';

import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { options } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(options);

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`Application is running port: 3000`);
}

bootstrap();
