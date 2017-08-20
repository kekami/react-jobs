import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { SectionWrapper, LinkHead, Edit, I, InputformLink, SocMediaInput, Label, LinkTag, Websites } from './styles';

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
      { name: 'linkedIn', url: this.linkedIn.value },
      { name: 'facebook', url: this.facebook.value },
      { name: 'twitter', url: this.twitter.value },
      { name: 'google+', url: this.googlepl.value },
    ];
    this.setState({ Links });
  }

  addingLinks() {
    return this.state.Links.map((link, i) => (
      <LinkTag key={i} showingbelow="true">
        {link.name} {link.url}
      </LinkTag>
    ));
  }
  render() {
    return (
      <SectionWrapper edited={this.state.show}>
        <LinkHead>
          <p><strong>Links</strong> My social media and homepage links</p>
          <Edit onClick={this.onClick} edited={this.state.show}>
            { this.state.show ?
              <div><I className="fa fa-floppy-o" aria-hidden="true" /> Save</div>
              : <div><I className="fa fa-pencil" aria-hidden="true" /> Edit</div> }
          </Edit>
        </LinkHead>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <SocMediaInput>
            <div className="form-group">
              <label>Linkedin profile </label>
              <input
                name="linkedIn"
                ref={(input) => {this.linkedIn = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Facebook profile </label>
              <input
                name="Facebook"
                ref={(input) => {this.facebook = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Twitter profile </label>
              <input
                name="Twitter"
                ref={(input) => {this.twitter = input; }}
                type="url"
                placeholder="paste your link here and hit Enter"
              />
            </div>
            <div className="form-group">
              <label>Google+ profile </label>
              <input
                name="google+"
                ref={(input) => {this.googlepl = input; }}
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
