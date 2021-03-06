import React from 'react';
import { Animated } from 'react-animated-css';
import backIcon from './image/icons/ket2.png';

const styles = {
  icon: {
    zIndex: '-1',
    width: '30px',
  },
};

const OtherSkills = () => (
  <Animated
    animationIn="fadeInRightBig"
    animationOut="zoomOutDown"
    isVisible={true}
  >
    <article className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h2>
          <img src={backIcon} style={styles.icon} alt="other skills logo" />
          Other
        </h2>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <div>
        <a className="f4 db black link hover-hot-pink pv1">GIT</a>
        <a className="f4 db black link hover-hot-pink pv1">RESTful APIs</a>
        <a className="f4 db black link hover-hot-pink pv1">Responsive Design</a>
        <a className="f4 db black link hover-hot-pink pv1">Photoshop CS6</a>
        <a className="f4 db black link hover-hot-pink pv1">Illustrator CC</a>
        <a className="f4 db black link hover-hot-pink pv1">Flash</a>
        <a className="f4 db black link hover-hot-pink pv1">Java</a>
        <a className="f4 db black link hover-hot-pink pv1">C, C++</a>
      </div>
    </article>
  </Animated>
);

export default OtherSkills;
