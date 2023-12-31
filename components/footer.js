import Image from "next/image";

import logo from "../public/logo.svg";
import mobileLogo from "../public/mobile-logo.svg";

import youtube from "../public/YouTube.svg";
import insta from "../public/Instagram.svg";
import tele from "../public/telegram.svg";
import linked from "../public/linkedIn.svg";

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
      <div className="w-full mobile-wrap flex justify-between container m-auto items-center  pb-10 ">
        <div className="left-footer mobile-full flex col mobile-mb-med mobile-none">
          <div className="logo-main  relative logo-footer">
            <Image src={logo} alt="thabit white logo" fill></Image>
          </div>
        </div>
        <div className="center-footer w-full flex justify-center mw-618 mobile-justify-between mobile-col mobile-center">
          <a
            href="https://thabit.substack.com/"
            target="_blank"
            className="link"
          >
            <div className="flex col mobile-m-0">
              <h6 className="text-md font-regular lh-8 mr-10 mobile-m-0 mobile-mb-sm">
                Blog
              </h6>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/thabit/jobs/"
            target="_blank"
            className="link"
          >
            <div className="flex col mobile-m-0 ">
              <h6 className="text-md font-regular lh-8 mr-10 mobile-m-0 mobile-mb-sm">
                Career
              </h6>
            </div>
          </a>
          {/* <div className="flex col">
            <h6 className="text-md font-regular lh-8 mb-8">Advisors</h6>
          </div>
          <div className="flex col mobile-m-0">
            <h6 className="text-md font-regular lh-8 mb-8">Invest</h6>
          </div> */}
          <Link href={"/privacy-policy"} target="_blank">
            <div className="flex col mobile-m-0">
              <h6 className="text-md font-regular mr-10 lh-8 mobile-m-0 mobile-mb-sm">
                Privacy Policy
              </h6>
            </div>
          </Link>
          <Link href={"/terms-and-conditions"} target="_blank">
            <div className="flex col mobile-m-0">
              <h6 className="text-md font-regular mr-10 lh-8 mobile-m-0 mobile-mb-sm">
                Terms and Conditions
              </h6>
            </div>
          </Link>
          <Link href={"/help"}>
            <div className="flex col mobile-m-0">
              <h6 className="text-md font-regular lh-8 mobile-mb-med">Help</h6>
            </div>
          </Link>
          {/* <div className="flex col">
            <h6 className="text-md font-regular lh-8 mb-8">
              Terms and Conditions
            </h6>
          </div> */}
        </div>
        <div className="right-footer flex col mobile-full">
          <div className="flex items-center mobile-center mobile-full">
            <a
              href="https://www.youtube.com/@thabitapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={youtube}
                  alt="linkedin logo"
                  width={24}
                  className="mr-7 "
                ></Image>
              </div>
            </a>
            <a
              href="https://www.instagram.com/thabitapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={insta}
                  alt="instagram logo"
                  width={24}
                  className="mr-7 "
                ></Image>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/thabit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={linked}
                  alt="linkedIn logo"
                  width={24}
                  className="mr-7 "
                ></Image>
              </div>
            </a>
            <a
              href="https://t.me/thabitapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative pointer">
                <Image
                  src={tele}
                  alt="twitter logo"
                  width={18}
                  className=""
                ></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex mobile-center w-full mobile-flex">
        <Image
          src={mobileLogo}
          alt="mouse potato logo 8bit"
          width={92}
          className="mb-6"
        ></Image>
      </div>
    </footer>
  );
}
