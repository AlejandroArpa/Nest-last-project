import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config"
import { Book } from "src/books/entities/book.entity";

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
      return {
        type: 'postgres',
        host: this.configService.get('DB_HOST'),
        port: this.configService.get('DB_PORT'),
        username: this.configService.get('DB_USER'),
        password: this.configService.get('DB_PWD'),
        database: this.configService.get('DB_NAME'),
        entities: [Book],
        synchronize: true
      }
  }
}