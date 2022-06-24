import React from "react";
import Nabvar from "./navbar.jsx";
import Jumbotrom from "./main.jsx";
/*import Cards from "./card";*/
import Footers from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<header>
				<Nabvar/>
			</header>
			<main className="container">
				<Jumbotrom/>
			</main>
			<footer className="text-center text-white fixed-bottom bg-dark" >
				<Footers/>
			</footer>
		</div>
	);
};

export default Home;
