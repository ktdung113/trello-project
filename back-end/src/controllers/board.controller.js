import { BoardService } from '@/services/board.service'
import { HttpStatusCode } from '@/utilities/constants'

const createNew = async (req, res) => {
  try {
    const result = await BoardService.createNew(req.body)
    res.status(HttpStatusCode.OK).json(result)
  } catch (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      errors: err.message
    })
  }
}

export const BoardController = { createNew }