const express = require('express')
const { CustomException } = require('./exceptions/CustomExceptions.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000


app.get('/', (req, res) => {
    throw new CustomException('This is a custom exception');
})

app.use((err, req, res, next) => {
    if (err instanceof CustomException) {
        console.log(`CustomException: ${err.message}, ${err.getStatusCode()}`)
        res.status(err.getStatusCode()).json({ message: err.message });
        return
    }

    // console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})