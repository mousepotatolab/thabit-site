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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Head>
        <title>Thabit App | About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R5MPQY7KM"
        />

        <meta property="og:title" content="Thabit App | About Us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta property="og:url" content="https://www.thabit.app/about-us" />
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
            About
            <span className="text-green-gradient animate-text-gradient">
              {" "}
              Us
            </span>
          </h2>
          <p className="text-lg mb-6 font-semibold font-semibold">
            Revolutionizing Islamic Charity and Community Engagement
          </p>
          <p className="text-lg mb-6 font-semibold">
            In a world where technology continues to shape the way we interact
            and give back, we are thrilled to announce the launch of Thabit, a
            groundbreaking app designed to empower Islamic Charity Organizations
            and foster a culture of meaningful giving within our community.
          </p>
          <p className="text-lg mb-6 font-semibold">
            Thabit is more than just a fundraising platform; it's a bridge that
            connects the spirit of charity with the convenience of modern
            banking. With the goal of enhancing the impact of charitable
            donations, Thabit has harnessed the power of digital innovation to
            create a seamless and effective way for users to contribute to their
            chosen Islamic Charity Organizations.
          </p>
          <h2 className="text-xl mb-6 font-semibold">How Thabit Works</h2>
          <p className="text-lg mb-6 font-semibold">
            Thabit harnesses the potential of everyday transactions by linking
            users' bank accounts to the app. The process is simple yet
            impactful: Whenever users make purchases, Thabit automatically
            rounds up the transaction to the nearest dollar, accumulating the
            spare change. This spare change is then channeled directly to the
            Islamic Charity Organization selected by the user, creating a steady
            stream of support that adds up over time.
          </p>
          <h2 className="text-xl mb-6 font-semibold">
            Empowering the Community
          </h2>
          <p className="text-lg mb-6 font-semibold">
            Thabit not only simplifies the act of giving but also creates a
            sense of shared purpose within the Islamic community. Through the
            app, users can easily connect with and support the charitable
            initiatives that align with their values. Whether it's assisting
            with humanitarian aid, education, healthcare, or any other noble
            cause, Thabit allows users to actively participate in the betterment
            of society.
          </p>
          <h2 className="text-xl mb-6 font-semibold">
            Key Features of Thabit:
          </h2>
          <p className="text-lg mb-6 font-semibold">
            Automated Micro-Donations: Thabit enables users to make a
            significant impact through small, regular donations that accumulate
            over time.
          </p>
          <p className="text-lg mb-6 font-semibold">
            Choice and Transparency: Users have the freedom to select the
            Islamic Charity Organization they wish to support, ensuring a direct
            connection with the causes they care about.
          </p>
          <p className="text-lg mb-6 font-semibold">
            Real-Time Updates: Stay informed about the impact of your donations.
            Thabit provides updates on how funds are being utilized by the
            chosen charity.
          </p>
          <p className="text-lg mb-6 font-semibold">
            Community Engagement: Thabit fosters a sense of community by
            connecting users with like-minded individuals who share a passion
            for charitable giving.
          </p>
          <p className="text-lg mb-6 font-semibold">
            Secure and Private: Thabit places the utmost importance on the
            security and privacy of users' financial information, ensuring a
            safe giving experience. To ensure a reliable payment processing
            system, we have partnered with Plaid®. 12,000+ financial
            institutions (USA, Canada, Europe) use Plaid®. In the US, 1 in 4 US
            adults has connected a financial account to an app or service
            powered by Plaid®.
          </p>
          <p className="text-lg mb-6 font-semibold">Join the Thabit Movement</p>
          <p className="text-lg mb-6 font-semibold">
            Thabit is more than an app; it's a movement that transforms the way
            we approach charitable giving. By seamlessly integrating giving into
            everyday life, Thabit empowers each individual to make a significant
            difference collectively. Download Thabit today and be part of a
            community that believes in the power of compassion, generosity, and
            positive change.
          </p>
        </motion.div>
      </main>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
