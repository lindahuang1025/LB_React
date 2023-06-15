import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Wholelists {
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
}