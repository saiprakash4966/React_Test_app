// app.module.ts
import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [FormController, AppController],
  providers: [AppService],
})
export class AppModule { }
