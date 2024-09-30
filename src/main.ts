import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupGlobalConfig } from './common/config/global.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupGlobalConfig(app)
  await app.listen(3000);

}
bootstrap();
