import React, { Fragment, useState } from "react";
import Logout from "./Logout";
import List from "./List";
import Aside from "./Aside";
import Resume from "./Resume";

export default function Admin() {
  const [section, setSection] = useState("resume");
  const [edit, setEdit] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const changeSection = (e) => {
    let section = e.target.id.split("-")[1];
    setSection(section);
    closeEditItem();
    resetPage();
  };

  const editItem = (e) => {
    let id = e.target.parentNode.name;
    setEdit(id);
  };

  const closeEditItem = () => {
    setEdit("");
  };

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.textContent));
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  let currentSection =
    section === "resume" ? (
      <Resume />
    ) : (
      <List
        section={section}
        editItem={editItem}
        edit={edit}
        closeEditItem={closeEditItem}
        currentPage={currentPage}
        changePage={changePage}
        resetPage={resetPage}
      />
    );

  return (
    <Fragment>
      <header className="admin-header">
        <h2>
          <a href="/">{"M & C"}</a>
        </h2>
        <Logout />
      </header>
      <Aside changeSection={changeSection} />
      <main className="admin-main-content">{currentSection}</main>
      <div className="admin-footer">
        <p>
          {`Made with `}
          <i className="fas fa-heart"></i>
          {` by M&M`}
        </p>
      </div>
    </Fragment>
  );
}
