import React, { Component } from "react";
import books from "../books";
import {Link} from 'react-router-dom'

class Details extends Component {
  constructor() {
    super()
    this.state = {
      books: books
    };
  }
  render() {
    //console.log(this.state.books[4].title)
    var id = parseInt(this.props.match.params.id);

    var list = this.state.books.map(book => {
      if (book.id === id)
        return (
          <div>
            <figure class="book">
            <Link to={'/'}>
              <a href="#" class="book__back">
               <span class="emoji-left">👈</span>Back
               
              </a>
              </Link>
              <div class="book__hero">
                <img
                  src={book.image}
                  alt=""
                  class="book__img"
                />
              </div>
              <h2 class="book__name">{book.title}</h2>
              <div class="book__details">
                <p>
                  <span class="emoji-detail-left">🖊️</span> {book.author}
                </p>
                <p>
                  <span class="emoji-detail-left">⭐</span> {book.stars}
                </p>
                <p>
                  <span class="emoji-detail-left">📅</span> {book.publication}
                </p>
                <p>
                  <span class="emoji-detail-left">📚</span> {book.category}
                </p>
              </div>
              <p class="book__description">
                {book.summary}
              </p>
              <p class="book__source">
                Source:{" "}
                <a href="https://www.amazon.com" target="_blank">
                  https://www.amazon.com
                </a>
              </p>
            </figure>
          </div>
        );
    });
    console.log(this.state.books);
    console.log(list);
    console.log(id);

    return (
      <div class="container">
        
        {list}
      </div>
    );
  }
}

export default Details;
