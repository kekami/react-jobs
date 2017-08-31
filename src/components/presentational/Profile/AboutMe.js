import React, { Component } from 'react';
import { SectionWrapper, AboutMeHead, AboutMeBody, Edit, I, AboutMeInput, Company } from './styles';

// --> Fix presentational output of the About Me seciton

export class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      Location: '',
      Intro: '',
      show: false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      FirstName: this.FirstName.value,
      LastName: this.LastName.value,
      Location: this.Location.value,
      Intro: this.Intro.value,
    });
  }


  render() {
    return (
      <SectionWrapper edited={this.state.show} style={{ 'backgroundColor': '#FAFAFA' }} >
        <AboutMeHead edited={this.state.show}>
          <p><strong>About me</strong></p>
          <Edit onClick={this.onClick} edited={this.state.show}>
            { this.state.show ?
              <div><I className="fa fa-times" aria-hidden="true" /></div>
              : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }
          </Edit>
        </AboutMeHead>
        <AboutMeBody style={{ display: this.state.show ? 'none' : 'block' }}>
          <div>
            <div><strong>Name</strong> </div>
            <p>{this.state.FirstName} {this.state.LastName}</p>
            <div><strong>Living in</strong></div>
            <p>{this.state.Location}</p>
            <div><strong>Introduction</strong></div>
            <p>{this.state.Intro}</p>
          </div>
        </AboutMeBody>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <AboutMeInput >
            <Company>
              <div className="form-group">
                <label><strong>First Name</strong></label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="e.g. John"
                  ref={(input) => { this.FirstName = input; }}
                />
              </div>
              <div className="form-group">
                <label><strong>Last name</strong></label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="e.g. Galt"
                  ref={(input) => { this.LastName = input; }}
                />
              </div>
            </Company>
            <div className="form-group">
              <label><strong>Living in</strong></label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Warsaw, Poland"
                ref={(input) => { this.Location = input; }}
              />
            </div>
            <div className="form-group">
              <label><strong>Introduction just a few words about me</strong></label>
              <input
                type="text"
                name="intro"
                ref={(input) => { this.Intro = input; }}
              />
            </div>
          </AboutMeInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
      </SectionWrapper>
    );
  }
}
