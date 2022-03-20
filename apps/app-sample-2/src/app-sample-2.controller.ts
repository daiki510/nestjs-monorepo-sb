import { Controller, Get } from '@nestjs/common';
import { AppSample2Service } from './app-sample-2.service';

@Controller()
export class AppSample2Controller {
  constructor(private readonly appSample2Service: AppSample2Service) {}

  @Get()
  getHello(): string {
    return this.appSample2Service.getHello();
  }
}
