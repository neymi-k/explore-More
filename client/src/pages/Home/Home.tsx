import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container  my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative  h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url(./fondo1.jpg)]"></div>
        <h1>Home</h1>
      </section>
    </div>
  );
};

export default Home;
