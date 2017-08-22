import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { SectionWrapper, First2, Edit, Btn, Inputform, I, TagsForm, SkillTag, SkillHead } from './styles';


export class SkillSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      addSkill: '',
      tags: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }


  onClick() {
    this.setState({ show: !this.state.show });
  }
  deleteTag(index) {
    const tags = this.state.tags.filter((tag, i) => i !== index);
    this.setState({ tags });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTag = {
      title: this.state.inputValue,
      isShowing: true,
    };
    const tags = this.state.tags.concat(newTag);
    this.setState({
      tags,
      inputValue: '',
    });
  }

  addingTags() {
    return this.state.tags.map((tag, i) => (
      <SkillTag key={i} onClick={() => this.deleteTag(i)} showing={tag.isShowing}>
        <Btn>{tag.title} <I className="fa fa-times" aria-hidden="true" /></Btn>
      </SkillTag>
    ),
    );
  }

  render() {
    return (
      <SectionWrapper edited={this.state.show}>
        <First2>
          <SkillHead>
            <p><strong>Skills</strong> My important skills</p>
            <Edit onClick={this.onClick} edited={this.state.show}>
              { this.state.show ?
                <div><I className="fa fa-times" aria-hidden="true" /></div>
                : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }

            </Edit>
          </SkillHead>
          <Inputform style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={e => this.setState({ inputValue: e.target.value })}
              value={this.state.inputValue}
              placeholder="Type in a skill and hit Enter"
            />
          </Inputform>
          <TagsForm>
            {this.addingTags(this.state.addSkill)}
          </TagsForm>
        </First2>
      </SectionWrapper>
    );
  }
}
