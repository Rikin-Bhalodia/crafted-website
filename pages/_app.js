import Footer from "../src/CommonComponent/Footer/Footer";
import Header from "../src/CommonComponent/Header/Header";
import "../styles/globals.css";
import "../styles/login-modal.css";
import AuthProvider from "../src/auth/AuthContext";
// import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1111798679308390')
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  return (
    <>
      <AuthProvider>
        <Header />
        {/* <QueryClientProvider client={queryClient}> */}
          <Component {...pageProps} />
        {/* </QueryClientProvider> */}
        <Footer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
