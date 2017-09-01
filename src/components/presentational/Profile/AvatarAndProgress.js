import React, { Component } from 'react';
import { UpperSectionWrapper, PicUploader, ProgressSection, ProgressWrapper, ProgressBar } from './styles';

/* In this section I learnt how to dynamically change styles
 and pass them to the target component with the use of props utilising template:
-->> '${<enter referenced js variable>}<here add anything to concatenate the string you create' */

export class AvatarAndProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width100: 10,
      progress: '',
      // here you will find an implementation of technical background behind % bar
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const width100 = this.state.width100;
    if (width100 < 100) {
      this.setState({
        width100: (width100 + 10),
      });
    } else {
      this.setState({
        width100h: 10,
      });
    }
  }

  move() {
    const width100 = this.state.width100;
    return {
      width: `${width100}%`,
    };
  }

  render() {
    return (
      <UpperSectionWrapper>
        <div>Avatar will be here</div>
        <div>
          <PicUploader>
            Here you will be able to change your avatar
          </PicUploader>
        </div>
        <ProgressSection>
          <header>Your profile is <strong>{this.state.width100}%</strong> complete</header>
          <ProgressWrapper>
            <ProgressBar onClick={this.onClick} style={this.move()} />
          </ProgressWrapper>
        </ProgressSection>
        <div>
          <p>This is your profile that will represent you when you apply for jobs on Jobbatical. By submitting an application, you will make your profile visible to the company you’re applying to. Note that changes made here will also affect previously submitted applications.</p>
        </div>
      </UpperSectionWrapper>
    );
  }
}
