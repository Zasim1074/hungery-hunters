import Layout from "../../components/layouts/Layout";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Shop from "./Shop";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="shop">
        <Shop />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default Home;
