import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"articles"})
export class Article {
  @PrimaryGeneratedColumn()
  Id: number
  
  @Column()
  Headline: string

  @Column()
  ArticleContent: string

  @Column()
  PublicationDate: string

  @Column()
  UpdateDate: string

  @Column()
  Symbols: string
}