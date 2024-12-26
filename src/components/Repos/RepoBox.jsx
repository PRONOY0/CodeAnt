import React from "react";
import { GoDatabase } from "react-icons/go";
import "./RepoBox.css";

const RepoBox = ({ name, visibility, lang, size, updatedAt }) => {
  return (
    <div className="RepoBox">
      <div className="RepoBox__Header">
        <p className="repo__title">{name}</p>
        <p className="repo__visibility">{visibility}</p>
      </div>

      <div className="RepoBox__Content">
        <div className="RepoBox__lang_box">
          <p className="greyText">{lang}</p>
          <div className="blueDot"></div>
        </div>

        <div className="RepoBox__size_box">
          <p className="greyText">{size} KB</p>
          <GoDatabase className="database__Icon" />
        </div>

        <div className="repoBox__updatedAt_box">
          <p className="greyText">Updated {updatedAt} day ago</p>
        </div>
      </div>
    </div>
  );
};

export default RepoBox;
