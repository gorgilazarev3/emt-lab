import React from "react";
import { Link } from "react-router-dom";

const bookItem = (props) => {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.category}</td>
            <td>{props.item.author.name} {props.item.author.surname}</td>
            <td>{props.item.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger me-4"}
                   onClick={() => props.onDelete(props.item.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info me-4"}
                      onClick={() => props.onEdit(props.item.id)}
                      to={`/books/edit/${props.item.id}`}>
                    Edit
                </Link>
                <a title={"Mark as taken"} className={"btn btn-warning me-4"}
                   onClick={() => props.onRent(props.item.id)}>
                    Mark as taken
                </a>
            </td>
        </tr>
    )
}

export default bookItem;
