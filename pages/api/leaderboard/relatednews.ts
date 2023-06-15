
import { getRelatedNews } from "../../../server/repositories/related-news-repositories"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/leaderboard/relatednews:
 *     get:
 *       tags: [Leaderboard]
 *       description: get related news
 *       responses:
 *         200:
 *           description: The related news array
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/RelatedNews'
 * definitions:
 *   RelatedNews:
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
 *             Headline:
 *               type: string  
 *             ArticleContent:
 *               type: string  
 *             PublicationDate:
 *               type: string  
 *             UpdateDate:
 *               type: string    
 *             Symbols:
 *               type: string   
 *             Author:
 *               type: string   
 *             Articleurl:
 *               type: string   
 *             ImageUrl:
 *               type: string   
 *             Image150Url:
 *               type: string   
 *             Category:
 *               type: string        
 */
export default async function(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const dataList = await getRelatedNews();
    const response = { ok: true, message: "success", data: dataList };
    res.status(200).json(response);
}
