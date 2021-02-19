import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // northern hemisphere
    return lat > 0 ? "summer" : "winter";
  } else {
    // southern hemisphere
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName}`} />
      <h1>{text}</h1>
      <i className={`${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
