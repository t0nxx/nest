import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksEntity } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
    @InjectRepository(BooksEntity)
    private BooksRepository: Repository<BooksEntity>
    ) {}

    async findAllBooks() {
       return await this.BooksRepository.find() ;
    }
    async createNewBook(name: string) {
        await this.BooksRepository.insert({name}) ;
    }

    async updateBook(id: number , data: any) {
        await this.BooksRepository.update({id} , data) ;
    }
    async deleteeBook(id: number) {
        await this.BooksRepository.delete({id}) ;
    }
}
