import express from 'express'
import cors from 'cors' 
import {getNotes, addNote} from './model/supabase.js'
import { log } from 'console'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  const {data, error} = await getNotes()
  res.json(data)
})

app.post('/', async (req, res) => {
    const {data, error} = await addNote(req.body)
    res.json(data)
    // res.send(req.body);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})