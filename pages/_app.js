import Footer from "../src/CommonComponent/Footer/Footer";
import FooterContact from "../src/CommonComponent/Footer/FooterContact";
import Header from "../src/CommonComponent/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <FooterContact/>
      <Footer />
    </>
  );
}

export default MyApp;
