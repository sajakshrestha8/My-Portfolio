import Facebook from "../Facebook.png";
import Instagram from "../instagram.png";
import Linkedin from "../linkedin.png";

function Info() {
  return (
    <>
      <div className="landing-page-wrapper">
        <span className="name">Sajak Shrestha</span>

        <div className="heading">
          <span className="frontend-head">Frontend</span>
          <span className="frontend-head">Developer.</span>
        </div>
        <div>
          <span className="frontend-desc">
            I like to design and create solid and scalable
          </span>
          <br />
          <span className="frontend-desc">product with great UI.</span>
        </div>
        <span className="know-head">Want to know me personally?</span>
      </div>

      {/* Social media */}
      <div className="social-media-wrapper">
        <div>
          <img className="facebook" src={Facebook} alt="" />
        </div>
        <div>
          <img className="instagram" src={Instagram} alt="" />
        </div>
        <div>
          <img className="linkedin" src={Linkedin} alt="" />
        </div>
      </div>
    </>
  );
}

export default Info;
