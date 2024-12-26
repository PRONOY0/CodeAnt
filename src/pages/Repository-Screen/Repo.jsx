import React from "react";
import "./Repo.css";
import Navbar from "../../components/Navbar/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import RepoBox from "../../components/Repos/RepoBox";

const Repo = () => {
  return (
    <div className="repo">
      <Navbar />

      <div className="repo__container">
        <div className="repo__container__header">
          <div className="repo__container__header__left">
            <h1>Repositories</h1>
            <p>33 total respositories</p>
          </div>

          <div className="repo__container__header__right">
            <button className="refresh">
              <FiRefreshCw className="RepoContainer__icon" />
              Refresh All
            </button>

            <button className="Add__Repo">
              <IoMdAdd className="RepoContainer__icon" />
              Add Repository
            </button>
          </div>
        </div>

        <div className="repo__container__header__search">
          <input
            type="text"
            placeholder="Search Repositories"
            className="search-input"
          />
          <IoSearchOutline className="search-icon" />
        </div>

        <div className="repo__container__repoBox">
          <RepoBox
            name={"design-system"}
            visibility={"Public"}
            lang={"React"}
            size={7320}
            updatedAt={1}
          />

          <RepoBox
            name={"codeant-ci-app"}
            visibility={"Private"}
            lang={"Javascript"}
            size={5871}
            updatedAt={2}
          />

          <RepoBox
            name={"analytics-dashboard"}
            visibility={"Private"}
            lang={"Python"}
            size={4521}
            updatedAt={5}
          />

          <RepoBox
            name={"mobile-app"}
            visibility={"Public"}
            lang={"Swift"}
            size={3096}
            updatedAt={3}
          />

          <RepoBox
            name={"e-commerce-platform"}
            visibility={"Private"}
            lang={"Java"}
            size={6210}
            updatedAt={6}
          />

          <RepoBox
            name={"blog-website"}
            visibility={"Public"}
            lang={"HTML/CSS"}
            size={1876}
            updatedAt={4}
          />

          <RepoBox
            name={"social-network"}
            visibility={"Private"}
            lang={"PHP"}
            size={5432}
            updatedAt={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Repo;
