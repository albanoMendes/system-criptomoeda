import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'lastname', nullable: false })
  lastname: string;

  @Column({ name: 'img' })
  img: string;

  @Column({ name: 'typeUser', nullable: false })
  typeUser: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'phone', nullable: false })
  phone: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'idCountry', nullable: false })
  idCountry: number;

  @CreateDateColumn({ name: 'create_at', nullable: false })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', nullable: false })
  updatedAt: Date;
}
