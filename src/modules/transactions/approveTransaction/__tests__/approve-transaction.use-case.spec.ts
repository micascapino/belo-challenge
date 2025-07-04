import { Test, TestingModule } from '@nestjs/testing';
import { ApproveTransactionUseCase } from '../approve-transaction.use-case';
import { TransactionRepository } from '../../../../repositories/transaction.repository';
import { TransactionStatus } from '../../../../models/transaction.model';
import { TransactionStatusError } from '../../../../shared/errors/transaction.errors';

describe('ApproveTransactionUseCase', () => {
  let useCase: ApproveTransactionUseCase;
  let transactionRepository: jest.Mocked<TransactionRepository>;

  beforeEach(async () => {
    jest.clearAllMocks();

    const mockTransactionRepository = {
      getTransactionById: jest.fn(),
      transferMoney: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApproveTransactionUseCase,
        {
          provide: TransactionRepository,
          useValue: mockTransactionRepository,
        },
      ],
    }).compile();

    useCase = module.get<ApproveTransactionUseCase>(ApproveTransactionUseCase);
    transactionRepository = module.get(TransactionRepository);
  });

  describe('execute', () => {
    it('should throw TransactionStatusError when trying to approve a non-pending transaction', async () => {
      const transactionId = '123';
      const completedTransaction = {
        id: transactionId,
        origin_user_id: '1',
        destiny_user_id: '2',
        amount: 1000,
        status: TransactionStatus.COMPLETED,
        created_at: new Date()
      };

      transactionRepository.getTransactionById.mockResolvedValue(completedTransaction);

      await expect(useCase.execute(transactionId)).rejects.toThrow(TransactionStatusError);
      await expect(useCase.execute(transactionId)).rejects.toThrow(
        `Transaction ${transactionId} is in ${TransactionStatus.COMPLETED} status. Expected status: ${TransactionStatus.PENDING}`
      );

      expect(transactionRepository.getTransactionById).toHaveBeenCalledWith(transactionId);
      expect(transactionRepository.transferMoney).not.toHaveBeenCalled();
    });
  });
}); 