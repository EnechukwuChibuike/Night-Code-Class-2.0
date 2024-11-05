import Button from "./Button";

function Hero() {
  const ButtonText = "GET HELP WITH LANDING PAGES";

  return (
    <section className="bg-blue-400 h-[90vh] px-48 flex justify-between">
      <section className="bg-[url('/portraitman.png')] h-full w-[45%] bg-cover bg-center"></section>
      <section className="grid content-center gap-5">
        <h1 className="text-4xl text-white font-bold">
          Get higher conversion <br /> rates on landing pages
        </h1>

        <strong className="text-gray-700">
          We help you get more leads by creating and managing <br /> high
          performing landing pages.
        </strong>

        {/* <button className="px-4 py-2 w-fit shadow-lg rounded-md bg-[orangered] text-white">
          GET HELP WITH LANDING PAGES
        </button> */}

        <Button ButtonText={ButtonText} />
      </section>
    </section>
  );
}

export default Hero;
