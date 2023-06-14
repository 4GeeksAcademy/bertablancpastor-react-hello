import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import SectionCard from "./sectionCard.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<SectionCard/>
			<Footer/>
		</>
			
	);
};

export default Home;
