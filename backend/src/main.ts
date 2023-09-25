// // import { NestFactory } from '@nestjs/core';
// // import { AppModule } from './app.module';

// // async function bootstrap() {
// //   const app = await NestFactory.create(AppModule);
// //   await app.listen(3000);
// // }
// // bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { TypeOrmModule } from '@nestjs/typeorm';


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Add TypeORM configuration
//    const config = new TypeOrmModule.forRoot({
//     // Import the ormconfig.json file
//     ...require('../ormconfig.json'),
//   });

//   await app.configu(config);

//   await app.listen(3000);
// }
// bootstrap();

// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
