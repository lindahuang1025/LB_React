import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Article {
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