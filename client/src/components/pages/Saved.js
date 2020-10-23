import React from "react";
import { Jumbotron, Container, Card } from 'react-bootstrap'

function Saved () {

    return (
        <Container >
            <Jumbotron id ="jumbotron">
                <h1>Google Books Saved</h1>
                <p>
                    All saved books will be shown here, you have the option to view or delete them.
                </p>
            </Jumbotron>

            <Card id = "resultsCard" >
                <Card.Header>Search Results</Card.Header>
                <Card.Body>
                    <Card.Text> Saved Books will render here</Card.Text>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default Saved;