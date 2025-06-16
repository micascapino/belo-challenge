import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetTransactionsByUserUseCase } from "./get-transactions-by-user.use-case";

@ApiTags('transactions')
@Controller('transactions')
export class GetTransactionsByUserController {
  constructor(private readonly getTransactionsByUserUseCase: GetTransactionsByUserUseCase) {}

  @Get(':userId')
  async getTransactionsByUser(@Param('userId') userId: string) {
    return this.getTransactionsByUserUseCase.execute(userId);
  }
}

