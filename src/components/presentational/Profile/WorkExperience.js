import React, { Component } from 'react';
import { SectionWrapper, ExperienceHead, Edit, I, ExperienceInput, XPTag, Experiences } from './styles';

export class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      experienceData: [],
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
    let experienceData = this.state.experienceData;
    const newXP = {
      index: 1,
      position: this.position.value,
      company: this.company.value,
      location: this.location.value,
      info: this.additionalInfo.value,
      isShowing: true,
    };
    experienceData = this.state.experienceData.concat(newXP);
    this.setState({ experienceData });
  }

  addingXP() {
    return this.state.experienceData.map((exp, i) => (
      <XPTag key={i} showingbelow="true">
        <div>I worked at {exp.position}</div>
      </XPTag>
    ));
  }
  render() {
    return (
      <SectionWrapper edited={this.state.show}>
        <ExperienceHead>
          <p><strong>Work Experience</strong> Previous and current positions</p>
          <Edit onClick={this.onClick} edited={this.state.show}>
            { this.state.show ?
              <div><I className="fa fa-times" aria-hidden="true" /></div>
              : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }
          </Edit>
        </ExperienceHead>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <ExperienceInput>
            <div className="form-group">
              <label>Position</label>
              <input
                name="position"
                ref={(input) => { this.position = input; }}
                type="text"
                placeholder="Front-end developer"
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                name="company"
                ref={(input) => { this.company = input; }}
                type="text"
                placeholder="e.g. Wexpose"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                name="location"
                ref={(input) => { this.location = input; }}
                type="text"
                placeholder="e.g. Warsaw, Poland"
              />
            </div>
            <div className="form-group">
              <label>Additional information (optional)</label>
              <input
                name="additionalInfo"
                ref={(input) => { this.additionalInfo = input; }}
                type="text"
              />
            </div>
          </ExperienceInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Experiences style={{ display: 'block' }}>
          {this.addingXP()}
        </Experiences>
      </SectionWrapper>
    );
  }
}
