/* eslint-disable react/prop-types */
function Myprojects(props) {
  return (
    <>
      <div className="project-container">
        <div className="project-img">
          <img src={props.img}></img>
        </div>

        <div className="project-info-wrapper">
          <div className="project-name">
            <label>{props.name}</label>
          </div>
          <div className="project-desc">
            <label>{props.link}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myprojects;
