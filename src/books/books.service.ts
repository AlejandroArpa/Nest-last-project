import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>
  ) {}

  async create(createBookDto: CreateBookDto) {
    const newBook = this.bookRepository.create( createBookDto)
    return this.bookRepository.save(newBook);
  }

  async findAll() {
    const books = await this.bookRepository.find();
    if (books.length === 0) {
      return { message: 'No books found', data: [], status: 404 };
    }
    return books;
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      return { message: 'Book not found', data: null, status: 404 };
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if(!book) {
      return { message: 'Book not found', data: null, status: 404 };
    }
    const updatedBook = Object.assign(book, updateBookDto);
    return this.bookRepository.save(updatedBook);
  }

  async remove(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      return { message: 'Book not found', data: null, status: 404 };
    }
    await this.bookRepository.delete(book);
    return { message: 'Book deleted', data: null, status: 200 };
  }
}
