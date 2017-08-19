import React, { Component } from 'react';
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

  handleSubmit(event) {
    event.preventDefault();
    const newLink = {
      address: this.state.inputValue,
      shownbelow: true,
    };
    const Links = this.state.Links.concat(newLink);
    this.setState({
      Links,
    });
  }

  addingLinks() {
    return this.state.Links.map((link, i) => (
      <LinkTag key={i} showingbelow={link.shownbelow}>
        Logo {link.address}
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
        <InputformLink style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <SocMediaInput>
            <Label>Linkedin profile </Label>
            <input
              type="url"
              onChange={e => this.setState({ inputValue: e.target.value })}
              value={this.state.inputValue}
              placeholder="https://www.linkedin.com/in/example"
              required
            />
          </SocMediaInput>
        </InputformLink>
        <Websites style={{ display: !this.state.show ? 'block' : 'none' }}>
          {this.addingLinks(this.state.inputValue)}
        </Websites>
      </SectionWrapper>
    );
  }
}
