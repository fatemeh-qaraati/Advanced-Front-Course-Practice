import React from "react";
import NewsletterSection from "../components/home/newsletter-section/index.jsx";
import UserComments from "../components/home/comment-section/index.jsx";
import RecommendSection from "../components/home/recommend-section/index.jsx";
import HotelServices from "../components/home/service-section/index.jsx";
import TopRoomsSection from "../components/home/toproom-section/index.jsx";
import Header from "../components/home/header/index.jsx";
import Footer from "../components/home/footer/index.jsx";
import HeroSection from "../components/home/hero-section/index.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <TopRoomsSection />
      <HotelServices />
      <RecommendSection />
      <UserComments />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;