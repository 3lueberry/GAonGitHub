import React from "react";
import Rooms from "./Rooms";

const FloorPlan = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-12">
                <Rooms name="living-room" id="1" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Rooms name="store-room" id="1" />
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-5">
                <Rooms name="bedroom" id="1" />
              </div>
              <div className="col-sm-7">
                <Rooms name="bedroom" id="2" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <Rooms name="dining-room" id="1" />
              </div>
              <div className="col-sm-3">
                <Rooms name="bathroom" id="1" />
              </div>
              <div className="col-sm-3">
                <Rooms name="bathroom" id="2" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <Rooms name="landing" id="1" />
              </div>
              <div className="col-sm-9">
                <Rooms name="kitchen" id="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlan;
