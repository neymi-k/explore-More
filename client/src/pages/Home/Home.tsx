import React from "react";
import Info from "../../components/info/info";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container  my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url(./fondo1.jpg)]"></div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Home
        </h1>
        <div>
          <Info />
        </div>
      </section>
    </div>
  );
};

export default Home;
