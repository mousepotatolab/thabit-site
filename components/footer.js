import Image from "next/image";

import bit from "../public/8bitLogoBlack.svg";

import soap from "../public/soapSocial.svg";
import insta from "../public/instagramSocialB.svg";
import twitter from "../public/twitterSocial.svg";

import twitterB from "../public/TwittBlack.svg";
import twitterW from "../public/TwittWhite.svg";

import linkedB from "../public/LinkedBlack.svg";
import linkedW from "../public/LinkedWhite.svg";

import instaB from "../public/InstaBlack.svg";
import instaW from "../public/InstaWhite.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w-full mobile-wrap flex justify-between container m-auto border-bottom-grey pb-10 mb-6">
        <div className="left-footer mobile-full flex col">
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
        <div className="center-footer flex mobile-justify-between">
          <div className="flex col mr-33 mobile-m-0">
            <h6 className="text-md font-regular lh-8 mb-8">Company</h6>
            <ul className="flex col">
              <Link href="/about-us">
                <li className="text-sm text-light lh-10">About</li>
              </Link>
              <li className="text-sm text-light lh-10">Careers</li>
              <Link href="/faq">
                <li className="text-sm text-light lh-10">FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="flex col mr-33 mobile-m-0">
            <h6 className="text-md font-regular lh-8 mb-8">Resources</h6>

            <ul className="flex col">
              <Link href="/services">
                <li className="text-sm text-light lh-10">Services</li>
              </Link>
              <Link href="/projects">
                <li className="text-sm text-light lh-10">Projects</li>
              </Link>
              <Link href="/resources">
                <li className="text-sm text-light lh-10">Resources</li>
              </Link>
            </ul>
          </div>
          <div className="flex col">
            <h6 className="text-md font-regular lh-8 mb-8">More</h6>
            <ul className="flex col">
              <Link href="/calendar">
                <li className="text-sm text-light lh-10">Calendar</li>
              </Link>
              <Link href="/contact">
                <li className="text-sm text-light lh-10">Contact</li>
              </Link>
              <a
                href="https://calendly.com/mousepotato"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-sm text-light lh-10">Schedule</li>
              </a>
              {/* <li className="text-sm text-light lh-10">
                Inside Mouse Potato Lab
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right-footer flex col">
          <h6 className="text-md font-regular lh-8 mb-8">Social Media</h6>
          <div className="flex">
            <a
              href="https://www.linkedin.com/company/74333714/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={linkedW}
                  alt="soapbox logo"
                  width={50}
                  className="mr-7 hover-icon"
                ></Image>
                <Image
                  src={linkedB}
                  alt="soapbox logo"
                  width={50}
                  className="mr-7 absolute x-0 z-zero"
                ></Image>
              </div>
            </a>
            <a
              href="https://www.instagram.com/mousepotatolab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={instaW}
                  alt="soapbox logo"
                  width={50}
                  className="mr-7 hover-icon"
                ></Image>
                <Image
                  src={instaB}
                  alt="soapbox logo"
                  width={50}
                  className="mr-7 absolute x-0 z-zero"
                ></Image>
              </div>
            </a>
            <a
              href="https://twitter.com/mousepotatolab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={twitterW}
                  alt="soapbox logo"
                  width={50}
                  className="hover-icon"
                ></Image>
                <Image
                  src={twitterB}
                  alt="soapbox logo"
                  className="absolute x-0 z-zero"
                  width={50}
                ></Image>
              </div>
            </a>
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
