import axios from "../custom-axios/axios"

const BookShopService = {
    fetchCategories: () => {
        return axios.get("/category");
    },
    fetchBooks: () => {
        return axios.get("/book");
    },
    fetchAuthors: () => {
        return axios.get("/author");
    },
    deleteBook: (id) => {
        return axios.delete(`/book/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/book", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/book/${id}`, {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/book/${id}`);
    },

    rentBook: (id) => {
        return axios.put(`/book/rent/${id}`);
    }
};

export default BookShopService;