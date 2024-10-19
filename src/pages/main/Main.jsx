import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <main className="h-12">main nav bar</main>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Main;
