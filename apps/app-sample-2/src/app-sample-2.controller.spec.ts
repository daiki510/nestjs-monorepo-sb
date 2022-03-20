import { Test, TestingModule } from '@nestjs/testing';
import { AppSample2Controller } from './app-sample-2.controller';
import { AppSample2Service } from './app-sample-2.service';

describe('AppSample2Controller', () => {
  let appSample2Controller: AppSample2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppSample2Controller],
      providers: [AppSample2Service],
    }).compile();

    appSample2Controller = app.get<AppSample2Controller>(AppSample2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appSample2Controller.getHello()).toBe('Hello World!');
    });
  });
});
