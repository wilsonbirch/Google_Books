const router = require('express').Router()
const booksController = require('../../controllers/booksController')
const axios = require('axios')

// Matches with "/api/books"
router.route('/').get(booksController.findAll).post(booksController.create)

// Matches with "/api/books/search" - NEW ROUTE
router.route('/search').get(async (req, res) => {
    const { query } = req.query
    const apiKey = process.env.GOOGLE_BOOKS_API_KEY

    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
        )
        res.json(response.data)
    } catch (error) {
        console.error('Google Books API Error:', error.message)
        res.status(500).json({ error: error.message })
    }
})

// Matches with "/api/books/:id"
router.route('/:id').delete(booksController.remove)

module.exports = router
