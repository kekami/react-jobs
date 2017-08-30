import React, { Component } from 'react';
import { SectionWrapper, ExperienceHead, Click2AddWork, Edit, I, AboutInput, XPTag, SinceDate, YearsMonths, CompanyLocation, PostitionInCorp, Info, Dates, WorkDetails, Experiences, Company, Calendar } from './styles';

export class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: [],
      positions: [],
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
    this.submitData();
  }

  submitData() {
    let identity = this.state.Identity;
    identity = [
      {
        index: 1, FirstName: this.FirstName.value,
      },
      {
        index: 2, LastName: this.LastName.value,
      },
      {
        index: 3, Location: this.Location.value,
      },
      {
        index: 4, Info: this.Intro.value,
      },
    ];
    this.setState({ identity });
  }

  addingXP() {
    return this.state.identity.map((id, i) => (
      <XPTag key={id.index} showingbelow="true">
        <WorkDetails>
          <CompanyLocation><strong>{id.FirstName}{id.LastName}</strong> in {id.Location}</CompanyLocation>
          <Info>{id.Intro}</Info>
        </WorkDetails>
      </XPTag>
    ));
  }
  render() {
    return (
      <SectionWrapper edited={this.state.show}>
        <ExperienceHead edited={this.state.show}>
          <p><strong>About me</strong></p>
          <Edit onClick={this.onClick} edited={this.state.show}>
            { this.state.show ?
              <div><I className="fa fa-times" aria-hidden="true" /></div>
              : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }
          </Edit>
        </ExperienceHead>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <AboutInput >
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
          </AboutInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Experiences >
          {this.addingXP()}
        </Experiences>
      </SectionWrapper>
    );
  }
}
