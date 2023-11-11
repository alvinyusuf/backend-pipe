import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.title = createBookDto.title;
    book.publisher = createBookDto.publisher;
    book.pages = createBookDto.pages;
    return this.bookRepository.save(book);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOneBy({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    console.log(updateBookDto);
    const book: Book = new Book();
    book.title = updateBookDto.title;
    book.publisher = updateBookDto.publisher;
    book.pages = updateBookDto.pages;
    this.bookRepository.update(id, book);
    return this.bookRepository.findOneBy({ id });
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.bookRepository.delete(id);
  }
}
