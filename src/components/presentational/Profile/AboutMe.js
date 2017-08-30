import React, { Component } from 'react';
import { SectionWrapper, ExperienceHead, Click2AddWork, Edit, I, ExperienceInput, XPTag, SinceDate,YearsMonths, CompanyLocation, PostitionInCorp, Info, Dates, WorkDetails, Experiences, Company, Calendar } from './styles';

// Convert length of > 12 months to ' X year and Y months'
// create an 'if' to stop people from setting illogical dates (start date is later than finish date)

export class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [],
      positions: [],
      show: false,
      //disableDate: [],
    };

    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    const inputs = this.state.inputs;
    this.setState({
      inputs: inputs.concat(inputs.length),
      show: true,
    });
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

  todaysDate(index) {
    var d = new Date();
    var n = d.getMonth();
    this.checked(index);
    return n+1;
  }

  checked(i) {//this function was supposed to change a state (or add property pair dynamically) so that based on this state I can add props to the two select elements (month, year) and disable them. if ticked - disable date picker, untick - enable date picker.
    //maybe create an entry with key(index): false/true when clicked the checkbox - basing on this prop 'disabled' of datepicker will hide/show date picker
  //const disableDate = this.state.disableDate;
  
 /*this.setState({
    disableDate: {i:true}
  });*/

}

  onClick() {
    this.setState({ show: !this.state.show });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitData();
  }

  workLen(m1, y1, m2, y2) {//have to parseInt for every number
    m1 = parseInt(m1,10);
    m2 = parseInt(m2,10);
    y1 = parseInt(y1,10);
    y2 = parseInt(y2,10);
    return (((m2 + (12 * y2)) - (m1 + (12 * y1))));
  }

  submitData() {
      const positions = this.state.positions;
      let howLong = 0;
      let fresh = 0;
      let updated = {};
  
      this.state.positions.map((exp, i) => ( 
        howLong = this.workLen(exp['From-m'], exp['From-y'], exp['To-m'], (exp['To-y'] || '2017')),
        fresh = (12*(parseInt((exp['To-y'] || '2017'), 10)) + parseInt((exp['To-m']),10)),
        updated = Object.assign(positions[i], { Length: howLong, isRecent: fresh, currentlyWorking: false }),
  
        this.setState({
          positions: Object.assign(positions, { [i]: updated }), 
        })
      ))
  }

  addingXP() {
    return this.state.positions.sort(
      function(a,b) {
        return b.isRecent - a.isRecent;
      }
    ).map((exp, i) => (
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
        <form action="" onSubmit={this.handleSubmit}>
          <ExperienceInput>
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
          </ExperienceInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Experiences style={{ display: this.state.show ? 'none' : 'block' }} >
          {this.addingXP()}
        </Experiences>
      </SectionWrapper>
    );
  }
}
