import { INestApplication, ValidationPipe } from '@nestjs/common';
// import { AllExceptionsFilter, ValidationExceptionFilter } from '../errors/exception-filters';
// import { LoggerService } from '../services';



export const setupGlobalConfig = (app: INestApplication<any>) => {
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    stopAtFirstError: true,
    forbidNonWhitelisted: false,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  // app.useGlobalFilters(new AllExceptionsFilter(logger));
  // app.useGlobalFilters(new ValidationExceptionFilter(logger));
};