import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import Booklist from "./components/Booklist/Booklist";
//import BookDetails from "./components/BookDetails/BookDetails";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/books" element={<Booklist />} />
					{/* <Route path="/books/:id" element={<BookDetails />} /> */}
				</Route>
				<Route path="/wishlist" element={<Wishlist />} />
			</Routes>
		</Layout>
	);
}

export default App;
