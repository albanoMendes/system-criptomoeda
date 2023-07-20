import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedeEntity } from './entities/rede.entity';
import { RedeController } from './rede.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RedeEntity])],
  controllers: [RedeController],
  providers: [],
})
export class RedeModule {}
