export class PositionSummaryContract {
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