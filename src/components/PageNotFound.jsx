import React from "react";
import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <div>Page not found...</div>
      <NavLink to="/">Back to home page</NavLink>
    </div>
  );
};
