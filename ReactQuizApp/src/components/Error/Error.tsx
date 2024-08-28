import React from "react";

const Error: React.FC = () => {
  return (
    <p className="error">
      <span>💥</span> There was an error fetching questions.
    </p>
  );
};

export default Error;
