import Facebook from "../Facebook.png";
import Instagram from "../instagram.png";
import Linkedin from "../linkedin.png";
import Profile from "../profile.png";

function Info() {
  return (
    <>
      <div className="landing-page-wrapper">
        <span className="name">Sajak Shrestha</span>

        <div className="image-frontend">
          <div>
            <div className="heading">
              <div>
                <span className="frontend-head">Frontend</span>
              </div>
              <div>
                <span className="frontend-head">Developer.</span>
              </div>
            </div>

            <div>
              <div className="frontend-desc">
                I like to design and create solid and scalable
              </div>
              <div className="frontend-desc">product with great UI.</div>
            </div>
          </div>

          <div className="profile">
            <img src={Profile}></img>
          </div>
        </div>

        <div>
          <div className="know-head">Want to know me personally?</div>

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
        </div>
      </div>
    </>
  );
}

export default Info;
