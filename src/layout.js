import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./js/component/scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./js/views/home";

import AddContact from "./js/component/AddContact/AddContact";

//import injectContext from "./store/appContext";

//import Header from "./component/Header/Header";
//import { Footer } from "./component/footer";
//import NavBar from "./component/navbar/Navbar";


import injectContext from "./js/store/appContext";

/* Components:

*/

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/contact/:theid" component={Home} />
						<Route path="/contact/" component={AddContact} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
