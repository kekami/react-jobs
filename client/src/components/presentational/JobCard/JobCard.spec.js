import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import JobCard, { timeLeft, diffMonths, diffDays } from './JobCard';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<JobCard />, div);
// });

describe('Helper functions', () => {
  it('returns the correct number of months', () => {
    expect(diffMonths(new Date(2017,4,1), new Date(2017,1,1))).toBe(3);
  });

  it('returns the correct number of days', () => {
    expect(diffDays(new Date(2017,1,4), new Date(2017,1,1))).toBe(3);
  });

  it('returns the timeleft', () => {
    const oneDay = {expiresIn: 1, unit: 'day'};
    const threeDays = { expiresIn: 3, unit: 'days' };
    const oneMonth = { expiresIn: 1, unit: 'month' };
    const threeMonths = { expiresIn: 3, unit: 'months' };

    expect(timeLeft(Date.now() + 86400000 * 1)).toEqual(oneDay);
    expect(timeLeft(Date.now() + 86400000 * 3)).toEqual(threeDays);
    expect(timeLeft(Date.now() + 86400000 * 30)).toEqual(oneMonth);
    expect(timeLeft(Date.now() + 86400000 * 90)).toEqual(threeMonths);
  });
});
