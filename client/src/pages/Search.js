import React from "react";
import { Jumbotron, Container, Card, Form, Button } from 'react-bootstrap'

function Search () {

    return (
        <Container>
            <Jumbotron id ="jumbotron">
                <h1>Google Books Search</h1>
                <p>
                    Search for books of interest here, find something you like? View, then save it and view on the saved books page.
                </p>
            </Jumbotron>

            <Card>
                <Card.Header>Books Search</Card.Header>
                <Card.Body>
                    <Form>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Type Book Title Here" />
                    </Form.Group>
                    <Button variant="light btn-sm" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Card id = "resultsCard" >
                <Card.Header>Search Results</Card.Header>
                <Card.Body>
                    <Card.Text>Books will render here</Card.Text>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Search;