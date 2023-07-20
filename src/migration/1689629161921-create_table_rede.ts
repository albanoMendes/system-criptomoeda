import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRede1689629161921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`            
        CREATE TABLE public.rede (
            id integer NOT NULL,
            bank character varying NOT NULL,
            titular character varying NOT NULL,
            naccount character varying NOT NULL,
            idCrypto integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );

        CREATE SEQUENCE public.rede_id_seq 
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.rede_id_seq OWNED BY public.rede.id;

        ALTER TABLE ONLY public.rede ALTER COLUMN id SET DEFAULT nextval('public.rede_id_seq'::regclass); 
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.rede;
    `);
  }
}
