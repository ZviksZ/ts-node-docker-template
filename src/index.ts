import express from 'express'

const app = express();

app.get('/', (res,req) => {
   req.send('hello')
})

app.listen(4000, () => {
   console.log('Server running on port 4000')
})
