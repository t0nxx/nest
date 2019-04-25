import { Controller, Get, HttpCode } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private _booksService : BooksService){}

    @Get()
    async getAllBooks() {
        return this._booksService.findAllBooks();
    }
    @Get('/new')
    async createNewBook(){
        await this._booksService.createNewBook('testfromcontro');
    }

    @Get('/update')
    async updateBook(){
        await this._booksService.updateBook(10,{describtion : 'hi hi'});
    }
    @HttpCode(204)
    @Get('/delete')
    async deleteBook(){
        await this._booksService.deleteeBook(8);
    }
}
