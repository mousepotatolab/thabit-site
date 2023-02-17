import Head from "next/head";
import Image from "next/image";

import React from "react";

import { useEffect } from "react";

import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Images
import third from "../public/third.svg";

import resourceOne from "../public/resource-1.png";

export default function Contact() {
  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("contact"));
  });

  console.log(activePage);
  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | Case Studies" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta property="og:url" content="https://www.mousepotato.co/projects" />
        <meta
          property="og:image"
          content="https://i.ibb.co/1LvG4xh/ogImage.jpg"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZB4BX6WH03', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <main className="container m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-title font-bold uppercase text-primary mb-10">
            The Contact
            <br /> us page
          </h1>
        </motion.div>
        <section className="resources-section mb-30">
          <div className="w-full flex">
            <div className="left-resources w-full flex">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h3 className="text-xl font-light text-primary">
                  We'd love to know <br /> about your projects
                </h3>
                <form
                  data-netlify-honeypot="bot-field"
                  method="post"
                  autoComplete="off"
                  name="mpContact"
                  id="mpContact"
                  data-netlify="true"
                  action="/success"
                >
                  <input type="hidden" name="form-name" value="mpContact" />

                  <p>
                    <label>
                      Full Name *
                      <input
                        placeholder="e.g. Dwight Schrute"
                        type="text"
                        name="name"
                        required
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Email *
                      <input
                        placeholder="e.g. dwight@dundermifflin.com"
                        type="email"
                        name="email"
                        required
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Project Details
                      <textarea
                        placeholder="Write everything you want to know or want to share"
                        type="text"
                        name="Details"
                      />
                    </label>
                  </p>
                  <p>
                    <button className="button-submit pointer" type="submit">
                      submit
                    </button>
                  </p>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-dark-grey p-10 mb-10 ml-10 relative"
              >
                <h3 className="text-3xl mb-2 font-light text-primary mb-10 max-420">
                  Hire us as your <strong> team </strong> and save at least
                  <strong> $100,000 </strong>a year!
                </h3>
                <p className="text-xl font-light max-420">
                  One <strong>senior designer </strong> and one
                  <strong> senior engineer </strong> will cost you over
                  <strong> $250,000</strong> a year plus benefits, if you can
                  find ones that are available!
                </p>
                <Link href="/services#your-team">
                  <button className="button-learn pointer">learn more</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <form
        data-netlify-honeypot="bot-field"
        method="post"
        autoComplete="off"
        name="mpContact"
        id="mpContactHidden"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="mpContact" />

        <p>
          <label>
            Full Name *
            <input
              placeholder="e.g. Dwight Schrute"
              type="text"
              name="name"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Phone *
            <input
              placeholder="e.g. 111-123-4567"
              type="tel"
              name="phone"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email *
            <input
              placeholder="e.g. dwight@dundermifflin.com"
              type="email"
              name="email"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Budget
            <input placeholder="e.g. $9000" type="number" name="Budget" />
          </label>
        </p>
        <p>
          <label>
            Details *
            <textarea
              placeholder="Write everything you want to know or want to share"
              type="text"
              name="Details"
              required
            />
          </label>
        </p>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </>
  );
}
