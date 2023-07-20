import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaqueEntity } from './entities/saque.entity';
import { SaqueController } from './saque.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaqueEntity])],
  controllers: [SaqueController],
  providers: [],
})
export class SaqueModule {}
