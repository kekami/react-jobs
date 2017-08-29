import React, { Component } from 'react';
import { SectionWrapper, LinkHead, Edit, I, SocMediaInput, LinkTag, Websites } from './styles';

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
      { index: 1, logo: <div><i className="fa fa-home" aria-hidden="true" /></div>, url: this.website.value },
      { index: 2, logo: <div><i className="fa fa-linkedin-square" aria-hidden="true" /></div>, url: this.linkedIn.value },
      { index: 3, logo: <div><i className="fa fa-facebook-square" aria-hidden="true" /></div>, url: this.facebook.value },
      { index: 4, logo: <div><i className="fa fa-twitter-square" aria-hidden="true" /></div>, url: this.twitter.value },
      { index: 5, logo: <div><i logo="g+" className="fa fa-google-plus-square" aria-hidden="true" /></div>, url: this.googlepl.value },
    ];
    Links = Links.filter(link => (link.logo && link.url.length));
    this.setState({ Links });
  }

  addingLinks() {
    return this.state.Links.map((link) => (
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
          <p>Add some extra firepower to your profile by providing links to professional and social media profiles.</p>
          <SocMediaInput>
            <div className="form-group">
              <label>Your website </label>
              <input
                name="website"
                ref={(input) => { this.website = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Linkedin profile </label>
              <input
                name="linkedIn"
                ref={(input) => { this.linkedIn = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Facebook profile </label>
              <input
                name="Facebook"
                ref={(input) => { this.facebook = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Twitter profile </label>
              <input
                name="Twitter"
                ref={(input) => { this.twitter = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Google+ profile </label>
              <input
                name="google+"
                ref={(input) => { this.googlepl = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
          </SocMediaInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Websites style={{ display: !this.state.show ? 'block' : 'none' }}>
          {this.addingLinks()}
        </Websites>
      </SectionWrapper>
    );
  }
}
