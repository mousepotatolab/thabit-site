import Navbar from "./navbar";
import Footer from "./footer";

import { store } from "../src/app/store";
import { Provider } from "react-redux";

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
}
