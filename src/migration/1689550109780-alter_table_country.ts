import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableCountry1689550109780 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
