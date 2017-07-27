import React from 'react';
import { SVGLeft, SVGRight } from '../styles.js'

function bracesSVG(StyledSVG) {
  return class SVG extends React.Component {
    render() {
      return (
      <StyledSVG xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 25.75596 82.458659" height="311.65475" width="97.34536">
        <defs id="defs2" />
        <path style={{fill: 'none', stroke: '#ffffff', strokeWidth: '5.29166698', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} d="M 23.497692,4.0910383 C 16.970432,5.8831983 10.923681,4.8175183 13.168291,18.72121 16.619392,40.098151 1.9462602,41.410891 1.9462602,41.410891" id="path4498-7" />
        <path style={{fill: '#ffffff', fillOpacity: 1, strokeWidth: '5.29186487', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none'}} d="m 1.2904052,39.003903 c 0.0011,-0.297839 0.19028,-0.2525 0.407016,-0.25758 0.291818,-0.007 0.633604,0.005 0.633604,0.005 v 5.291799 c 0,0 -0.34624,-0.009 -0.647288,-0.02529 -0.212952,-0.0113 -0.412142,0.0553 -0.411049,-0.239279 z" id="rect4566-0" />
        <path style={{fill: 'none', stroke: '#ffffff', strokeWidth: '5.29166698', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} d="M 23.882468,78.717021 C 17.355207,76.924861 11.308456,77.990541 13.553066,64.086851 17.004166,42.709908 2.3310352,41.397168 2.3310352,41.397168" id="path4498-1" />
      </StyledSVG>
    );
    }
  }
}
/*
function styledBraces(styledComponet) {
  return class wrappedBraces extends React.Component {
    render() {
      return (
        <styledComponent>
          <bracesSVG />
        </styledComponent>
      )
    }
  }
}
console.log(wrappedBraces(bracesSVG, SVGLeft));
*/
export const BracesLeft = bracesSVG(SVGLeft);
export const BracesRight = bracesSVG(SVGRight);
