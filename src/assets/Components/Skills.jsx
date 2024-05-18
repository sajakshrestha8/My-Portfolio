/* eslint-disable react/prop-types */

function Skills(props) {
  return (
    <>
      <div className="html">
        <div className="logo-name">
          <img className="logo" src={props.logo}></img>
          <h1>{props.name}</h1>
        </div>
        <div className="skill-desc">
          <label className="syntax">{props.syntax}</label>
          <div className={props.infocss}>
            <label>{props.info}</label>
          </div>
          <label className="close">{props.close}</label>
        </div>
        <label></label>
      </div>
    </>
  );
}

export default Skills;
