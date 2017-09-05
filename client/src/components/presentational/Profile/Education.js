import React, { Component } from 'react';
import { SectionWrapper, EducationHead, Click2AddEdu, Edit, I, EducationInput, EduTag, SinceDate, SchoolLocation, Degree, Info, Dates, EduDetails, Schools, WhatDegree, WhatUni, Calendar } from './styles';

// Convert length of > 12 months to ' X year and Y months'
// create an 'if' to stop people from setting illogical dates (start date is later than finish date)

/* After completing 'WorkExperience.js' this section was a breeze thanks to similarities it shares with the other section.

Here is the recap of WorkExperience.js:
This section of Jobbatical was the most difficult to mimic.
I learnt here about Object.assign, simple booleans to hide/show whole sections, handling dates and importance of keys/indexes.

The goal was to dynamically generate a set of input fields on each user click and based on those groups of input fields
create outputs and allow for every single output to be editable, chronological and in proper format.
All this with only one submit button. 
In other words: React controlled forms and I had a very combustive relationship.

Input group is generated based on the number of elements in input[] array. This array is being concat'd by every click
of 'Add work experience' button. Then anonymous function is mapping over this array and outputs desired number of input groups.
Every input group has a key and this is crucial part of keeping everything in order.

When user enters data an array of positions[] is populated with pairs in a designed format: 'index number of input group': 'Object of input names and values'. I used Object.assign here to create and merge new objects into the positions array.
Every time user fills in the input field a new key:value pair is created. Several of those pairs constitute the aforementioned 'object of input nmes and values'. This all constitutes a value of a particular key (index number of input group).
This makes sure that elements in the positions array held in state looks like this-> 
'0:{object with properties of particular work experience}'.

When user finally submits data, submit handler works on dates to calculate periods of work and figure out chronology (Length property) and order (isREcent property) of each entry. This is where I add to existing properties additional one 'isRecent'- a simple product of the end month and year of work experience indicating recency of the entry.

Function adding particular tags, first sorts all entries in the positions array according to 'isRecent' property, then maps over the array and outputs properly formatted tags.

*/


export class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [],
      schools: [],
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
    const schools = this.state.schools;
    const updated = Object.assign({}, schools[index], { [name]: value });

    this.setState({
      schools: Object.assign([], schools, { [index]: updated })
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

  eduLen(m1, y1, m2, y2) {//have to parseInt for every number
    m1 = parseInt(m1,10);
    m2 = parseInt(m2,10);
    y1 = parseInt(y1,10);
    y2 = parseInt(y2,10);
    return (((m2 + (12 * y2)) - (m1 + (12 * y1))));
  }

  submitData() {
      const schools = this.state.schools;
      let howLong = 0;
      let fresh = 0;
      let updated = {};
  
      this.state.schools.map((exp, i) => ( 
        howLong = this.eduLen(exp['From-m'], exp['From-y'], exp['To-m'], (exp['To-y'] || '2017')),
        fresh = parseInt((exp['To-y'] || '2017'), 10),
        updated = Object.assign(schools[i], { Length: howLong, isRecent: fresh, currentlyStudying: false }),
  
        this.setState({
          schools: Object.assign(schools, { [i]: updated }), 
        })
      ))
  }

  addingEdu() {
    return this.state.schools.sort(
      function(a,b) {
        return b.isRecent - a.isRecent;
      }
    ).map((exp, i) => (
      <EduTag key={i} showingbelow="true">
        <Dates>
          <SinceDate><strong>{ exp['From-y'] } - { exp['To-y'] }</strong></SinceDate> 
        </Dates>
        <EduDetails>
          <SchoolLocation>at <strong>{ exp.University }</strong> in { exp.Location }</SchoolLocation>
          <Degree>{ exp.Degree }, { exp.Field }</Degree>
          <Info>{ exp.additionalInfo }</Info>
        </EduDetails>
      </EduTag>
    ));
  }
  render() {
    
    return (
      <SectionWrapper edited={this.state.show}>
        <EducationHead edited={this.state.show}>
          <p><strong>Education </strong><span></span> Schools and courses</p>
          <Edit onClick={this.onClick} edited={this.state.show}>
            { this.state.show ?
              <div><I className="fa fa-times" aria-hidden="true" /></div>
              : <div>Edit <I className="fa fa-pencil" aria-hidden="true" /></div> }
          </Edit>
        </EducationHead>
        <Click2AddEdu onClick={this.addSection}>
          <I className="fa fa-plus-circle" aria-hidden="true" /> Add education
        </Click2AddEdu>
        <form action="" style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
          {this.state.inputs.map((key, index) =>

            (<div key={key}>

              <EducationInput>
                <WhatDegree>
                  <div className="form-group">
                    <label><strong>Degree or level of study</strong></label>
                    <input
                      type="text"
                      name="Degree"
                      placeholder="e.g. Masters degree"
                      onChange={(e) => this.handleInputChange(e, index)}           
                    />
                  </div>
                  <div className="form-group">
                    <label><strong>Field of study</strong></label>
                    <input
                      type="text"
                      name="Field"
                      placeholder="e.g. Software Engineering"
                      onChange={(e) => this.handleInputChange(e, index)}
                    />
                  </div>
                </WhatDegree>
                <WhatUni>
                  <div className="form-group">
                    <label><strong>University or school</strong></label>
                    <input
                      type="text"
                      name="University"
                      placeholder="e.g. MIT"
                      onChange={(e) => this.handleInputChange(e, index)}           
                    />
                  </div>
                  <div className="form-group">
                    <label><strong>Location</strong></label>
                    <input
                      type="text"
                      name="Location"
                      placeholder="e.g. Warsaw, Poland"
                      onChange={(e) => this.handleInputChange(e, index)}
                    />
                  </div>
                </WhatUni>
                <Calendar>
                  <div className="select group">
                    <label><strong>From</strong></label>
                    <div>
                      <select defaultValue="Year" name="From-y" className="form-control" onChange={(e) => this.handleInputChange(e,index) }>
                        <option disabled="disabled" >Year</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option>
                        </select>
                      
                    </div>
                  </div>
                  <div className="select group">
                    <label><strong>To</strong></label>
                    <div>
                      <select defaultValue="Year" name="To-y" className="form-control" /*disabled={this.props.disableDate[index]}*/ onChange={(e) => this.handleInputChange(e,index) }>
                        <option disabled="disabled" >Year</option> <option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option></select>
                        {/*<input type="checkbox" name="To-m" value={this.todaysDate(index)} onChange={(e) => this.handleInputChange(e,index) }/> I currently work here*/}
                    </div>
                  </div>
                </Calendar>
                <div className="form-group">
                  <label><strong>Additional information (optional)</strong></label>
                  <input
                    type="text"
                    name="additionalInfo"
                    onChange={(e) => this.handleInputChange(e, index)}
                    style={{ height: '100px' }}
                  />
                </div>
              </EducationInput>
            </div>
            ))}
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
        <Schools style={{ display: this.state.show ? 'none' : 'block' }} >
          {this.addingEdu()}
        </Schools>
      </SectionWrapper>
    );
  }
}
