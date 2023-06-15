
import { deleteUserById, getUserById } from "../../../server/repositories/user-repository"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @swagger
 * paths:
 *   /api/users/delete:
 *     delete:
 *       tags: [User]
 *       description: delete user by id 
 *       parameters: 
 *         - in: query
 *           name: id
 *           description: user id
 *           required: true
 *           type: integer
 *           format: int32
 *       responses:
 *         200:
 *           description: delete user
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/DeleteUser'
 * definitions:
 *   DeleteUser:
 *     type: object
 *     properties:
 *       ok: 
 *         type: boolean  
 *       message:
 *         type: string  
 *       data: 
 *         type: number
 */
export default async function(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    let id = Number(req.query.id || 0);
    let currentUser = await getUserById(id);
    if(!currentUser){
      const response = { ok: false, message: "Sorry, this user is not existed", data: id };
      res.status(200).json(response);
      return;
    }

    await deleteUserById(id)
    const response = { ok: true, message: "success", data: id };
    res.status(200).json(response);
}