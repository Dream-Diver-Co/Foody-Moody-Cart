import React from "react";
import "../FeatureCard/FeatureCard.css";
import FlipCard from "./FlipCard";
const FeatureCard = () => {
  return (
    <main class="main">
      <section class="card-area">
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </section>
    </main>
  );
};

export default FeatureCard;
