import React, { Component } from 'react';
import { UpperSectionWrapper, PicWrapper, Avatar, PicUploader, ProgressSection, ProgressWrapper, ProgressBar } from './styles';

/* In this section I learnt how to dynamically change styles
 and pass them to the target component with the use of props utilising template:
-->> '${<enter referenced js variable>}<here add anything to concatenate the string you create' */

/* To make sure that HTML input/ browse button will fill parent's space:
- parent has to have position: relative;
- input tag has to have position absolute with top:0, left:0 (X,Y axis) and width&height of parent or 100% */
export class AvatarAndProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width100: 10,
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
        <PicWrapper>
          <Avatar src="/img/avatar.png" />
        </PicWrapper>
        <div>
          <PicUploader >
            <div>
              <input type="file" accept="image/png,image/jpeg" />
              Click here to upload a png or jpeg file here (max 10 MB). This picture will be visible to employers, so choose one that is a good representation of you!
            </div>
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
