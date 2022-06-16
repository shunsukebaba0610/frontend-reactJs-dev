import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map(({ id, largeImageURL, pageURL, tags }) => (
          <div className="image" key={id}>
            <a href={pageURL} target="_blank">
              <img src={largeImageURL} alt={tags} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
