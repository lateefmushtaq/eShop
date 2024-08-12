import React, { useState } from "react";
import Reviews from "../components/Reviews";
import Overview from "../components/Overview";
import Specifications from "../components/Specifications";
import "../styles/Top.css";

function ProductOverview({
  Brand,
  model,
  type,
  connectivity,
  microphone,
  category,
  name,
}) {
  const [activeTab, setActiveTab] = useState("specifications"); // Default active tab

  function handleShow(id) {
    setActiveTab(id);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul className="tab-list">
        <li
          className={activeTab === "specifications" ? "active" : ""}
          onClick={() => handleShow("specifications")}
        >
          Specifications
        </li>
        <li
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => handleShow("overview")}
        >
          Overview
        </li>
        <li
          className={activeTab === "review" ? "active" : ""}
          onClick={() => handleShow("review")}
        >
          Reviews
        </li>
      </ul>
      <div className="content-area">
        {activeTab === "specifications" && (
          <Specifications
            Brand={Brand}
            model={model}
            type={type}
            connectivity={connectivity}
            microphone={microphone}
            category={category}
          />
        )}
        {activeTab === "overview" && <Overview name={name} />}
        {activeTab === "review" && <Reviews />}
      </div>
    </div>
  );
}

export default ProductOverview;
