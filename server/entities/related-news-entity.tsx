import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RelatedNews {
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

  @Column()
  Author: string

  @Column()
  Articleurl: string

  @Column()
  ImageUrl: string

  @Column()
  Image150Url: string

  @Column()
  Category: string
}