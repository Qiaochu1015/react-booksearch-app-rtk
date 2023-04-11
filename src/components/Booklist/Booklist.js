import React from "react";
import "./Booklist.css";
import { useSelector } from "react-redux";
import Bookcard from "../Bookcard/Bookcard";
import notfoundImg from "../../images/notfound.png";

function Booklist() {
	const books = useSelector((state) => state.booklist.books);
	const isLoading = useSelector((state) => state.booklist.loading);
	const message = useSelector((state) => state.booklist.message);

	console.log(books);

	return (
		<div className="booklist">
			{isLoading && <h3>Loading...</h3>}
			{message && <h3>An error occured</h3>}
			<div className="books-container">
				{books.length !== 0
					? books.map((book) => (
							<Bookcard
								className="card"
								key={book.id}
								book={book}
								src={
									book.volumeInfo.imageLinks?.thumbnail ||
									notfoundImg
								}
								title={book.volumeInfo.title}
								author={book.volumeInfo.authors?.join(", ")}
								wishlisted={false}
								url={book.volumeInfo.infoLink}
							/>
					  ))
					: ""}
			</div>
		</div>
	);
}

export default Booklist;
