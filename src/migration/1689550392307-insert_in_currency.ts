import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInCurrency1689550392307 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO currency("id", "name", "acronimo", "valor", "idcountry") VALUES (1, 'KWANZA', 'KZ', 823.71, 1);
        INSERT INTO currency("id", "name", "acronimo", "valor", "idcountry") VALUES (2, 'REAIS', 'R$', 4.72, 2);
        INSERT INTO currency("id", "name", "acronimo", "valor", "idcountry") VALUES (3, 'DOLLAR', '$', 1, 3);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public.currency;
    `);
  }
}
