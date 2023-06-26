import type { NextApiRequest, NextApiResponse } from 'next'

import { SearchedSymbolContract, SymbolSearchResponse } from "@/contracts"
import { getSearchedSymbols } from "@/server/repositories/market-indices-respository"

async function searchSymbol(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.search) {
    const emptyResonseData: any = { ok: true, message: "success", data: [] };
    return res.status(200).json(new SymbolSearchResponse(emptyResonseData));
  }
  const searchedSymbols: SearchedSymbolContract[] = await getSearchedSymbols();
  const responseData: any = { ok: true, message: "success", data: searchedSymbols };
  res.status(200).json(new SymbolSearchResponse(responseData));
}

export default searchSymbol
