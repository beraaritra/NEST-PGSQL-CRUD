/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Book } from 'src/model/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
  controllers: [ BookController],
  providers: [ BookRepository, BookService ],
  exports: [BookService]
})
export class BookModule {}
