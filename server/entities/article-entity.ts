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

  constructor(initializer?: any) {
    this.Id = initializer?.Id;
    this.Headline = initializer?.Headline;
    this.ArticleContent = initializer?.ArticleContent;
    this.PublicationDate = initializer?.PublicationDate;
    this.UpdateDate = initializer?.UpdateDate;
    this.Symbols = initializer?.Symbols;
  }
}