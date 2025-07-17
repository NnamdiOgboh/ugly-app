import React, { useState} from "react";
import images from "../api-mock.json";

export const Gallery = () => {
const [imageList, setImageList] = useState(images.resources);

  return (
    <div className="image-grid">
      {imageList.map((image) => (
        <img src={image.url} alt={image.public_id}></img>
      ))}
    </div>
  )
}