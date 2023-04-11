import React, { useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByInput } from "../../redux/slices/booklistSlice";
import Booklist from "../../components/Booklist/Booklist";

function Home() {
	const [input, setInput] = useState("");
	const [keyword, setKeyword] = useState("");

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSearch = () => {
		dispatch(getBooksByInput(input));
		setKeyword(input);
		setInput("");
	};
	return (
		<div className="home">
			<div className="searchform-container">
				<h1 className="title">FIND YOUR BOOK</h1>
				<div className="input-container">
					<input
						type="text"
						placeholder="type in book name"
						value={input}
						onChange={handleChange}
					/>
					<button className="search-btn" onClick={handleSearch}>
						Search
					</button>
				</div>
			</div>
			<div className="result-container">
				{keyword ? <h4>Results for "{keyword}"</h4> : null}
				<hr />
				<Booklist />
			</div>
		</div>
	);
}

export default Home;
