import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    name : string ;

    @Column('text')
    describtion : string ;

}