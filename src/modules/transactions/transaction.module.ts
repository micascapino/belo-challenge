import { Module } from '@nestjs/common';
import { TransactionController } from './createTransaction/new-transaction.controller';
import { CreateTransactionUseCase } from './createTransaction/new-transaction.use-case';
import { TransactionRepository } from '../../repositories/transaction.repository';
import { UserRepository } from '../../repositories/user.repository';
import { TransactionValidator } from './createTransaction/validators/transaction.validator';

@Module({
  controllers: [TransactionController],
  providers: [
    CreateTransactionUseCase,
    TransactionRepository,
    UserRepository,
    TransactionValidator
  ],
})
export class TransactionModule {} 