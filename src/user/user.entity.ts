import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  user_pw: string;
}
