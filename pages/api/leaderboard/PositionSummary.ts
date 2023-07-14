
import { getPositionSummary } from "@/server/repositories/leaders-respository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/leaderboard/PositionSummary:
 *     get:
 *       tags: [Leaderboard]
 *       description: get position summary
 *       responses:
 *         200:
 *           description: The position summary array
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/PositionSummary'
 * definitions:
 *   PositionSummary:
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
 *             Id:
 *               type: number  
 *             Action:
 *               type: number  
 *             Symbol:
 *               type: string  
 *             Position:
 *               type: string    
 *             Weight:
 *               type: number   
 *             EntryDate:
 *               type: string   
 *             Entry:
 *               type: number   
 *             AvgCost:
 *               type: number   
 *             FromEntry:
 *               type: number   
 *             FromAvgCost:
 *               type: number    
 *             Sort:
 *               type: number    
 *             PositionValue:
 *               type: number    
 *             InsertHistory:
 *               type: boolean   
 *             IsInList:
 *               type: boolean      
 */
async function onGetPositionSummary(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const dataList = await getPositionSummary();
    const response = { ok: true, message: "success", data: dataList };
    res.status(200).json(response);
}

export default onGetPositionSummary
