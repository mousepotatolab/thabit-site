import Image from "next/image";

import bit from "../public/8bitLogoBlack.svg";

import soap from "../public/soapSocial.svg";
import insta from "../public/instagramSocialB.svg";
import twitter from "../public/twitterSocial.svg";

export default function Footer() {
  return (
    <footer className="bg-projects">
      <div className="w-full pb-11">
        <h5 className="text-sm font-regular uppercase text-center">
          COPYRIGHT © 2023 BY MOUSE POTATO LAB, CALIFORNIA
        </h5>
      </div>
    </footer>
  );
}
