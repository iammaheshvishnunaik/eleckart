import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { login, logout } from "./store/authSlice";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes"


function App() {
  const dispatch = useDispatch();

  const token = useSelector(
    (state: RootState) => state.auth.token
  );

  useEffect(() => {
    if (!token) {
        return;
    }

    const verifyUser = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/me",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                dispatch(logout());
                return;
            }

            dispatch(
                login({
                    user: data.user,
                    token: token,
                })
            );

        } catch (error) {
            console.error(
                "Authentication verification failed:",
                error
            );

            dispatch(logout());
        }
    };

    verifyUser();

}, [dispatch, token]);

  return (
    <BrowserRouter>
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;