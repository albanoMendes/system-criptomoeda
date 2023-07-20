import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YieldEntity } from './entities/yield.entity';
import { YieldController } from './yield.controller';

@Module({
  imports: [TypeOrmModule.forFeature([YieldEntity])],
  controllers: [YieldController],
  providers: [],
})
export class YieldModule {}
