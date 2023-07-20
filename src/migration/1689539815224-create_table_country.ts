import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCountry1689539815224 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE public.country (
          id integer NOT NULL,
          name character varying NOT NULL,
          code character varying NOT NULL,
          acronimo character varying NOT NULL,
          created_at timestamp without time zone DEFAULT now() NOT NULL,
          updated_at timestamp without time zone DEFAULT now() NOT NULL,
          primary key (id)
      );

      CREATE SEQUENCE public.country_id_seq 
          AS integer
          START WITH 1
          INCREMENT BY 1
          NO MINVALUE 
          NO MAXVALUE
          CACHE 1;

      ALTER SEQUENCE public.country_id_seq OWNED BY public.country.id;

      ALTER TABLE ONLY public.country ALTER COLUMN id SET DEFAULT nextval('public.country_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.country;
    `);
  }
}
