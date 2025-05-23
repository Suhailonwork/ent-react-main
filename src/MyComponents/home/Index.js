import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AboutDoctor from "./AboutDoctor.js";
import Banner from "./Banner.js";
import WhatWeDo from "./WhatWeDo.js";
// import Testimonials from "./Testimonials.js";
import PatientReviews from "./PatientReview.js";
import FollowYt from "./FollowYt.js";
import Faq from "./Faq.js";
import Blogs from "./Blogs.js";
import GetInTouch from "./GetInTouch.js";

function Home() {
  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach((tag) => {
      console.log(tag);
    });
  }, []);
  return (
    <div>
      <Helmet>
      <title>Best ENT Clinic In Delhi</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:title" content="Open Graph Title" />
      <meta property="og:description" content="Open Graph Description for Facebook etc." />
      <meta name="robots" content="index, follow" />
      {/* You can add more meta tags as needed */}
    </Helmet>
      <main>
        <Banner />
        <AboutDoctor />
        <WhatWeDo />
        {/* <Testimonials /> */}
        <PatientReviews />
        <FollowYt />
        <Faq />
        <Blogs />
        <GetInTouch />
      </main>
    </div>
  );
}

export default Home;
