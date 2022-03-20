import { Injectable } from '@nestjs/common';

@Injectable()
export class AppSample2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
