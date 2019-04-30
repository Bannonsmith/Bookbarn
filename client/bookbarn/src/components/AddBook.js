import React, {Component} from 'react';
import App from '../App';

export class AddBook extends Component {

    constructor() {
        super()

        this.state = {
            books: [],
            title: "",
            genre: "",
            publisher: "",
            year: "",
            imageURL: "",
            id: ""
        }
    }

    handleTextBoxChange = (e) => {
        console.log(e.target.title)
  
        this.setState({
          [e.target.name]:  e.target.value,
         
  
  
        })
      }

    handleSaveBook = () => {

        let book = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imageURL: this.state.imageURL }
        
        fetch('http://localhost:5050/api/books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(book)
  
  
        })
  
      }
  
  

    render() {

    return (
        <div>
          <h2>BookList</h2>
          <input type="text" onChange={this.handleTextBoxChange} placeholder="Title" name="title" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder="Genre" name="genre" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder="Publisher" name="publisher" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder="Year"  name="year"/>
          <input type="text" onChange={this.handleTextBoxChange} placeholder="Image Url" name="imageURL" />
          <button onClick={this.handleSaveBook}>Save</button>
        </div>
        );



    }
}

