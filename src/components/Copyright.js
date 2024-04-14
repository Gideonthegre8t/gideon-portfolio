import React from "react";

function Copyright() {
  const currentYear = new Date().getFullYear();

  return <p className="stamp">Copyright © {currentYear}</p>;
}

export default Copyright;
