import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Users extends Model {
  @Column
  name: string;

  @Column
  password: string;

  @Column
  role: string;

  @Column
  email: string;
}
