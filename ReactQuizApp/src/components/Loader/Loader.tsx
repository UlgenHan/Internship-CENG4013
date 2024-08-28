import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
};

export default Loader;
