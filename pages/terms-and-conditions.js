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

export default function PrivacyPolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Head>
        <title>Thabit App | Terms and Conditions</title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R5MPQY7KM"
        />

        <meta property="og:title" content="Thabit App | Terms and Conditions" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta
          property="og:url"
          content="https://www.thabit.app/terms-and-conditions"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/reln_0zNmr7GUlRvuYhFXw/a076aa93-3fdc-4086-3169-8376e5725000/public"
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
          <h2 className="text-title font-bold  text-primary mb-20 max-1000">
            Terms and
            <span className="text-yellow-gradient animate-text-gradient">
              {" "}
              Conditions
            </span>
          </h2>
          <p className="text-lg mb-6">Terms and conditions for Thabit App</p>
          <p className="text-lg mb-6">Last Updated: August 08, 2023</p>
          <p className="text-lg mb-6">
            By downloading and using the Thabit app, you agree to be bound by
            these Terms and Conditions (the "Agreement"). If you do not agree to
            these terms, you may not use the App. 
          </p>
          <p className="text-lg mb-6">Use of the App </p>
          <p className="text-lg mb-6">
            1. The App is provided for the sole purpose of facilitating
            charitable donations to the Islamic organizations. You may use the
            App to donate spare change from your purchases to a Islamic
            organizations of your choice. You agree to use the App only for its
            intended purpose and in accordance with these terms.
          </p>
          <p className="text-lg mb-6">Eligibility  </p>
          <p className="text-lg mb-6">
            2. You must be at least 18 years old to use the App. By using the
            App, you represent and warrant that you are at least 18 years old.
          </p>
          <p className="text-lg mb-6">Payment </p>
          <p className="text-lg mb-6">
            3. When you make a donation through the App, we will transfer the
            rounded-up amount from your purchase to the Islamic organization of
            your choice. For example, if you make a purchase for $2.50, we will
            transfer $0.50 as a donation from your linked bank account. You
            acknowledge and agree that we are not responsible for any fees or
            charges imposed by your bank
          </p>
          <p className="text-lg mb-6">Charitable Donations</p>
          <p className="text-lg mb-6">
            4. We do not guarantee that the Islamic organizations listed in the
            App are eligible to receive tax-deductible contributions in all
            jurisdictions. You are responsible for determining the tax
            deductibility of any donation you make through the App.
          </p>
          <p className="text-lg mb-6">Account Information </p>
          <p className="text-lg mb-6">
            5. You are responsible for maintaining the accuracy and completeness
            of your account information. You agree to update your account
            information promptly if there are any changes.
          </p>
          <p className="text-lg mb-6">Prohibited Activities </p>
          <p className="text-lg mb-6">
            6. You agree not to use the App for any unlawful or fraudulent
            activity. You also agree not to:
          </p>
          <ul className="terms-list mb-6">
            <li className="text-lg mb-4">
              Use the App to harass, abuse, or harm another person; 
            </li>
            <li className="text-lg mb-4">
              Use the App to collect or store personal information about other
              users without their consent; 
            </li>
            <li className="text-lg mb-4">
              Use the App to transmit any viruses, malware, or other harmful
              code; 
            </li>
            <li className="text-lg mb-4">
              Attempt to gain unauthorized access to the App or its systems; 
            </li>
            <li className="text-lg mb-4">
              Interfere with or disrupt the App or its systems, servers, or
              networks; 
            </li>
            <li className="text-lg">
              Use the App to engage in any activity that could damage, disable,
              overburden, or impair our servers or networks. 
            </li>
          </ul>
          <p className="text-lg mb-6">Intellectual Property</p>
          <p className="text-lg mb-6">
            7. The App and its content are protected by copyright, trademark,
            and other intellectual property laws. You may not reproduce,
            distribute, or modify the App or its content without our prior
            written consent.
          </p>
          <p className="text-lg mb-6">Indemnification </p>
          <p className="text-lg mb-6">
            8. You agree to indemnify and hold us harmless from any and all
            claims, liabilities, damages, and expenses (including attorneys'
            fees) arising from your use of the App in violation of this
            Agreement or applicable law.
          </p>
          <p className="text-lg mb-6">Disclaimer of Warranties </p>
          <p className="text-lg mb-6">
            9. The App is provided on an "as is" and "as available" basis
            without warranties of any kind, either express or implied. We do not
            warrant that the App will be error-free, uninterrupted, or free from
            viruses or other harmful code. 
          </p>
          <p className="text-lg mb-6">Limitation of Liability </p>
          <p className="text-lg mb-6">
            10. In no event shall we be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from or in
            connection with your use of the App, even if we have been advised of
            the possibility of such damages.
          </p>
          <p className="text-lg mb-6">Governing Law and Jurisdiction </p>
          <p className="text-lg mb-6">
            11. This Agreement shall be governed by and construed in accordance
            with the laws of the jurisdiction in which you reside. Any dispute
            arising from or relating to this Agreement shall be resolved in the
            courts of the jurisdiction in which you reside.
          </p>
          <p className="text-lg mb-6">Changes to this Agreement</p>
          <p className="text-lg mb-6">
            12. We reserve the right to modify this Agreement at any time. We
            will notify you of any changes by posting the revised Agreement on
            the App. Your continued use of the App after the posting of the
            revised Agreement constitutes your acceptance of the changes.
          </p>
          <p className="text-lg mb-6">Termination </p>
          <p className="text-lg mb-6">
            13. We may terminate this Agreement at any time and for any reason,
            without notice to you. Upon termination, you must immediately stop
            using the App.
          </p>
          <p className="text-lg mb-6">Miscellaneous </p>
          <p className="text-lg mb-6">
            14. This Agreement constitutes the entire agreement between you and
            us with respect to the use of the App. If any provision of this
            Agreement is found to be invalid or unenforceable, the remaining
            provisions shall remain in full force and effect. Our failure to
            enforce any right or provision of this Agreement shall not be deemed
            a waiver of such right or provision.
          </p>
          <p className="text-lg mb-6">
            If you have any questions or concerns about this Agreement, please
            contact us at privacy@thabit.app
          </p>
        </motion.div>
      </main>
    </>
  );
}

PrivacyPolicy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
