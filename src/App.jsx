import "./App.css";
import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
