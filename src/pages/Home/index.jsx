/** @format */

import React from "react";
import Footer from "../../components/compound/footer";
import Header from "../../components/compound/header";
import Navbar from "../../components/compound/navbar";
import Main from "../../components/pagespecific/Home/main";
import Services from "../../components/pagespecific/Home/services";
import ContactUs from "../../components/pagespecific/Home/contactus";
const Home = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Main />
			<Services />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Home;
