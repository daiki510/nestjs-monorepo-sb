import { Module } from '@nestjs/common';
import { AppSample2Controller } from './app-sample-2.controller';
import { AppSample2Service } from './app-sample-2.service';

@Module({
  imports: [],
  controllers: [AppSample2Controller],
  providers: [AppSample2Service],
})
export class AppSample2Module {}
