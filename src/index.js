import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`Daniel won the lottery for ${courseValue} this month!`);  // eslint-disable-line no-console

