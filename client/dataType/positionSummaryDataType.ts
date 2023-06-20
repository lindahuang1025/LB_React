interface positionSummaryDataType {
  Id: number
  Action: number
  Symbol: string
  Position: string
  Weight: number
  EntryDate: string
  Entry: number
  AvgCost: number
  FromEntry: number
  FromAvgCost: number
  Sort: number
  PositionValue: number
  InsertHistory: boolean
  IsInList: boolean
}
  
export default positionSummaryDataType;