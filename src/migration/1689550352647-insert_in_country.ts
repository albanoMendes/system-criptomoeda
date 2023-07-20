import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInCountry1689550352647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO country("id", "name", "code", "acronimo") VALUES (1, 'ANGOLA', '+244', 'AN'); 
        INSERT INTO country("id", "name", "code", "acronimo") VALUES (2, 'BRAZIL', '+55', 'BR');
        INSERT INTO country("id", "name", "code", "acronimo") VALUES (3, 'ESTADOS UNIDOS', '+1', 'USA');  
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public.country;
    `);
  }
}
