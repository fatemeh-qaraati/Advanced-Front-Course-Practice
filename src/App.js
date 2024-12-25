import React, { useState } from "react";
import Header from "./components/header/index.jsx";
import TabContent from "./components/content/index.jsx";
import withTabContent from "./components/HOC/tabContentHOC.jsx";

const tabBodies = {
  overview: {
    title: "Overview Content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate tristique velit. Nullam vel nisi sed nisi varius vestibulum a nec tellus. Maecenas sed nisi at arcu fringilla varius ac vel dolor. Ut sem lacus, tincidunt nec gravida consequat, maximus id arcu. Nam imperdiet lorem vitae commodo ornare. Morbi ac justo at justo congue tristique nec non velit. Morbi at nisi non nisl ornare varius.",
  },
  statistics: {
    title: "Statistics Content",
    text: "Donec sed nunc accumsan, dapibus est id, faucibus turpis. Aenean faucibus est et nulla imperdiet aliquet. Nulla ac sapien quis magna interdum aliquam. Etiam posuere dolor eget enim ultrices, sed finibus diam semper. Proin egestas sed mauris eu bibendum. In aliquet iaculis sem, eget finibus tortor sollicitudin laoreet. Curabitur rhoncus nisl vel dui suscipit, sit amet ultrices leo pulvinar.",
  },
  settings: {
    title: "Settings Content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate tristique velit. Nullam vel nisi sed nisi varius vestibulum a nec tellus. Maecenas sed nisi at arcu fringilla varius ac vel dolor. Ut sem lacus, tincidunt nec gravida consequat, maximus id arcu. Nam imperdiet lorem vitae commodo ornare. Morbi ac justo at justo congue tristique nec non velit. Morbi at nisi non nisl ornare varius.",
  },
};

const OverviewTab = withTabContent(TabContent, tabBodies.overview);
const StatisticsTab = withTabContent(TabContent, tabBodies.statistics);
const SettingsTab = withTabContent(TabContent, tabBodies.settings);

const App = () => {
  const [activeTab, setActiveTab] = useState("SETTINGS");

  const showTabContent = () => {
    switch (activeTab) {
      case "OVERVIEW":
        return <OverviewTab />;
      case "STATISTICS":
        return <StatisticsTab />;
      case "SETTINGS":
        return <SettingsTab />;
      default:
        return <p>No available! Please select a tab.</p>;
    }
  };

  return (
    <div>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="m-4">{showTabContent()}</div>
    </div>
  );
};

export default App;