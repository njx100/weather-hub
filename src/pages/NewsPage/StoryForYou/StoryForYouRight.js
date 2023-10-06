import React from "react";
import * as Icon from "react-feather";

function StoryForYouRight() {
  return (
    <div className="col-lg-3 mt-5 mt-lg-0">
    
      <div className="row g-2">
        <div className="col-4">
          <a
            href="#"
            class="bg-facebook rounded text-center text-white-force p-3 d-block"
          >
            <Icon.Facebook color="white" />
            <h6 class="m-0">1.5K</h6>
            <span class="small">Fans</span>
          </a>
        </div>
        <div className="col-4">
          <a
            href="#"
            class="bg-instagram-gradient rounded text-center text-white-force p-3 d-block"
          >
            <Icon.Instagram color="white" />
            <h6 class="m-0">1.8M</h6>
            <span class="small">Followers</span>
          </a>
        </div>
        <div className="col-4">
          <a
            href="#"
            class="bg-youtube rounded text-center text-white-force p-3 d-block"
          >
            <Icon.Youtube color="white" />
            <h6 class="m-0">22K</h6>
            <span class="small">Subs</span>
          </a>
        </div>
      </div>
      <div>
        <h4 className="mb-3 mt-4">Weather App</h4>
      </div>
      </div>
    
  );
}

export default StoryForYouRight;
