import React, { Component } from 'react';
import { SectionWrapper, AboutMeHead, AboutMeBody, Edit, I, AboutMeInput, Company } from './styles';

/* In this section I had to create a few input fields and their corresponding output elements.
User should be able to add his name, surname, location and short introduction.

I used pattern from LinkSection and used refs and their corresponding fields to present user inputs.
All input fields deliver submitted change to state from which presentational component draws data.
*/

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

  componentWillMount() {
    window.scrollTo(0, 0);
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
      <SectionWrapper edited={this.state.show} style={{ backgroundColor: '#FAFAFA' }} >
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
            <p id="names">{this.state.FirstName} {this.state.LastName}</p>
            <div><strong>Living in</strong></div>
            <p id="location">{this.state.Location}</p>
            <div><strong>Introduction </strong> <span>Just a few words about me</span> </div>
            <p id="introduction">{this.state.Intro}</p>
          </div>
        </AboutMeBody>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          <AboutMeInput >
            <Company>
              <div className="form-group">
                <label htmlFor="firstName"><strong>First Name</strong>
                  <input
                    id="firstName"
                    type="text"
                    name="FirstName"
                    placeholder="e.g. John"
                    ref={(input) => { this.FirstName = input; }}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="lastName"><strong>Last name</strong>
                  <input
                    id="lastName"
                    type="text"
                    name="LastName"
                    placeholder="e.g. Galt"
                    ref={(input) => { this.LastName = input; }}
                  />
                </label>
              </div>
            </Company>
            <div className="form-group">
              <label htmlFor="location"><strong>Living in</strong>
                <input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="e.g. Warsaw, Poland"
                  ref={(input) => { this.Location = input; }}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="introduction"><strong>Introduction just a few words about me</strong>
                <input
                  id="introduction"
                  type="text"
                  name="intro"
                  ref={(input) => { this.Intro = input; }}
                />
              </label>
            </div>
          </AboutMeInput>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
      </SectionWrapper>
    );
  }
}
