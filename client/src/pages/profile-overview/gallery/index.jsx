import React from "react";
import { images } from "../../../data/images";
import GalleryCom from "../../../component/gallery/GalleryCom";

function Gallery2() {
  return (
    <div
      className="tab-pane fade show active"
      id="tab_5"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div className="crancy-ptabs__gallery">
        <GalleryCom images={images} />
      </div>
    </div>
  );
}

export default Gallery2;
