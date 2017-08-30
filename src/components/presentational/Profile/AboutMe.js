import React, { Component } from 'react';
import { SectionWrapper, ExperienceHead, Click2AddWork, Edit, I, AboutInput, XPTag, SinceDate,YearsMonths, CompanyLocation, PostitionInCorp, Info, Dates, WorkDetails, Experiences, Company, Calendar } from './styles';

export class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [],
      positions: [],
      show: false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    const positions = this.state.positions;
    const updated = Object.assign({}, positions[index], { [name]: value });

    this.setState({
      positions: Object.assign([], positions, { [index]: updated })
    }); 
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitData();
  }

  submitData() {
  }

  addingXP() {
    return this.state.positions.map((exp, i) => (
      <XPTag key={i} showingbelow="true">
        <Dates>
          <SinceDate><strong>Since {exp['From-m']} / {exp['From-y']} </strong></SinceDate>
          <YearsMonths><strong> {exp.Length} months </strong></YearsMonths>  
        </Dates>
        <WorkDetails>
          <CompanyLocation>at <strong>{exp.Company}</strong> in {exp.Location}</CompanyLocation>
          <PostitionInCorp>{exp.Position}</PostitionInCorp>
          <Info>{exp.additionalInfo}</Info>
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
                  name="Company"
                  placeholder="e.g. Wexpose"
                  onChange={(e) => this.handleInputChange(e)}           
                />
                </div>
                <div className="form-group">
                  <label><strong>Last name</strong></label>
                  <input
                    type="text"
                    name="Location"
                    placeholder="e.g. Warsaw, Poland"
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>
            </Company>
            <div className="form-group">
              <label><strong>Living in</strong></label>
              <input
                type="text"
                name="Position"
                placeholder="e.g. Warsaw, Poland"
                onChange={(e) => this.handleInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label><strong>Introduction just a few words about me</strong></label>
              <input
                type="text"
                name="additionalInfo"
                onChange={(e) => this.handleInputChange(e)}
              />
            </div>
          </AboutInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Experiences style={{ display: this.state.show ? 'none' : 'block' }} >
          {this.addingXP()}
        </Experiences>
      </SectionWrapper>
    );
  }
}
