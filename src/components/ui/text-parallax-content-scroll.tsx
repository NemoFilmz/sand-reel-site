"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-sandreel-light dark:bg-sandreel-dark">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2670&auto=format&fit=crop"
        subheading="Our Craft"
        heading="Stories told through film."
      >
        <ExampleContent
          title="Cinematic production that captivates"
          body="From concept to final cut, we bring your vision to life with stunning visuals, compelling narratives, and meticulous attention to detail that sets your project apart."
          bodyAlt="Every frame is carefully composed to evoke emotion and tell your story with authenticity."
          cta="Explore Our Process"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=2532&auto=format&fit=crop"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent
          title="Premium equipment, premium results"
          body="We use industry-leading cameras, lenses, and post-production tools to deliver content that meets the highest standards of cinematic excellence."
          bodyAlt="Our commitment to quality means every project receives the same level of care and precision."
          cta="See Our Equipment"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop"
        subheading="Vision"
        heading="Your story, elevated."
      >
        <ExampleContent
          title="From vision to screen"
          body="Whether it's a brand film, documentary, or commercial, we collaborate closely with you to transform ideas into powerful visual experiences that resonate with your audience."
          bodyAlt="Let's create something extraordinary together."
          cta="Start a Project"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-sandreel-dark/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-sandreel-light"
    >
      <p className="mb-2 text-center text-xl text-sandreel-accent md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-heading font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({
  title,
  body,
  bodyAlt,
  cta,
}: {
  title: string;
  body: string;
  bodyAlt: string;
  cta: string;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-heading font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
        {body}
      </p>
      <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
        {bodyAlt}
      </p>
      <button className="w-full rounded bg-sandreel-accent px-9 py-4 text-xl text-sandreel-dark font-semibold transition-colors hover:bg-sandreel-accent/90 md:w-fit">
        {cta} <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
