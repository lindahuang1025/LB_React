
import { getArticle } from "../../../server/repositories/article-repositories"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/leaderboard/article:
 *     get:
 *       tags: [Leaderboard]
 *       description: get article
 *       responses:
 *         200:
 *           description: The article object
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/Article'
 * definitions:
 *   Article:
 *     type: object
 *     properties:
 *       status: 
 *         type: string  
 *       message:
 *         type: string  
 *       data: 
 *         type: object
 *         properties: 
 *           Headline:
 *             type: string  
 *           ArticleContent:
 *             type: string   
 *           PublicationDate:
 *             type: string 
 *           UpdateDate:
 *             type: string   
 *           Symbols:
 *             type: string   
 */
export default async function(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    const dataList = await getArticle();
    const response = { ok: true, message: "success", data: dataList };
    res.status(200).json(response);
}
