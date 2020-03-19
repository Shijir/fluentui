import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M23.8535,23.1465c0.1953,0.1953,0.1953,0.5117,0,0.707C23.7559,23.9512,23.6279,24,23.5,24s-0.2559-0.0488-0.3535-0.1465
          L21.5,22.207l-1.6465,1.6465C19.7559,23.9512,19.6279,24,19.5,24s-0.2559-0.0488-0.3535-0.1465
          c-0.1953-0.1953-0.1953-0.5117,0-0.707L20.793,21.5l-1.6465-1.6465c-0.1953-0.1953-0.1953-0.5117,0-0.707s0.5117-0.1953,0.707,0
          L21.5,20.793l1.6465-1.6465c0.1953-0.1953,0.5117-0.1953,0.707,0s0.1953,0.5117,0,0.707L22.207,21.5L23.8535,23.1465z
          M19.1875,11.3125c0.2266,0,0.4316-0.1543,0.4863-0.3843l0.3125-1.3125c0.0352-0.1489,0.001-0.3057-0.0938-0.4258S19.6533,9,19.5,9
          h-8c-0.2314,0-0.4326,0.1592-0.4863,0.3843l-0.3125,1.3125c-0.064,0.2686,0.1021,0.5381,0.3706,0.6021
          c0.2686,0.0649,0.5381-0.1011,0.6021-0.3706L11.895,10h2.9951l-1.7999,9H12c-0.2764,0-0.5,0.2236-0.5,0.5S11.7236,20,12,20h3
          c0.2764,0,0.5-0.2236,0.5-0.5S15.2764,19,15,19h-0.8903l1.8001-9h2.9573l-0.166,0.6968c-0.0645,0.2686,0.1016,0.5381,0.3701,0.6021
          C19.1104,11.3081,19.1494,11.3125,19.1875,11.3125z M17.5,22h-8C9.2236,22,9,22.2236,9,22.5S9.2236,23,9.5,23h8
          c0.2764,0,0.5-0.2236,0.5-0.5S17.7764,22,17.5,22z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M23.8535,23.1465c0.1953,0.1953,0.1953,0.5117,0,0.707C23.7559,23.9512,23.6279,24,23.5,24s-0.2559-0.0488-0.3535-0.1465
          L21.5,22.207l-1.6465,1.6465C19.7559,23.9512,19.6279,24,19.5,24s-0.2559-0.0488-0.3535-0.1465
          c-0.1953-0.1953-0.1953-0.5117,0-0.707L20.793,21.5l-1.6465-1.6465c-0.1953-0.1953-0.1953-0.5117,0-0.707s0.5117-0.1953,0.707,0
          L21.5,20.793l1.6465-1.6465c0.1953-0.1953,0.5117-0.1953,0.707,0s0.1953,0.5117,0,0.707L22.207,21.5L23.8535,23.1465z
          M20.1602,10.5439l0.3125-1.3125c0.0713-0.2974,0.002-0.6113-0.1875-0.8511C20.0947,8.1401,19.8057,8,19.5,8h-8
          c-0.4629,0-0.8657,0.3179-0.9727,0.7686l-0.3125,1.3125c-0.1279,0.5371,0.2036,1.0762,0.7412,1.2041s1.0762-0.2036,1.2041-0.7412
          L12.29,10h1.9902l-1.6,8H12c-0.5522,0-1,0.4473-1,1s0.4478,1,1,1h3c0.5522,0,1-0.4473,1-1s-0.4478-1-1-1h-0.2803l1.6-8h1.9147
          l-0.0195,0.0811c-0.1279,0.5371,0.2041,1.0762,0.7412,1.2041c0.0781,0.0186,0.1553,0.0273,0.2324,0.0273
          C19.6406,11.3125,20.0508,11.0034,20.1602,10.5439z M17.5,22h-8C9.2236,22,9,22.2236,9,22.5S9.2236,23,9.5,23h8
          c0.2764,0,0.5-0.2236,0.5-0.5S17.7764,22,17.5,22z"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'remove-format'
} as TeamsProcessedSvgIconSpec;