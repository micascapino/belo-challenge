import { ApiProperty } from '@nestjs/swagger';

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
  FAILED = 'FAILED'
}

export class Transaction {
  @ApiProperty({ description: 'The unique identifier of the transaction' })
  id: string;

  @ApiProperty({ description: 'The ID of the user who sent the money' })
  originUserId: number;

  @ApiProperty({ description: 'The ID of the user who received the money' })
  destinyUserId: number;

  @ApiProperty({ description: 'The amount of money transferred' })
  amount: number;

  @ApiProperty({ 
    description: 'The status of the transaction',
    enum: TransactionStatus,
    example: TransactionStatus.PENDING
  })
  status: TransactionStatus;

  @ApiProperty({ description: 'The date when the transaction was created' })
  createdAt: Date;
} 