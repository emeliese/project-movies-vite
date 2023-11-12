import React from "react";
import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <NavLink to="/">Back to home page</NavLink>
      <div className="loading">Page not found...</div>
    </div>
  );
};
