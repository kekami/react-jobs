import React, { Component } from 'react';
import { SectionWrapper, LinkHead, Edit, I, InputformLink, SocMediaInput, Label } from './styles';

export class LinkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ show: !this.state.show });
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
              placeholder="https://www.linedin.com/ln/example"
              required
            />
          </SocMediaInput>
        </InputformLink>

      </SectionWrapper>
    );
  }
}
