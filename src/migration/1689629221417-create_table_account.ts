import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAccount1689629221417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.account (
            id integer NOT NULL,
            bank character varying NOT NULL,
            titular character varying NOT NULL,
            naccount character varying NOT NULL,
            idInvestment integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.account_id_seq 
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.account_id_seq OWNED BY public.account.id;

        ALTER TABLE ONLY public.account ALTER COLUMN id SET DEFAULT nextval('public.account_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.account;
    `);
  }
}
