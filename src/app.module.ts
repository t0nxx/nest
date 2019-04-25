import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import {TypeOrmModule} from '@nestjs/typeorm' ;
import { Connection } from 'typeorm';


@Module({
  imports: [BooksModule , TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
