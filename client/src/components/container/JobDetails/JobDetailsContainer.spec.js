import React from 'react';
import ReactDOM from 'react-dom';
import JobDetailsContainer, { validNavItemList } from './JobDetailsContainer';

jest.mock('axios');
const axios = require('axios');

axios.mockImplementation(() => new Promise(() => {}));

describe('Job Details Container renders', () => {
  let hash;

  beforeEach(() => {
    hash = '#3241521515';
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JobDetailsContainer hash={hash} />, div);
  });

  it('returns nav list only containing recognised items - T1', () => {
    const navItems = [['responsibilities', 0], ['requirements', 0], ['compensation', 0], ['jobDescription', 0]];
    expect(validNavItemList()).toEqual(expect.arrayContaining(navItems));
  });
});

// it('renders with set components', () => {
//   const component = shallow(<JobDetailsContainer />)
//   console.log(component);
// });

/* it('filters data for correct entry', () => {
    const id = 3241521515;
    const data =  {"jobs": [
        {
          "id": "3241521515",
          "title": "Communications Specialist",
        },
        {
          "id": "3241521516",
          "title": "Marketing Specialist",
        },
        {
          "id": "3241521517",
          "title": "Marketing Specialist",
        }
      ]
    }
    
    getData(id, data).then((res) => console.log(res));
  }) */
