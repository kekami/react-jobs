import React, { Component } from 'react';
import { SectionWrapper, LinkHead, Edit, I, SocMediaInput, LinkTag, Websites } from './styles';

/* 
Using knowledge from Skill and Lang sections I endeavoured to generate more predictable LinkSection.
My goal here was to allow user to populate this section with his social media links.
1. User have to be able to add/edit his links - 5 input fields.
2. Unused input fields should not generate empty outputs - only added links should be displayed.

Since this section allowed only for 5 inputs I decided to make an array of 5 objects.
Each object consists of index, logo and URL. URL is a value of referenced input. 
This makes sure all inputs always find their own place and logo.
Lastly, submitData() makes sure to filter out from this array objects without url.

Just like in previous sections addingLinks method maps over the Links[] and outputs user links.

I learnt here how to use refs and that that I can store whole divs inside an object.

*/

export class LinkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      Links: [],
    };
    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitData();
  }

  submitData() {
    let Links = this.state.Links;
    Links = [
      { index: 1,
        logo: <div><i className="fa fa-home" aria-hidden="true" /></div>,
        url: this.website.value },
      { index: 2,
        logo: <div><i className="fa fa-linkedin-square" aria-hidden="true" /></div>,
        url: this.linkedIn.value },
      { index: 3,
        logo: <div><i className="fa fa-facebook-square" aria-hidden="true" /></div>,
        url: this.facebook.value },
      { index: 4,
        logo: <div><i className="fa fa-twitter-square" aria-hidden="true" /></div>,
        url: this.twitter.value },
      { index: 5,
        logo: <div><i logo="g+" className="fa fa-google-plus-square" aria-hidden="true" /></div>,
        url: this.googlepl.value },
    ];
    Links = Links.filter(link => (link.logo && link.url.length));
    this.setState({ Links });
  }

  addingLinks() {
    return this.state.Links.map(link => (
      <LinkTag key={link.index} showingbelow="true">
        {link.logo} <p>{link.url}</p>
      </LinkTag>
    ));
  }
  render() {
    return (
      <SectionWrapper edited={this.state.show}>
        <LinkHead edited={this.state.show}>
          <p><strong>Links</strong> My social media and homepage links</p>
          <Edit onClick={this.onClick} edited={this.state.show}>
            { this.state.show ?
              <div><I className="fa fa-times" aria-hidden="true" /></div>
              : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }
          </Edit>
        </LinkHead>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <p>
            Add some extra firepower to your profile by providing
            links to professional and social media profiles.
          </p>
          <SocMediaInput>
            <div className="form-group">
              <label htmlFor="website">Your website </label>
              <input
                id="website"
                name="website"
                ref={(input) => { this.website = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedIn">Linkedin profile </label>
              <input
                id="linkedIn"
                name="linkedIn"
                ref={(input) => { this.linkedIn = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label htmlFor="facebook">Facebook profile </label>
              <input
                id="facebook"
                name="Facebook"
                ref={(input) => { this.facebook = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label htmlFor="twitter">Twitter profile </label>
              <input
                id="twitter"
                name="Twitter"
                ref={(input) => { this.twitter = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label htmlFor="googlePlus">Google+ profile </label>
              <input
                id="googlePlus"
                name="google+"
                ref={(input) => { this.googlepl = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
          </SocMediaInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Websites className="addedLinks" style={{ display: !this.state.show ? 'block' : 'none' }}>
          {this.addingLinks()}
        </Websites>
      </SectionWrapper>
    );
  }
}
