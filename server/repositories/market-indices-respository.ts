import { MarketIndicesContract, SearchedSymbolContract } from "@/contracts"

async function getMarketIndices(): Promise<MarketIndicesContract> {
  const marketIndicesData: any = require("@/server/mockData/market-indices.json")
  const marketIndices: MarketIndicesContract = new MarketIndicesContract(marketIndicesData)
  return Promise.resolve(marketIndices)
}

async function getSearchedSymbols(): Promise<SearchedSymbolContract[]> {
  const searchedSymbolsData: any[] = require("@/server/mockData/searched-symbols.json")
  const searchedSymbol: SearchedSymbolContract[] = searchedSymbolsData.map((i: any) => new SearchedSymbolContract(i))
  return Promise.resolve(searchedSymbol)
}

export {
  getMarketIndices,
  getSearchedSymbols,
}