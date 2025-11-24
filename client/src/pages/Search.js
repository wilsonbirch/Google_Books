import React, { useState } from 'react'
import { Jumbotron, Container, Card, Form, Button } from 'react-bootstrap'
import SearchedBookCard from '../components/SearchedBookCard/BookCard'
import API from '../utils/API'

function Search() {
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(event) {
        event.preventDefault()
        //console.log("Submitted: " + searchTerm);
    }

    const handleSearch = async () => {
        if (!searchTerm.trim()) return // Don't search empty strings

        try {
            const response = await API.searchBooks(searchTerm)
            setItems(response.data.items || [])
        } catch (error) {
            console.error('Search error:', error)
            setItems([]) // Clear results on error
        }
    }

    return (
        <Container className="main">
            <Jumbotron id="jumbotron">
                <h1>Google Books Search</h1>
                <p>
                    Search for books of interest here, find something you like?
                    View, then save it and view on the saved books page.
                </p>
            </Jumbotron>

            <Card>
                <Card.Header>Books Search</Card.Header>
                <Card.Body>
                    <Form onChange={handleChange}>
                        <Form.Group controlId="booksearch">
                            <Form.Control
                                autoFocus
                                type="text"
                                placeholder="Type Book Title Here"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="light btn-sm"
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Card id="resultsCard">
                <Card.Header>Search Results</Card.Header>
                <Card.Body>
                    <SearchedBookCard {...items}></SearchedBookCard>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Search
