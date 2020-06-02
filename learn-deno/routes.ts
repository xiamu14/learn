import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getBooks } from './controller.ts'

const router = new Router()
router.get('/books', getBooks)

export default router
