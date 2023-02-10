import "@/styles/potato.css";
import Script from "next/script";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Script
        src="https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/96fe2468dbf64fdd9c90900da082d4b2a5c39298359e4df1ad92e1e0946e8171.js"
        strategy="lazyOnload"
      /> */}
      <Script
        onReady={() => {
          (function (w, d, v3) {
            w.chaportConfig = {
              appId: "63c8b0ffdff47c90c3dcb94a",
            };
            if (w.chaport) return;
            v3 = w.chaport = {};
            v3._q = [];
            v3._l = {};
            v3.q = function () {
              v3._q.push(arguments);
            };
            v3.on = function (e, fn) {
              if (!v3._l[e]) v3._l[e] = [];
              v3._l[e].push(fn);
            };
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://app.chaport.com/javascripts/insert.js";
            var ss = d.getElementsByTagName("script")[0];
            ss.parentNode.insertBefore(s, ss);
          })(window, document);
        }}
      />
    </Layout>
  );
}
