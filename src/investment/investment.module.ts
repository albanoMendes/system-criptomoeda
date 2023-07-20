import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentEntity } from './entities/investment.entity';
import { InvestmentController } from './investment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InvestmentEntity])],
  controllers: [InvestmentController],
  providers: [],
})
export class InvestmentModule {}
