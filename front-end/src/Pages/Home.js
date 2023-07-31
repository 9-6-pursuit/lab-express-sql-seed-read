import React from "react";

function Home() {
  const backgroundUrl =
    "https://www.nicepng.com/png/detail/1-16223_chromatic-musical-notes-typography-no-background-by-transparent.png";

  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Welcome to our Tuner App!</h1>
    </div>
  );
}

export default Home;
