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

  constructor(initializer?: any) {
    this.Id = initializer?.Id;
    this.Headline = initializer?.Headline;
    this.ArticleContent = initializer?.ArticleContent;
    this.PublicationDate = initializer?.PublicationDate;
    this.UpdateDate = initializer?.UpdateDate;
    this.Symbols = initializer?.Symbols;
    this.Author = initializer?.Author;
    this.Articleurl = initializer?.Articleurl;
    this.ImageUrl = initializer?.ImageUrl;
    this.Image150Url = initializer?.Image150Url;
    this.Category = initializer?.Category;
  }
}