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
}