import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    async getAllBooks() {
        return 'hi from controller';
    }
}
