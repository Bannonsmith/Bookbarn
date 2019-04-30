import React, {Component} from 'react';
// import './BaseLayout.css';
import {BookList} from './BookList'
import AddBook from './AddBook'
import {Link, NavLink} from 'react-router-dom'

class Menu extends Component {

    render() {

       const style = {
        display: "flex",
        backgroundColor: "yellow",
        border: "1px solid blue",
        cursor: "pointer",
        padding: "20px",
        listStyle: "none"
            
        }
        return(
            <div >
                <ul style={style} className="menu">
                <li><NavLink to="/" className="link">Home</NavLink></li>
                <li><Link to="/view-all-books">View All Books</Link></li>
                <li><Link to="/add-book">Add Book</Link></li>
                </ul>
            </div>

        );
    }
}



class Footer extends Component {

    render() {

       const style = {
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            marginTop: "25px",
            marginBottom: "45px",
            paddingTop: "25px",
            paddingBottom: "45px"
        }
      return (
        <div style={style} className="footer">Copyright 2019</div>
      )
    }
  
  }


export class BaseLayout extends Component {
    
    render() {
        return( 
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}