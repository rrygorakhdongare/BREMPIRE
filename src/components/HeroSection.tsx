import heroBg from "../assets/images/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="h-[85vh] flex items-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-blue-400 tracking-widest">
          RRY INFRA PVT. LTD.
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Strength In Design,{" "}
          <span className="text-blue-400">
            Trust In Infrastructure
          </span>
        </h1>

        <button className="mt-8 bg-blue-600 px-6 py-3 rounded-lg">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
