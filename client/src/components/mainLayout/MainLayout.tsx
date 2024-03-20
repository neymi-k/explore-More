/* import { Outlet, useLocation } from "react-router-dom"*/
import { Link } from "react-router-dom";

import React from "react";

function MainLayout() {
  return (
    <div className="container  my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="h-[600px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url(./fondo1.jpg)]"></div>
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vive nuevas aventuras
          </h1>
          <Link to="/login">Explorar</Link>
        </div>
      </section>
    </div>
  );
}

export default MainLayout;
