import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksEntity } from './books.entity';

@Module({
  imports : [TypeOrmModule.forFeature([BooksEntity])] ,
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
