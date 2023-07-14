import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"whole_lists"})
export class Wholelists {
  @PrimaryGeneratedColumn()
  Id: number

  @Column()
  Symbol: string

  @Column()
  CompanyName: string

  @Column()
  Price: number

  @Column()
  PriceChange: number

  @Column()
  PricePercentChange: number

  @Column()
  Volume: number

  @Column()
  VolumePercentChange: number

  @Column()
  Header: string

  @Column()
  Sector: string

  @Column()
  SectorRank: number

  @Column()
  SymbolOrder: number

  @Column()
  Story: string

  @Column()
  UpdateDate: string

  @Column()
  NearBuyPoint: boolean

  @Column()
  BuyPoint: string

  @Column()
  BuyRangeFrom: string

  @Column()
  BuyRangeTo: string

  @Column()
  CurrentAction: string

  @Column()
  LeaderboardAnalysis: string

  @Column()
  BackStory: string

  @Column()
  IsInLeaderboard: boolean

  @Column()
  RecentArticle: string

  @Column()
  PreviousClose: number

  @Column()
  CheckupUrl: string

  @Column()
  ListName: string

  @Column()
  PositionSize: string

  constructor(initializer?: any) {
    this.Id = initializer?.Id;
    this.Symbol = initializer?.Symbol;
    this.CompanyName = initializer?.CompanyName;
    this.Price = initializer?.Price;
    this.PriceChange = initializer?.PriceChange;
    this.PricePercentChange = initializer?.PricePercentChange;
    this.Volume = initializer?.Volume;
    this.VolumePercentChange = initializer?.VolumePercentChange;
    this.Header = initializer?.Header;
    this.Sector = initializer?.Sector;
    this.SectorRank = initializer?.SectorRank;
    this.SymbolOrder = initializer?.SymbolOrder;
    this.Story = initializer?.Story;
    this.UpdateDate = initializer?.UpdateDate;
    this.NearBuyPoint = initializer?.NearBuyPoint;
    this.BuyPoint = initializer?.BuyPoint;
    this.BuyRangeFrom = initializer?.BuyRangeFrom;
    this.BuyRangeTo = initializer?.BuyRangeTo;
    this.CurrentAction = initializer?.CurrentAction;
    this.LeaderboardAnalysis = initializer?.LeaderboardAnalysis;
    this.BackStory = initializer?.BackStory;
    this.IsInLeaderboard = initializer?.IsInLeaderboard;
    this.RecentArticle = initializer?.RecentArticle;
    this.PreviousClose = initializer?.PreviousClose;
    this.CheckupUrl = initializer?.CheckupUrl;
    this.ListName = initializer?.ListName;
    this.PositionSize = initializer?.PositionSize;
  }
}