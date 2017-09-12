import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { Sitemap, SitemapWrapper } from './Sitemap';


describe('Sitemap Component', () => {
  it('Sitemap renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Sitemap />
      </MemoryRouter>, div);
  });
});
