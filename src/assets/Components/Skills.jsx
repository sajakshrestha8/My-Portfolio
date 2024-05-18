/* eslint-disable react/prop-types */
function Skills(props) {
  return (
    <>
      <div className={props.css}>
        <div className="logo-name">
          <img className="logo" src={props.logo}></img>
          <label>{props.name}</label>
        </div>
        <label></label>
      </div>
    </>
  );
}

export default Skills;
