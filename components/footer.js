import Image from "next/image";

import bit from "../public/8bitLogoBlack.svg";

import soap from "../public/soapSocial.svg";
import insta from "../public/instagramSocialB.svg";
import twitter from "../public/twitterSocial.svg";

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex justify-between container m-auto border-bottom-grey pb-10 mb-6">
        <div className="left-footer flex col">
          <Image
            src={bit}
            alt="mouse potato logo 8bit"
            width={92}
            className="mb-6"
          ></Image>
          <h6 className="text-md font-regular lh-8 mb-2">Mouse Potato Lab</h6>
          <p className="text-sm lh-7 text-grey">
            A data drive design and <br /> development studio
          </p>
        </div>
        <div className="center-footer flex">
          <div className="flex col mr-33">
            <h6 className="text-md font-regular lh-8 mb-8">Company</h6>
            <ul className="flex col">
              <li className="text-sm text-light lh-10">About</li>
              <li className="text-sm text-light lh-10">Careers</li>
              <li className="text-sm text-light lh-10">Investors</li>
            </ul>
          </div>
          <div className="flex col mr-33">
            <h6 className="text-md font-regular lh-8 mb-8">Resources</h6>
            <ul className="flex col">
              <li className="text-sm text-light lh-10">Services</li>
              <li className="text-sm text-light lh-10">Projects</li>
              <li className="text-sm text-light lh-10">Resources</li>
            </ul>
          </div>
          <div className="flex col">
            <h6 className="text-md font-regular lh-8 mb-8">More</h6>
            <ul className="flex col">
              <li className="text-sm text-light lh-10">Calendar</li>
              <li className="text-sm text-light lh-10">Contact</li>
              <li className="text-sm text-light lh-10">Schedule</li>
              <li className="text-sm text-light lh-10">
                Inside Mouse Potato Lab
              </li>
            </ul>
          </div>
        </div>
        <div className="right-footer flex col">
          <h6 className="text-md font-regular lh-8 mb-8">Social Media</h6>
          <div className="flex">
            <Image
              src={soap}
              alt="soapbox logo"
              width={50}
              className="mr-7"
            ></Image>
            <Image
              src={insta}
              alt="soapbox logo"
              width={50}
              className="mr-7"
            ></Image>
            <Image src={twitter} alt="soapbox logo" width={50}></Image>
          </div>
        </div>
      </div>
      <div className="w-full mb-11">
        <h5 className="text-sm font-regular uppercase text-center">
          COPYRIGHT © 2023 BY MOUSE POTATO LAB, CALIFORNIA
        </h5>
      </div>
    </footer>
  );
}
