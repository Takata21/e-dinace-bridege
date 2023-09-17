import express from 'npm:express@4.17'
import cors from 'npm:cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = Deno.env.get('PORT') || 4000
app.get('/', (req, res) => {
  res.send('Hello TKT')
})
app.post('/', async (req, res) => {
  const { url } = req.body
  try {
    console.log('ephemeris')
    const response = await fetch(url, {
      method: 'POST',
    })
    const data = await response.json()
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})
app.listen(PORT)
