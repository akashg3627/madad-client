import "./App.css";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/createStore";
// import ScrollToTop from "./components/ScrollToTop";

const store = ConfigureStore();
function App() {
	return (
		<div>
			<Provider store={store}>
				<BrowserRouter>
					
					<div>
						<Main className="main-home" />
					</div>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
