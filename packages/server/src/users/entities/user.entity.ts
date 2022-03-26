import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  isAdmin: number;
  @Column()
  nickName: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  linkPwd?: string;
  @Column({ nullable: true })
  port?: number;
  @Column({ nullable: true })
  statistics?: number;
}
