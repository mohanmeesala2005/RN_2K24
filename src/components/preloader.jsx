import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css'

const preloader = () => {
    useEffect(() => {
        preLoaderAnim();
      }, []);
  return (
    <div>
      <div className="preloader">
        <div className="text-cont">
            <span><h1>Radio Nitroz</h1></span>
            <br></br>
            <span><h3>The Official Entertainment Club of NIT Durgapur </h3></span>
        </div>
      </div>
    </div>
  )
}

export default preloader
