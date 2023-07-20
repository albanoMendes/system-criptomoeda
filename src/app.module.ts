import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { CurrencyModule } from './currency/currency.module';
import { SaqueModule } from './saque/saque.module';
import { YieldModule } from './yield/yield.module';
import { InvestmentModule } from './investment/investment.module';
import { RedeModule } from './rede/rede.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      port: Number(process.env.DB_PORT),
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    CountryModule,
    CurrencyModule,
    SaqueModule,
    YieldModule,
    InvestmentModule,
    RedeModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
