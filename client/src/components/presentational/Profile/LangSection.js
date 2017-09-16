import React, { Component } from 'react';
import { SectionWrapper, First2, Edit, Btn, Inputform, I, TagsForm, LangTag, LangHead } from './styles';

/* In section of Languages my goal was to create similar tags to those found in Skill Section.
Here is recap of the goals from SkillSection.js:
I wanted to make sure user can easily and intuitively add and remove any tag.
1. Every tag had to be generated based on user input and visibile right after submission (no delay).
2. The input field should stay hidden until user decides to add new tags.

I learnt how to use state (inputValue) of this component which updates on change of the input field.
Upon submission (enter) a function handling submit creates a new tag with submitted input value.
This tag is later added to the array [tags] stored in state and at the end inputValue is cleared.

Tags are added by mapping over tags array. Each tag is equipped with deleteTag() onClick handler.
This enables user to click on the tag (with visible 'x' button on it) and delete unwanted elements.
The deleteTag() function removes designated tag from the array after click and distinguishes between
them thanks to index number of every tag - it leaves tags which were not clicked untouched.
*/

export class LangSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
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
      <LangTag key={tag.title} onClick={() => this.deleteTag(i)} showing={tag.isShowing}>
        <Btn>{tag.title} <I className="fa fa-times" aria-hidden="true" /></Btn>
      </LangTag>
    ),
    );
  }

  render() {
    return (
      <SectionWrapper edited={this.state.show}>
        <First2>
          <LangHead edited={this.state.show}>
            <p><strong>Languages</strong> My languages</p>
            <Edit onClick={this.onClick} edited={this.state.show}>
              { this.state.show ?
                <div><I className="fa fa-times" aria-hidden="true" /></div>
                : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }

            </Edit>
          </LangHead>
          <Inputform style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={e => this.setState({ inputValue: e.target.value })}
              value={this.state.inputValue}
              placeholder="Type in a skill and hit Enter"
            />
          </Inputform>
          <TagsForm>
            {this.addingTags()}
          </TagsForm>
        </First2 >
      </SectionWrapper>
    );
  }
}
