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

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Head>
        <title>Thabit App | Donate Spare Change</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R5MPQY7KM"
        />

        <meta property="og:title" content="Thabit App | Privacy Policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta
          property="og:url"
          content="https://www.thabit.app/privacy-policy"
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
      <main className="container m-auto" ref={ref}>
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
            Privacy
            <span className="text-red-gradient animate-text-gradient">
              {" "}
              Policy
            </span>
          </h2>
          <p className="text-md mb-6">Privacy Policy for Thabit App</p>
          <p className="text-md mb-6">Last Updated: August 08, 2023</p>
          <p className="text-md mb-6">
            Welcome to Thabit! This Privacy Policy outlines how we collect, use,
            and protect your personal information when you use our app. By using
            the Thabit app, you agree to the practices described in this policy.
            Please take a moment to review this Privacy Policy and feel free to
            contact us if you have any questions.
          </p>
          <p className="text-md mb-6">Information We Collect:</p>
          <p className="text-md mb-6">
            1. User Information: When you register for a Thabit account, we
            collect your name, email address, and profile picture to personalize
            your experience.
          </p>
          <p className="text-md mb-6">
            2. Financial Information: In order to facilitate spare change
            donations, we collect your financial information such as bank
            account numbers, routing numbers, transaction details, and any other
            necessary details required by our payment processor, Plaid and
            Stripe.
          </p>
          <p className="text-md mb-6">
            3. Donation Preferences: We collect information about the charity
            organizations you select to receive your donations, including their
            names and relevant details.
          </p>
          <p className="text-md mb-6">
            4. Transaction Data: We collect information about your spare change
            transactions, including the amount rounded up and details of
            associated purchases.
          </p>
          <p className="text-md mb-6">
            5. App Usage: We gather data about your interactions with the app,
            such as features you use, buttons clicked, and pages visited. This
            helps us improve the app's functionality and user experience.
          </p>
          <p className="text-md mb-6">
            6. Plaid API Data: When you link your bank account to Thabit, we use
            the Plaid API to securely access your financial data. This data is
            used solely for the purpose of round-up donations.
          </p>
          <p className="text-md mb-6">How We Use Your Information:</p>
          <p className="text-md mb-6">
            1. Donations: We use your financial information and the Plaid and
            Stripe API to process spare change donations and transfer the
            aggregated amount to the charity organizations you've chosen.
          </p>
          <p className="text-md mb-6">
            2. Communication: We may use your email address to send you updates
            about your donations, app-related announcements, and information
            about your selected charities.
          </p>
          <p className="text-md mb-6">
            3. App Improvement: Analyzing app usage data helps us understand
            user preferences and behaviors, enabling us to enhance the app's
            functionality and features.
          </p>
          <p className="text-md mb-6">
            4. Security: Your information is used to secure your account and
            transactions, detect and prevent fraudulent activities, and ensure
            compliance with our terms of use.
          </p>
          <p className="text-md mb-6">Data Sharing and Security:</p>
          <p className="text-md mb-6">
            1. Charity Organizations: We share your donation information with
            the charity organizations you've designated for transparency and
            confirmation purposes.
          </p>
          <p className="text-md mb-6">
            2. Service Providers: We may share your data with trusted
            third-party service providers who assist us with payment processing,
            app development, customer support, and data analysis. These
            providers are contractually bound to protect your information and
            use it solely for the intended purposes.
          </p>
          <p className="text-md mb-6">
            3. Legal Requirements: We may disclose your information in response
            to legal obligations, court orders, or to protect our rights,
            privacy, safety, or property, as well as those of our users and the
            public.
          </p>
          <p className="text-md mb-6">Your Choices:</p>
          <p className="text-md mb-6">
            1. Editing Information: You can modify your profile details,
            donation preferences, and linked payment methods within the app's
            settings.
          </p>
          <p className="text-md mb-6">
            2. Opt-Out: You have the option to opt-out of receiving promotional
            emails, while still receiving transactional and account-related
            communications.
          </p>
          <p className="text-md mb-6">Data Retention:</p>
          <p className="text-md mb-6">
            We retain your personal information for the duration of your
            account's activity or as required to fulfill the requested services.
            Following this, we may retain your data for a reasonable period as
            required by law or for legitimate business purposes.
          </p>
          <p className="text-md mb-6">Updates to Privacy Policy:</p>
          <p className="text-md mb-6">
            This Privacy Policy may be updated periodically to reflect changes
            in our practices and services. Significant changes will be
            communicated through the app or via email.
          </p>
          <p className="text-md mb-6">Contact Us:</p>
          <p className="text-md mb-6">
            For any inquiries, concerns, or requests relating to your privacy
            and our practices, please reach out to us at privacy@thabit.app.
          </p>
          <p className="text-md mb-6">
            Thank you for being part of Thabit's mission to create positive
            change through your spare change!
          </p>
        </motion.div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
