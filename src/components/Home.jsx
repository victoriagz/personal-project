import Carousel from "./Carousel";
import heroImage from "../images/hero-image.jpg";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import PictureWoman from "../images/womantalking.jpg";
import Contact from "./Contact";
import "../styles/App.scss";

function Home() {
  return (
    <>
      <main>
        <div className="hero-container">
          <img className="image-hero" src={heroImage} alt="heroImage" />
          <div className="hero-content">
            <h1>¡Bienvenido a nuestra tienda en línea!</h1>
            <p>Descubre nuestras últimas colecciones y ofertas especiales.</p>
            <button>VER COLECCION</button>
          </div>
        </div>
        <aside className="aside">
          <section>
            <h2 className="title"> PINK COLLECTION </h2>
            <Carousel />
          </section>
          <section>
            <SectionHomeOne />
          </section>
        </aside>
        <SectionHomeTwo />
        <section className="newsletter">
          <img
            className="pictureWoman"
            src={PictureWoman}
            alt="woman talking"
          />
          <div className="newsletter-info">
            <h2 className="newsletter-title">
              SUBSCRÍBETE A NUESTRA NEWSLETTER
            </h2>
            <p className="newsletter-subtitle">
              Apúntate a nuestra newsletter y se la primera en enterarte de
              nuestras novedades, promociones, rebajas, ¡y mucho más!
            </p>
            <form className="newsletter-form">
              <input
                className="input-newsletter"
                type="text"
                placeholder="Introduce tu email"
              />
              <button className="button-sus">SUSCRIBIRME</button>
              <label className="checkbox-label" htmlFor="termsCheckbox">
                <input id="termsCheckbox" type="checkbox" />
                He leído y acepto condiciones legales
              </label>
            </form>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}

export default Home;
