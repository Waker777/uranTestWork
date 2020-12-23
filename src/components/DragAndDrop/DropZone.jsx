import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './dropZone.scss';

export const DropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [targetFiles, setTargetFiles] = useState([]);
  const [selectAlbum, setSelectedAlbum] = useState();

  const albums = useSelector((state) => state.photos.data);

  const progressRef = useRef([]);
  // eslint-disable-next-line no-return-assign
  progressRef.current = selectedFiles.map((ref, index) => (
    progressRef.current[index] = React.createRef()));
  const token = useSelector((state) => state.response.accessToken);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    setTargetFiles((prev) => prev.concat(files));
    if (files.length) {
      Object.values(files).forEach((file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (event) {
          setSelectedFiles((prev) => prev.concat(event.target.result));
        };
      });
    }
  };

  const handleUploadFiles = () => {
    targetFiles.forEach((data) => {
      Object.values(data).forEach((file, i) => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('access_token', token);
        axios.post(`https://graph.facebook.com/${selectAlbum}/photos`, formData, {
          onUploadProgress: (event) => {
            const uploadPercentage = Math.floor((event.loaded / event.total) * 100);
            progressRef.current[i].current.value = uploadPercentage;
          },
        }).catch((e) => console.warn(e));
      });
    });
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedAlbum(e.currentTarget.value);
  };

  return (
    <>
      <select onChange={handleSelect} value={selectAlbum}>
        {(albums || []).map((album) => (
          <option value={album.id}>{album.name}</option>
        ))}
      </select>
      <div
        className="drop-zone__container"
        onDrop={handleFileDrop}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
      >
        <div className="drop-zone">
          {
            selectedFiles.map((item, i) => (
              <div className="drop-zone__selected-item" key={item}>
                <img
                  src={item}
                  alt="card"
                  key={item.length + item}
                  className="drop-zone__item"
                />
                <progress
                  ref={progressRef.current[i]}
                  className="drop-zone__progress"
                  value="0"
                  max="100"
                />
              </div>

            ))
          }
          {!selectedFiles.length
            ? (
              <>
                <div className="drop-zone__icon"></div>
                <p> Drag & Drop files here or click to upload</p>
              </>
            ) : null}
        </div>

      </div>
      {selectedFiles.length ? <button onClick={handleUploadFiles}>Upload Photos</button> : null}
    </>
  );
};
