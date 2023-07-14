import { getWholelists } from "@/server/repositories/leaders-respository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/leaderboard/wholelists:
 *     get:
 *       tags: [Leaderboard]
 *       description: get wholelists
 *       responses:
 *         200:
 *           description: The wholelists array
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/Wholelists'
 * definitions:
 *   Wholelists:
 *     type: object
 *     properties:
 *       status: 
 *         type: string  
 *       message:
 *         type: string  
 *       data: 
 *         type: array
 *         items:
 *           type: object
 *           properties: 
 *             Symbol:
 *               type: string  
 *             CompanyName:
 *               type: string  
 *             Price:
 *               type: number  
 *             PriceChange:
 *               type: number    
 *             PricePercentChange:
 *               type: number   
 *             Volume:
 *               type: number   
 *             VolumePercentChange:
 *               type: number   
 *             Header:
 *               type: string   
 *             Sector:
 *               type: string   
 *             SectorRank:
 *               type: number    
 *             SymbolOrder:
 *               type: number    
 *             Story:
 *               type: string    
 *             UpdateDate:
 *               type: string   
 *             NearBuyPoint:
 *               type: boolean 
 *             BuyPoint:
 *               type: string  
 *             BuyRangeFrom:
 *               type: string 
 *             BuyRangeTo:
 *               type: string 
 *             CurrentAction:
 *               type: string
 *             LeaderboardAnalysis:
 *               type: string 
 *             BackStory:
 *               type: string 
 *             IsInLeaderboard:
 *               type: boolean 
 *             RecentArticle:
 *               type: string 
 *             PreviousClose:
 *               type: number 
 *             CheckupUrl:
 *               type: string 
 *             ListName:
 *               type: string     
 *             PositionSize:
 *               type: string   
 */
async function onGetWholelists(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const dataList = await getWholelists();
    const response = { ok: true, message: "success", data: dataList };
    res.status(200).json(response);
}

export default onGetWholelists
