import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import "../Styles/VideoGallery.css";

const VideoGallery = ({ search, numResult }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&numResults=${numResult}`
      )
      .then((data) => setData(data.data.results))
      .catch((e) => console.log(e));
  }, [search, numResult]);

  return (
    <div className="gallery">
      {data.map((e, i) => (
        <VideoCard key={i} video={e} />
      ))}
    </div>
  );
};

export default VideoGallery;
