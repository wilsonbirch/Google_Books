import React from "react";
import { Jumbotron, Container } from 'react-bootstrap'

function Saved () {

    return (
        <Container >
            <Jumbotron id ="jumbotron">
                <h1>Google Books Saved</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </Jumbotron>
        </Container>
    );
}

export default Saved;