import Footer from "../src/CommonComponent/Footer/Footer";
import Header from "../src/CommonComponent/Header/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";
import AuthProvider from "../src/auth/AuthContext";
import ProtectedRoute from "../src/auth/ProtectedRoute";
// import { store } from "./app/store";
// import { Provider } from "react-redux";

const noAuthPages = ["/Login", "/signup", "/resetpassword"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AuthProvider>
        {router.pathname === "/Login" ||
        router.pathname === "/signup" ? null : (
          <Header />
        )}
        {noAuthPages.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            {/* <Provider store={store}> */}
            <Component {...pageProps} />
            {/* </Provider> */}
          </ProtectedRoute>
        )}
        {router.pathname === "/Login" ||
        router.pathname === "/signup" ? null : (
          <Footer />
        )}
      </AuthProvider>
    </>
  );
}

export default MyApp;
