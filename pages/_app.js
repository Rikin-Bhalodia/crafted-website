import Footer from "../src/CommonComponent/Footer/Footer";
import Header from "../src/CommonComponent/Header/Header";
import "../styles/globals.css";
import "../styles/login-modal.css";
import AuthProvider from "../src/auth/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <AuthProvider>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
