import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { AppProvider } from "./context/Context";

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />

					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
