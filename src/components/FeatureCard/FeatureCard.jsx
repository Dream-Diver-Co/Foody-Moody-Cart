import React from "react";
import "../FeatureCard/FeatureCard.css";
import FlipCard from "./FlipCard";
import video1 from "../../assets/video/Dream Diver.mp4";
import video2 from "../../assets/video/food1.mp4";
const FeatureCard = () => {
  const videos = [
    {
      OutSideTitle: "City break",
      OutSidePrice: "$29",
      Video: video2,
      insideTitle: "For urban lovers",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "/Cashback",
    },
    {
      OutSideTitle: "Pizza",
      OutSidePrice: "$20",
      Video: video2,
      insideTitle: "One your Favorit food",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "/menu",
    },
    {
      OutSideTitle: "City break",
      OutSidePrice: "$29",
      Video: video1,
      insideTitle: "For urban lovers",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "link",
    },
    {
      OutSideTitle: "Pizza",
      OutSidePrice: "$20",
      Video: video2,
      insideTitle: "One your Favorit food",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "link",
    },
    {
      OutSideTitle: "City break",
      OutSidePrice: "$29",
      Video: video1,
      insideTitle: "For urban lovers",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "link",
    },
    {
      OutSideTitle: "City break",
      OutSidePrice: "$29",
      Video: video1,
      insideTitle: "For urban lovers",
      insideDescription:
        "As cities never sleep, there are always something going on, no matter what time!",
      insideLink: "link",
    },
  ];
  return (
    <main class="main">
      <section class="card-area">
        {videos.map((video) => (
          <FlipCard
            OutSideTitle={video.OutSideTitle}
            OutSidePrice={video.OutSidePrice}
            video={video.Video}
            insideTitle={video.insideTitle}
            insideDescription={video.insideDescription}
            insidelink={video.insideLink}
          />
        ))}
      </section>
    </main>
  );
};

export default FeatureCard;
