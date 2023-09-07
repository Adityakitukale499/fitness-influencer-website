import React, { createRef, useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "../Styles/VideoCard.css";

function VideoCard({ video }) {
  // console.log(video);
  const [model, setModel] = useState(false);
  const cardRef = createRef(null);
  const openModel = () => {
    cardRef.current.classList.remove("video");
    cardRef.current.classList.add("model");
    setModel(true);
  };
  const closeModel = () => {
    cardRef.current.classList.add("video");
    cardRef.current.classList.remove("model");
    setModel(false);
  };
  return (
    <>
      <div ref={cardRef} className="video">
        {model && (
          <button className="model-close-btn" onClick={() => closeModel()}>
            x
          </button>
        )}
        <div className="video-container" onClick={() => openModel()}>
          <div className="name">{video.heading}</div>

          <Video
            style={{ width: "100%"}}
            autoPlay={model}
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          >
            <source src={video.video} type="video/webm" />
          </Video>

          <ul className="tags">
            {video.tags.map((e, i) => (
              <li key={i} className="tag">
                {e.split(' ')[0]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
