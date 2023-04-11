import React from "react";
import "./Wishlist.css";
import { useSelector } from "react-redux";
import Bookcard from "../../components/Bookcard/Bookcard";
import notfoundImg from "../../images/notfound.png";

function Wishlist() {
	const wishlist = useSelector((state) => state.wishlist.books);
	return (
		<div className="wishlist">
			<h3>Wishlist</h3>
			<hr />
			<div className="wishlist-container">
				{wishlist.length !== 0 ? (
					wishlist.map((book) => (
						<Bookcard
							className="card"
							key={book.id}
							book={book}
							src={
								book.volumeInfo.imageLinks?.thumbnail ||
								notfoundImg
							}
							title={book.volumeInfo.title}
							author={book.volumeInfo.authors.join(", ")}
							wishlisted={true}
						/>
					))
				) : (
					<h5>Nothing to display</h5>
				)}
			</div>
		</div>
	);
}

export default Wishlist;
