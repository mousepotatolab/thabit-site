import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import Layout from "../components/layout";

import Head from "next/head";
import Image from "next/image";

// import styles from "@/styles/Home.module.css";

// Images

import telegram from "../public/join-telegram.png";
import phone from "../public/thabit-phone.png";
import phoneGif from "../public/sign-in.gif";
import group from "../public/group-thabit.png";
import grocery from "../public/grocery-store.png";
import gas from "../public/gas-station.png";
import coffee from "../public/cofee-shop.png";
import contribution from "../public/contribution.png";
import plaid from "../public/plaid-connect.png";
import organization from "../public/organization.png";

export default function CookiePolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Head>
        <title>Thabit App | Cookie Policy</title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R5MPQY7KM"
        />

        <meta property="og:title" content="Thabit App | Cookie Policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta
          property="og:url"
          content="https://www.thabit.app/cookie-policy"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/1LvG4xh/ogImage.jpg"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "hith533g22");
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7R5MPQY7KM', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <main className="container m-auto mb-30" ref={ref}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <h2 className="text-title font-bold  text-primary mb-20 max-844">
            Cookie
            <span className="text-green-gradient animate-text-gradient">
              {" "}
              Policy
            </span>
          </h2>
          <p className="text-lg mb-6">Cookie Policy for Thabit Website</p>
          <p className="text-lg mb-6">Last Updated: Aug 26, 2023</p>
          <p className="text-lg mb-6">
            This Cookie Policy explains how https://thabit.app/ ("we," "us," or
            "our") uses cookies and similar tracking technologies on our
            website. By using our website, you consent to the use of cookies as
            described in this policy.
          </p>
          <p className="text-lg mb-6">What Are Cookies?</p>
          <p className="text-lg mb-6">
            Cookies are small text files that are placed on your device
            (computer, smartphone, tablet, etc.) when you visit our website.
            They are widely used to make websites work efficiently and provide
            information to website owners.
          </p>
          <p className="text-lg mb-6">Types of Cookies We Use</p>
          <p className="text-lg mb-6">
            1. Essential Cookies: These cookies are necessary for the basic
            functioning of our website. They enable you to navigate our site and
            use its features. Without these cookies, certain services or
            features may not be available.
          </p>
          <p className="text-lg mb-6">
            2. Analytics Cookies: We use analytics cookies to collect
            information about how visitors interact with our website. This data
            helps us understand user behavior and improve our website's
            performance. We use Microsoft Clarity and Google Analytics to gather
            this data.
          </p>
          <p className="text-lg mb-6">How We Use Cookies</p>
          <p className="text-lg mb-6">
            We use cookies for the following purposes:
          </p>
          <p className="text-lg mb-6">
            - To analyze website traffic and improve our services.
          </p>
          <p className="text-lg mb-6">Your Choices</p>
          <p className="text-lg mb-6">
            You can manage cookies through your browser settings. Most browsers
            allow you to control cookies, including blocking or deleting them.
            However, please note that blocking or deleting cookies may impact
            your experience on our website.
          </p>
          <p className="text-lg mb-6">Third-Party Cookies</p>
          <p className="text-lg mb-6">
            We may allow third-party services to use cookies on our website for
            the purposes outlined above. These third-party services have their
            own privacy policies and may use cookies for their own purposes. We
            do not have control over these cookies.
          </p>
          <p className="text-lg mb-6">Updates to this Cookie Policy</p>
          <p className="text-lg mb-6">
            We may update this Cookie Policy from time to time. The "Last
            Updated" date at the top of this page indicates when the policy was
            last revised. Any changes will become effective when we post the
            revised Cookie Policy on our website.
          </p>
          <p className="text-lg mb-6">Contact Us</p>
          <p className="text-lg mb-6">
            If you have any questions or concerns about our use of cookies or
            this Cookie Policy, please contact us at info@thabit.app.
          </p>
        </motion.div>
      </main>
    </>
  );
}

CookiePolicy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
