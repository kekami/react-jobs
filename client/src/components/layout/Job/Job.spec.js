import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Job from './Job';

jest.mock('axios');
const axios = require('axios');

axios.mockImplementation(() => new Promise(() => {}));

// MemoryRouter address error generated in Jest test environment testing
// Link components.

it('renders without crashing', () => {
  const location = { hash: '555' };
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <MemoryRouter>
        <Job location={location} />
      </MemoryRouter>
    ), div);
});

// Mock response from axios API call
//
// const response = {
//   data:
//     {
//       jobs: [
//         {
//           id: '3241521515',
//           title: 'Email Marketing & Communications Specialist',
//           city: 'Kuala Lumper',
//           location: 'Kuala Lumpur, Malaysia',
//           companyName: 'Mindvalley',
//           companyLogo: '',
//           headquarters: 'Eindhoven, Netherlands',
//           teamSize: '51-200 Employees',
//           founded: 2011,
//           type: 'Higher Eductation, Internet',
//           website: 'www.lipsum.com',
//           socialMedia: [['Facebook', 'www.facebook.com'], ['Twitter', ''], ['Linkedin', '']],
//           videoLifeAt: '',
//           deadline: '2017-09-10',
//           image: 'https://cdn.getyourguide.com/niwziy2l9cvz/UTlTNx6OiqOMMOIESsAEa/b9468a111a1ecfd676b34e648fb43132/kuala_lumpur-1112x630.jpg',
//           description: 'Mindvalley wants you to be their next email marketing and communications specialist in Kuala Lumpur. This is your chance to become one of the masterminds behind the brilliant customer experiences Mindvalley delivers.',
//           descriptionFull: 'Mindvalley wants you to be their next email marketing and communications specialist in Kuala Lumpur. This is your chance to become one of the masterminds behind the brilliant customer experiences Mindvalley delivers.',
//           responsibilities: [
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             'Vivamus euismod dui et metus cursus pharetra.',
//             'Phasellus nec mi non tortor volutpat ultricies vel vitae mauris.',
//             'Quisque iaculis quam hendrerit est pellentesque, gravida aliquam dui imperdiet.'],
//           requirements: [
//             'Etiam vel tortor at ipsum fringilla imperdiet convallis id dolor.',
//             'Mauris commodo eros nec lobortis mattis.',
//             'Nulla placerat augue vel ullamcorper scelerisque.',
//             'Vestibulum at odio id enim blandit auctor id a mi.',
//             'Morbi mattis felis eleifend ligula consectetur, eu pellentesque leo mattis.',
//             'Nunc nec nisl ut nunc efficitur facilisis sed ut elit.'],
//           compensation: [
//             'Vestibulum at odio id enim blandit auctor id a mi.',
//             'Morbi mattis felis eleifend ligula consectetur, eu pellentesque leo mattis.',
//             'Nunc nec nisl ut nunc efficitur facilisis sed ut elit.'],
//           jobDescription: [
//             'Nulla placerat augue vel ullamcorper scelerisque. Nulla placerat augue vel ullamcorper scelerisque. Nulla placerat augue vel ullamcorper scelerisque. Nulla placerat augue vel ullamcorper scelerisque.',
//             'Vestibulum at odio id enim blandit auctor id a mi.',
//             'Morbi mattis felis eleifend ligula consectetur, eu pellentesque leo mattis.'],
//         },
//       ],
//     },
// };