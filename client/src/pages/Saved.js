import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Card } from 'react-bootstrap'
import BookCard from "../components/BookCard/BookCard"
import API from "../utils/API";

function Saved ()  {
    
    
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
    };

    //console.log(books);

    return (
        <Container >
            <Jumbotron id ="jumbotron">
                <h1>Google Books Saved</h1>
                <p>
                    All saved books will be shown here, you have the option to view or delete them.
                </p>
            </Jumbotron>

            <Card id = "resultsCard">
                <Card.Header>Saved Books</Card.Header>
                <Card.Body>
                    <BookCard props = {books}>
                    </BookCard>
                </Card.Body>
            </Card>

        </Container>
    );

}

export default Saved;