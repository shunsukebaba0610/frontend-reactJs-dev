import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "./firebaseStorage";
import { Button } from "@mui/material";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";

const ImageUploader = () => {
  const [isloading, setIsLoading] = useState(false);
  const [isUploaded, setIsUpLoaded] = useState(false);

  const OnFileUploadToFirebase = (e) => {
    //console.log(e.target.files[0].name)
    const file = e.target.files[0]
    const storageRef = ref(storage, "image/" + file.name)
    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });
    const uploadedTask = uploadBytesResumable(storageRef, file);
    uploadedTask.on("state_changed", (snapshot) => {
      setIsLoading(true);
    },
      (error) => {
        console.log(error);
      },
      // Handle successful uploads on complete
      () => {
        setIsLoading(false);
        setIsUpLoaded(true);
        getDownloadURL(uploadedTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at' + downloadURL);
        });
      }
    );
  }

  return (
    <>
      {isloading ? (
        <h2>アップロード中・・・</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2>アップロード完了</h2>
          ) : (
            <div className="outerBox">
              <div className="title">
                <h2>画像アップローダー</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <img src={ImageLogo} alt="imagelogo" />
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input className="imageUploadInput"
                  multiple name="imageURL"
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={OnFileUploadToFirebase}
                />
              </div>
              <p>または</p>
              <Button variant="contained">
                ファイルを選択
                <input className="imageUploadInput"
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={OnFileUploadToFirebase} />
              </Button>
            </div>
          )}
        </>
      )}

    </>
  );
};

export default ImageUploader;
