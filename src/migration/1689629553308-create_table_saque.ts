import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableSaque1689629553308 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.saque (
            id integer NOT NULL,
            valor float NOT NULL,
            status character varying NOT NULL,  	
            idInvestment integer NOT NULL,
            idAccount integer NOT NULL,
            idUser integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.saque_id_seq 
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.saque_id_seq OWNED BY public.saque.id;

        ALTER TABLE ONLY public.saque ALTER COLUMN id SET DEFAULT nextval('public.saque_id_seq'::regclass)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.saque;
    `);
  }
}
