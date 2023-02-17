import Head from "next/head";
import Image from "next/image";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

//Images
import third from "../public/third.svg";

import resourceOne from "../public/resource-1.png";

export default function Resources() {
  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("resources"));
  });

  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Projects</title>
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
            Somewhere on
            <br /> the internet
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-xl font-light text-primary">
            We have collected a few{" "}
            <strong> great articles and content </strong>
            online that will help<strong> shape your product better. </strong>
            we will
            <strong> keep on adding </strong>
            articles and content that we think are
            <strong> good resources! </strong>
          </h3>
        </motion.div>
        <section className="resources-section mb-30">
          <div className="w-full flex">
            <div className="left-resources w-full flex col pr-5">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Patrick Thornton
                </h6>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  The Homer Simpson car is a great lesson in building products
                </h3>
                <p className="text-md font-light mb-10">
                  But good product design is not about letting your users design
                  your products for you — it’s about solving users problems and
                  making their lives better... Never ask your users what to
                  build. Ask your users what they are trying to do...
                </p>
                <button className="button-resources pointer">read more</button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-tertiary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-secondary uppercase mb-2">
                  Thomas Crook
                </h6>
                <h3 className="text-2xl mb-2 font-light text-secondary mb-2">
                  The HiPPO syndrome: Humans can't reliably predict design
                  effectiveness
                </h3>
                <p className="text-md font-light text-secondary mb-10">
                  It’s hard for some people involved with web/app design and
                  development to accept that they can’t rely on intuition,
                  judgment or even qualitative testing methods to reliably
                  predict the success of a new feature. When I worked at
                  Microsoft, one site manager told us his team didn’t need to
                  A/B test their site redesign because “Good design is in our
                  DNA!”
                </p>
                <button className="button-resources-white pointer">
                  read more
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Joshua Porter, Josh Brewe
                </h6>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  The experience belongs to the user - God complex approach to
                  UX{" "}
                </h3>
                <p className="text-md font-light mb-10">
                  We all like to play God. We like to imagine that the design we
                  create is ushered into the world and all those who use it have
                  an epiphany…they do things exactly in the way we have
                  prescribed. They approach, use, and experience our design in
                  the manner we envisioned, resulting in an amazing user
                  experience. You might call this the God complex approach to
                  UX. It is the ego-driven approach, the one in which designer
                  knows better than user, the one in which users don’t know
                  what’s good for them...
                </p>
                <button className="button-resources pointer">read more</button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Noah J. Goldstein, Robert B. Cialdini, Vladas Griskevicius
                </h6>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  The Homer Simpson car is a great lesson in building products
                </h3>
                <p className="text-md font-light mb-10">
                  But good product design is not about letting your users design
                  your products for you — it’s about solving users problems and
                  making their lives better... Never ask your users what to
                  build. Ask your users what they are trying to do...
                </p>
                <button className="button-resources pointer">read more</button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Patrick Thornton
                </h6>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  A room with a viewpoint: Using social norms to motivate
                  environmental conservation in hotels{" "}
                </h3>
                <p className="text-md font-light mb-10">
                  The complete absence of a descriptive normative approach to
                  hotel conservation programs is especially remarkable
                  considering that studies conducted by the largest manufacturer
                  of hotel towel reuse signs indicate that approximately 75% of
                  guests who have the opportunity to participate in such
                  programs do reuse their towels at least once during their
                  stay. From a practical perspective, then, one purpose of this
                  research was to investigate whether using an appeal that
                  conveys the descriptive norm for participation in such
                  programs would be more effective at encouraging towel reuse
                  than the current industry standard appeal. We tested this
                  hypothesis...
                </p>
                <button className="button-resources pointer">read more</button>
              </motion.div>
            </div>
            <div className="right-resources w-full pl flex col pl-5">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <Image
                  src={third}
                  alt="illustration of a man and giraffe"
                  className="mb-10"
                ></Image>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  Join our newsletter if you are curious to learn more{" "}
                </h3>
                <button className="button-subscribe pointer">
                  subscribe to our newsletter
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary  mb-10"
              >
                <Image src={resourceOne} className="w-full h-auto"></Image>
                <div className="p-10">
                  <h6 className="text-md font-regular text-primary uppercase mb-2">
                    Hilal Yildrim
                  </h6>
                  <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                    What is the Feature Bloat and how can you effectively get
                    rid of it{" "}
                  </h3>
                  <p className="text-lg font-light mb-10">
                    Feature bloat, also known as feature creep, feature fatigue,
                    or software bloat, is having more than necessary features in
                    your product. This situation ends up in a basic function
                    shadowing core functions. Thus, the customers not being able
                    to figure out the core use case of it.
                  </p>
                  <button className="button-resources pointer">
                    read more
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Greg Warman
                </h6>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  Design thinking in action: Embrace Global
                </h3>
                <p className="text-md font-light mb-10">
                  The “Embrace Infant Warmer” is nearly ready for market.
                  Interest in the product has already exceeded expectations.
                  Indeed, healthcare systems around the world have been
                  inquiring about the unit’s availability. By solving a real
                  problem and solving it well, Embrace is poised to do more than
                  introduce a popular product; they will be saving lives.
                </p>
                <button className="button-resources pointer">read more</button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-secondary p-10 mb-10"
              >
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Don Norman
                </h6>
                <h3 className="text-2xl mb-2 font-light text-primary mb-2">
                  Human Error? No, Bad Design
                </h3>
                <p className="text-md font-light mb-10">
                  Does human error cause accidents? Yes, but we need to know
                  what led to the error: in the majority of instances it is
                  inappropriate design of equipment or procedures. It is time to
                  launch a revolution, time to insist on a people-centered
                  approach to technology
                </p>
                <button className="button-resources pointer">read more</button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
