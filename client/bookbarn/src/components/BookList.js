import React, {Component} from 'react';

export class BookList extends Component {

    constructor() {
        super()


        this.state = {

            books: [],
            title: "",
            genre: "",
            publisher: "",
            year: "",
            imageURL: '',
            id: ""
      
      
        }
    }


    componentDidMount() {

          let url = "http://localhost:5050/api/books"
    
            fetch(url)
            .then(response => response.json())
            .then(json => {
            this.setState({
                books: json
            })
            })
        }

    handleDeleteBook = (bookId) => {
        
        let books = this.state.books
        const newBooks = [...books];
       let newBookList =  newBooks.filter((book) => {
            if(book.id !== this.state.id) {
                this.setState({
                    books: newBookList
                })
            }
        })
        console.table(newBookList)
      
    }      



    render() {

        let books = this.state.books
        let bookItems = books.map((book) => {
            return (
                <div>
                    <ul key={book.id}>
                    <li>{book.title}</li>
                    <li>{book.genre}</li>
                    <li>{book.publisher}</li>
                    <li>{book.year}</li>
                    <li><img src={book.imageURL} alt=""></img></li>
                    <button onClick={() => this.handleDeleteBook(book.id)}>Delete</button>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                <h2>BookList</h2>
                <ul>{bookItems}</ul>
            </div>
        );
    }
    
}