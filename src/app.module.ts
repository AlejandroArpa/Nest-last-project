import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './common/config/db-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DbConfigService
    }),
    BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
