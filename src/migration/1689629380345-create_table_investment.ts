import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInvestment1689629380345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.investiment (
            id integer NOT NULL,
            crypto character varying NOT NULL,
            valor float NOT NULL,
            redimento float NOT NULL,
            status character varying NOT NULL,
            idUser integer NOT NULL,
            idYield integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.investiment_id_seq 
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.investiment_id_seq OWNED BY public.investiment.id;

        ALTER TABLE ONLY public.investiment ALTER COLUMN id SET DEFAULT nextval('public.investiment_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.investiment;
    `);
  }
}
