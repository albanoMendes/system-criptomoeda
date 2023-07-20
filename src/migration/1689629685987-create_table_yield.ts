import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableYield1689629685987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.yield (
            id integer NOT NULL,
            crypto character varying NOT NULL,
            min float NOT NULL,
            max float NOT NULL,
            redimentoDia float NOT NULL,
            idCripto integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.yield_id_seq 
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.yield_id_seq OWNED BY public.yield.id;

        ALTER TABLE ONLY public.yield ALTER COLUMN id SET DEFAULT nextval('public.yield_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.yield;
    `);
  }
}
