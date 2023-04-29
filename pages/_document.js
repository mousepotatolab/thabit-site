import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { store } from "../src/app/store";

import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

export default function Document() {
  // let bodyFixed = useSelector((state) => state.bodyFixed.value);

  return (
    <Provider store={store}>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Provider>
  );
}
