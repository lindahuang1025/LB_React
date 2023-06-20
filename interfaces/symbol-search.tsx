export class SymbolSearch {
	Symbol: string;
	CompanyName: string;
	Url: string;
	IsIndex: boolean;
	IsLineChart: boolean;

  constructor(initializer?: any) {
    this.Symbol = initializer?.Symbol;
    this.CompanyName = initializer?.CompanyName;
    this.Url = initializer?.Url;
    this.IsIndex = initializer?.IsIndex;
    this.IsLineChart = initializer?.IsLineChart;
  }
}
