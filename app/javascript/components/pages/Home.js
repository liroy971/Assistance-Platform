import React from "react";
import Map from "../Map.js";
import DashboardButtonBlock from "../DashboardButtonBlock.js";
import DashboardMainBlock from "../DashboardMainBlock.js";
import CounterUnfulfilled from "../CounterUnfulfilled.js";
function Home() {
  return (
    <>
                    <div className="page-main-ctn">
                    <DashboardButtonBlock />
                    <div className="dashboard-row">
                    <DashboardMainBlock />
                    <div className="dashboard-column">
                      <div className="dashboard-column-h"><CounterUnfulfilled /></div>
                      <div className="dashboard-column-h"><div className="progress-circle-a cent-flex" data-value="38">
                      </div></div>
                    </div>
                    </div>
                    </div>
</>

  );
}
export default Home;
