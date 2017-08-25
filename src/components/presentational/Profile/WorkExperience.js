import React, { Component } from 'react';
import { SectionWrapper, ExperienceHead, Edit, I, ExperienceInput, DatePicker, XPTag, Experiences } from './styles';


// Add option 'still working' to auto 'GET DATE' and pass it to the newXP object
// Sort XP Tags according to their chronology
// Allow for multiple XPTags to be added (clickable 'add experience')
export class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [1,2,3],//for now an array instead of 'click2create new input'
      position: "",
      company: '',
      positions: [],
      experienceData: [],
      newArr: [],
      show: false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange =  (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    const positions = this.state.positions;
    const updated = Object.assign({}, positions[index], { [name]: value });

    this.setState({
      positions: Object.assign({}, positions, { [index]: updated }),
      experienceData: Object.assign([], positions, { [name]: value})
    });

    
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.submitData();
  }

  submitData() {//this function is not useful now - newArr is always creating 2 obj instead of 1 - 
    const experienceData = this.state.experienceData;
    const positions = this.state.positions;
    const newArr = this.state.newArr;
    for (var key in experienceData)
      {
        var element = {};
        element[key] = experienceData[key];
        newArr.push(element);
      }
    this.setState({
      newArr
    })
    
  }

  addingXP() {
    return this.state.experienceData.map((exp, i) => (
      <XPTag key={i} showingbelow="true">
        <div>I worked as {exp.Position} in {exp.Company}</div>
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
          {this.state.inputs.map((key, index) =>

            (<div key={key}>

              <ExperienceInput>
                <div className="form-group">
                  <label>Position{this.state.inputs[key]}</label>
                  <input
                    type="text"
                    name='Position'
                    value={this.state.position[key]}
                    onChange={(e) => this.handleInputChange(e, index)}
                  />
                </div>
                <div className="form-group">
                  <label>Company{this.state.inputs[key]}</label>
                  <input
                    type="text"
                    name="Company"
                    value={this.state.company[key]}
                    onChange={(e) => this.handleInputChange(e, index)}           placeholder="e.g. Wexpose"
                  />
                </div>
              </ExperienceInput>

            </div>))}
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Experiences style={{ display: 'block' }}>
          {this.addingXP()}
        </Experiences>
      </SectionWrapper>
    );
  }
}
