export class ArticleContract {
  Headline: string
  ArticleContent: string
  PublicationDate: string
  UpdateDate: string
  Symbols: string

  constructor(initializer?: any) {
    this.Headline = initializer?.Headline;
    this.ArticleContent = initializer?.ArticleContent;
    this.PublicationDate = initializer?.PublicationDate;
    this.UpdateDate = initializer?.UpdateDate;
    this.Symbols = initializer?.Symbols;
  }
}