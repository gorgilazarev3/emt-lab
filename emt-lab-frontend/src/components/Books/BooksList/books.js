import React, { Component } from "react";
import BookItem from "../BookItem/bookItem";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate"

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);
        return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}>Available copies</th>
                            <th scope={"col"}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {books}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel="back"
                               nextLabel="next"
                               breakLabel={<a href="/#">...</a>}
                               // breakClassName={"break-me"}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               previousClassName={"page-item"}
                               previousLinkClassName="page-link"
                               nextClassName="page-item"
                               nextLinkClassName="page-link"
                               breakClassName="page-item"
                               breakLinkClassName="page-link"
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>

            </div>
        </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }
    
    
    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((item, index) => {
            return (
                <BookItem item={item} onRent={this.props.onRent} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}




// const books = (props) => {
//     return (
//         <div className={"container mm-4 mt-5"}>
//             <div className={"row"}>
//                 <div className={"table-responsive"}>
//                     <table className={"table table-striped"}>
//                         <thead>
//                         <tr>
//                             <th scope={"col"}>Name</th>
//                             <th scope={"col"}>Category</th>
//                             <th scope={"col"}>Author</th>
//                             <th scope={"col"}>Available copies</th>
//                             <th scope={"col"}></th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {props.books.map((bookItem) => {
//                             return (
//                                 <BookItem key={bookItem.id} onDelete={props.onDelete} item={bookItem} onEdit={props.onEdit}/>
//                             );
//                         })}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="col mb-3">
//                     <div className="row">
//                         <div className="col-sm-12 col-md-12">
//                             <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

export default Books;
