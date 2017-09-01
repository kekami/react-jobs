import React from 'react';
import ReactDOM from 'react-dom';
import JobDetailsContainer, { getData, validNavItemList } from './JobDetailsContainer';
import { shallow } from 'enzyme';

describe('Job Details Container renders', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JobDetailsContainer />, div);
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


  it('returns nav list only containing recognised items - T1', () => {
    // Items are ["Responsibilities"];
    let job = {
      Responsibilities: ""
    }

    job.push('Local Information')

    //expect(validNavItemList).toMatchArray(['Responisiblities', 'Local Information'])
  })

});

