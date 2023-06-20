import { MarketIndices } from "@/interfaces"

async function getMarketIndices(): Promise<MarketIndices> {
  const responseData: any = require("@/server/mockData/market-indices.json")
  const marketIndices: MarketIndices = new MarketIndices(responseData)
  return Promise.resolve(marketIndices)
}

export {
  getMarketIndices
}