import React from "react";
import "./Bookcard.css";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/slices/wishlistSlice";

function Bookcard({ book, src, title, author, wishlisted, url }) {
	const dispatch = useDispatch();

	const btnText = wishlisted ? "Remove" : "Add";

	const handleWishlist = (book) => {
		if (btnText === "Add") {
			dispatch(add(book));
		} else {
			dispatch(remove(book));
		}
	};

	return (
		<div className="bookcard">
			<div className="bookinfo-container">
				<img src={src} />
				<h5>Title: {title}</h5>
				<h6>Author: {author}</h6>
			</div>
			<div className="btn-container">
				<button
					className="info-btn"
					onClick={() => window.open(url, "_blank")}
				>
					More info
				</button>
				<button
					className={wishlisted ? "remove-btn " : "add-btn"}
					onClick={() => handleWishlist(book)}
				>
					{btnText}
				</button>
			</div>
		</div>
	);
}

export default Bookcard;
