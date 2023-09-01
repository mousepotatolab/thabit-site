import React from "react";
import Link from "next/link";

import Image from "next/image";

import cookie from "../public/cookie.png";

function CookiePolicy({ consentCookies, declineCookies }) {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-cookies cookies-bottom">
        <div className="flex col cookie-width w-full m-auto mobile-ml-4">
          <div className="w-64-px mt-6 mb-4">
            <Image src={cookie} alt="join thabit telegram" width={40}></Image>
          </div>
          <h5 className="text-md text-black mb-6">Our Cookie Policy</h5>
          <div className="flex mb-6 mobile-wrap">
            <p className="text-sm text-black mr-10 mobile-mb-med">
              This website uses cookies to ensure you get the best experience on
              our website. We{" "}
              <span className="text-red">do not collect or sell</span> your
              personal information. Our{" "}
              <a href="/cookie-policy" target="_blank" className="text-red">
                Cookie Policy
              </a>{" "}
              has more details.
            </p>
            <button
              className="decline-button mr-4 font-semibold"
              onClick={declineCookies}
            >
              Decline
            </button>
            <button
              className="accept-button mr-4 font-semibold"
              onClick={consentCookies}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CookiePolicy;
