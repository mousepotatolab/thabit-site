import "@/styles/potato.css";
import Script from "next/script";

//Redux
import { store } from "../src/app/store";
import { Provider } from "react-redux";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
    <Provider store={store}>
      {/* <Layout> */}
      <Component {...pageProps} />
      <Script id="google-maps" src="https://maps.googleapis.com/maps/api/js" />

      {/* </Layout> */}
    </Provider>
  );
}
