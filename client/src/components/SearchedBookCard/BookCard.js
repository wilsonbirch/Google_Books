import React, {useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";

function SearchedBookCard (props) {

    let searchedBookArray = [];
    searchedBookArray = props.items;

    function createSearchBookCard(book) {
        return (
            <Card className="col" key = {book.id}>
    <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} style = {{ width: "100px"}}/>
            <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Subtitle>{book.volumeInfo.authors}</Card.Subtitle>
                <Card.Text className = "text-truncate">{book.volumeInfo.description}</Card.Text>
                <Card.Link href = {book.selfLink}>Read More Here</Card.Link>
            </Card.Body>
        </Card>
        );
    }

    if(searchedBookArray) {
        let renderedsearchedBookArray = searchedBookArray.map(createSearchBookCard)
        return renderedsearchedBookArray;
    }else{
        return (
            <p>no books searched!!</p>
        );
    }


}

export default SearchedBookCard;