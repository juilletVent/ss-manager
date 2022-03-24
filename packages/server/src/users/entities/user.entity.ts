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
  @Column()
  linkPwd: string;
  @Column()
  port: number;
  @Column()
  statistics: number;
}
