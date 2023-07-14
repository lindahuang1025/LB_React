import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"position_summary"})
export class PositionSummary {
  @PrimaryGeneratedColumn()
  Id: number

  @Column()
  Action: number

  @Column()
  Symbol: string

  @Column()
  Position: string

  @Column()
  Weight: number

  @Column()
  EntryDate: string

  @Column()
  Entry: number

  @Column()
  AvgCost: number

  @Column()
  FromEntry: number

  @Column()
  FromAvgCost: number

  @Column()
  Sort: number

  @Column()
  PositionValue: number

  @Column()
  InsertHistory: boolean

  @Column()
  IsInList: boolean

  constructor(initializer?: any) {
    this.Id = initializer?.Id;
    this.Action = initializer?.Action;
    this.Symbol = initializer?.Symbol;
    this.Position = initializer?.Position;
    this.Weight = initializer?.Weight;
    this.EntryDate = initializer?.EntryDate;
    this.Entry = initializer?.Entry;
    this.AvgCost = initializer?.AvgCost;
    this.FromEntry = initializer?.FromEntry;
    this.FromAvgCost = initializer?.FromAvgCost;
    this.Sort = initializer?.Sort;
    this.PositionValue = initializer?.PositionValue;
    this.InsertHistory = initializer?.InsertHistory;
    this.IsInList = initializer?.IsInList;
  }
}