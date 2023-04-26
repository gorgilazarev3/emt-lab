import React from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "", 
        category: "NOVEL", 
        authorId: 1,
        availableCopies: 0
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const selectedCategory = document.getElementsByName("category")[0].value;
        // const category = formData.category !== "" ? formData.category : props.book.category;
        const category = selectedCategory;
        const authorId = formData.authorId !== 1 ? formData.authorId : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;;

        props.onEditBook(props.book.id, name, category, authorId, availableCopies);
        history("/books");
    }


    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text"
                               className="form-control"
                               id="category"
                               name="category"
                               placeholder="Category"
                               required
                               onChange={handleChange}
                        />
                    </div> */}
                    <div className="form-group mb-2">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category) => {
                                if(props.book.category !== undefined && props.book.category === category) {
                                    return <option selected={props.book.category} value={category}>{category}</option>
                                }
                                else
                                    return <option value={category}>{category}</option>
                            }
                                
                            )}
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>
                                {
                                if(props.book.author !== undefined && props.book.author.id === author.id)
                                    return <option selected={props.book.author.id} value={author.id}>{author.name} {author.surname}</option>
                                else
                                    return <option value={author.id}>{author.name} {author.surname}</option>
                            }
                                
                            )}
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default BookEdit;