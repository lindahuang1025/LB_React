import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"related_news"})
export class RelatedNews {
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