import Card from "./Card";

function About() {
  return (
    <section className="h-screen flex items-center justify-around">
      <Card caption={"Josh"} />
      <Card caption={"John"} />
      <Card caption={"Jeff"} />
    </section>
  );
}

export default About;
