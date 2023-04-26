
import React, { Component } from 'react';
import  { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookShopService from '../../repository/bookShopRepository';
import Categories from '../Category/categories';
import Books from '../Books/BooksList/books';
import Header from '../Header/header';
import BookAdd from '../Books/BookAdd/bookAdd';
import BookEdit from '../Books/BookEdit/bookEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      books: [],
      authors: [],
      selectedBook: {}
    }
  }

  render() {
    return (
<BrowserRouter>
      <Header />
        <main>
          <div className='container'>
          <Routes>
            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
            <Route path={"/books/add"} element={<BookAdd authors={this.state.authors} categories={this.state.categories} onAddBook={this.addBook}/>}/>
            <Route path={"/books/edit/:id"} element={<BookEdit authors={this.state.authors} categories={this.state.categories} onEditBook={this.editBook} book={this.state.selectedBook}/>}/>
            <Route path={"/books"} element={<Books books={this.state.books} onRent={this.rentBook} onDelete={this.deleteBook} onEdit={this.getBook}/>}/>
            <Route path={"/"} element={ <Navigate to="/books" /> } />  
          </Routes>
            
          </div>
        </main>
</BrowserRouter>
    );
  }

  loadCategories = () => {
    BookShopService.fetchCategories().then((data) => {
      this.setState(
        {
          categories: data.data
        }
      );
    })
  }

  loadBooks = () => {
    BookShopService.fetchBooks().then((data) => {
      this.setState(
        {
          books: data.data
        }
      );
    })
  }

  loadAuthors = () => {
    BookShopService.fetchAuthors().then((data) => {
      this.setState(
        {
          authors: data.data
        }
      );
    })
  }

  deleteBook = (id) => {
    BookShopService.deleteBook(id).then(() => {this.loadBooks()});
  }

  rentBook = (id) => {
    BookShopService.rentBook(id).then(() => {this.loadBooks()});
  }

  addBook = (name, category, authorId, availableCopies) => {
    BookShopService.addBook(name, category, authorId, availableCopies).then(() => {this.loadBooks()});
  }

  getBook = (id) => {
    BookShopService.getBook(id).then((data) => {
      this.setState({
        selectedBook: data.data
      });
    })
  }

  editBook = (id, name, category, authorId, availableCopies) => {
    BookShopService.editBook(id, name, category, authorId, availableCopies).then(() => {this.loadBooks()});
  }

  componentDidMount() {
    this.loadCategories();
    this.loadBooks();
    this.loadAuthors();
  }

}

export default App;
