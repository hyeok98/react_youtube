import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",

      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCsM07CFOAfCiYvAHna-OgR3kJ8hXhhf2g&part=snippet&chart=mostPopular&maxResults=25",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
    console.log("useEffect");
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
