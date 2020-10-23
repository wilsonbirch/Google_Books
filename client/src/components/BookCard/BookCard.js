import React from "react";
import { Card } from "react-bootstrap";

function BookCard (props) {

    let bookArray = props;
    let renderedBookArray;

    function createBookCard(book) {
        return (
            <Card className="col">
            <Card.Img variant="top" src={book.image} style = {{ width: "100px"}}/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.author}</Card.Subtitle>
                <Card.Text className = "text-truncate">{book.description}</Card.Text>
                <Card.Link href={book.link}>Read More Here</Card.Link>
            </Card.Body>
        </Card>
        );
    }

    if(bookArray.props[0]) {
        
        renderedBookArray = bookArray.props.map(createBookCard)
        return renderedBookArray;
    }else{
        return (
            <p>no books saved!</p>
        );
    }






}

export default BookCard;