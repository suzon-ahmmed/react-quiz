import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route element={<PublicRoutes />}>
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route exact path="/quiz/:id" element={<Quiz />} />
              <Route exact path="/result" element={<Result />} />
            </Route>
            
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
