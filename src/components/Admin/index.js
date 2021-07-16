import React, { Fragment, useState } from "react";
import Logout from "./Logout";
import List from "./List";
import Aside from "./Aside";
import Resume from "./Resume";

export default function Admin() {
  const [section, setSection] = useState("guests");

  const changeSection = (e) => {
    let section = e.target.id.split("-")[1];
    setSection(section);
  };

  let apartado = section === "resume" ? <Resume /> : <List section={section} />;

  return (
    <Fragment>
      <h1>Admin</h1>
      <Logout />
      <Aside changeSection={changeSection} />
      {apartado}
    </Fragment>
  );
}
