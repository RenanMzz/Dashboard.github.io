import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from "../pages/Login"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  exact element={<Login />} />
            </Routes>
        </Router> 
    );
}