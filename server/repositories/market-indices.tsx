import { MarketIndices, SearchedSymbol } from "@/contracts"

async function getMarketIndices(): Promise<MarketIndices> {
  const marketIndicesData: any = require("@/server/mockData/market-indices.json")
  const marketIndices: MarketIndices = new MarketIndices(marketIndicesData)
  return Promise.resolve(marketIndices)
}

async function getSearchedSymbols(): Promise<SearchedSymbol[]> {
  const searchedSymbolsData: any[] = require("@/server/mockData/searched-symbols.json")
  const searchedSymbol: SearchedSymbol[] = searchedSymbolsData.map((i: any) => new SearchedSymbol(i))
  return Promise.resolve(searchedSymbol)
}

export {
  getMarketIndices,
  getSearchedSymbols,
}