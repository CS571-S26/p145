import React from "react";
import SpinWheel from "../components/SpinWheel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Food Quest!</h1>
      <p>Spin the wheel to discover your next campus meal adventure.</p>
      <SpinWheel />
      <div className="mt-4">
        <Link to="/explore">Explore Restaurants &rarr;</Link>
      </div>
    </div>
  );
}

export default Home;
