import "@/styles/potato.css";
import Script from "next/script";

//Redux
import { store } from "../src/app/store";
import { Provider } from "react-redux";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? defaultPageLayout;

  return getLayout(
    <Provider store={store}>
      {/* <Layout> */}
      <Component {...pageProps} />
      <Script
        id="google-maps"
        src="https://maps.googleapis.com/maps/api/js"
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
      {/* </Layout> */}
    </Provider>
  );
}
