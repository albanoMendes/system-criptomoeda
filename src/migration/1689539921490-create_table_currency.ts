import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCurrency1689539921490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`     
        CREATE TABLE public.currency (
            id integer NOT NULL,
            name character varying NOT NULL,
            acronimo character varying NOT NULL,
            valor float NOT NULL,
            idCountry integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.currency_id_seq 
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.currency_id_seq OWNED BY public.currency.id;

        ALTER TABLE ONLY public.currency ALTER COLUMN id SET DEFAULT nextval('public.currency_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.currency;
    `);
  }
}
