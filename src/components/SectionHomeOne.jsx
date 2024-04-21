import shoes from "../images/shoes.jpg";
import tops from "../images/tops.jpg";
import jeans from "../images/jeans.jpg";
import "../styles/SectionOne.scss";

function SectionHomeOne() {
  return (
    <section className="sectionContainer">
      <div className="imageContainer">
        <img className="sectionImage" src={tops} alt="tops" />
        <div className="imageText">TOPS</div>
      </div>
      <div className="imageContainer">
        <img className="sectionImage" src={jeans} alt="jeans" />
        <div className="imageText">JEANS</div>
      </div>

      <div className="imageContainer">
        <img className="sectionImage" src={shoes} alt="shoes" />
        <div className="imageText">SHOES</div>
      </div>
    </section>
  );
}

export default SectionHomeOne;
