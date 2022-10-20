import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const documentProps = await Document.getInitialProps(ctx);
      return {
        ...documentProps,
        helmet: Helmet.renderStatic(),
        styles: (
          <>
            {documentProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map((el) => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    const title = "Building The Crafted India";
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
      </Helmet>
    );
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          <link rel="shortcut icon" href="/favicon.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GBMN81E732"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date()); 
            gtag('config', 'G-GBMN81E732',{
              page_path:window.location.pathname,
            }) `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        !function (f, b, e, v, n, t, s) {
                          if (f.fbq) return;
                          n = f.fbq = function () {
                            n.callMethod
                              ? n.callMethod.apply(n, arguments)
                              : n.queue.push(arguments);
                          };
                          if (!f._fbq) f._fbq = n;
                          n.push = n;
                          n.loaded = !0;
                          n.version = "2.0";
                          n.queue = [];
                          t = b.createElement(e);
                          t.async = !0;
                          t.src = v;
                          s = b.getElementsByTagName(e)[0];
                          s.parentNode.insertBefore(t, s);
                        },
                        (window,
                        document,
                        "script",
                        "https://connect.facebook.net/en_US/fbevents.js"),
                        fbq("init", "1111798679308390"),
                        fbq("track", "PageView")`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: ` <img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=1111798679308390&ev=PageView&noscript=1"
            />`,
            }}
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
