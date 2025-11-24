import React from 'react'
import { Card, Button } from 'react-bootstrap'
import API from '../../utils/API'

function SearchedBookCard({ book }) {
    const handleBookSave = () => {
        API.saveBook({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : '',
            link: book.volumeInfo.previewLink,
        })
            .then((res) => {
                console.log(res)
                alert(`Book ${book.volumeInfo.title} saved!`)
            })
            .catch((err) => console.log(err))
    }

    return (
        <Card className="col">
            <Card.Img
                variant="top"
                src={
                    book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : ''
                }
                style={{ width: '100px' }}
            />
            <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Subtitle>
                    {book.volumeInfo.authors
                        ? book.volumeInfo.authors[0]
                        : 'Unknown Author'}
                </Card.Subtitle>
                <Card.Text className="text-truncate">
                    {book.volumeInfo.description}
                </Card.Text>
                <Card.Link href={book.volumeInfo.previewLink} target="_blank">
                    Read More
                </Card.Link>
                <Button variant="primary" onClick={handleBookSave}>
                    Save
                </Button>
            </Card.Body>
        </Card>
    )
}

export default SearchedBookCard
