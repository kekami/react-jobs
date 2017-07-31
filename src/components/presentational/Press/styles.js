import styled from 'styled-components';
import { globalStyles } from '../globalStyles.js';

export const Wrapper = styled.div`
    min-height: 100vh;    
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const H1 = styled.h1`
    margin: 20px 10px;
    font-size: 2rem;
    font-family: 'Khula', sans-serif;
`

export const Center = styled.div`
    text-align: center;
`

export const H3 = styled.h3`
    margin-top: 50px;
    color: ${globalStyles.bgColor};
    font-family: 'Days One', sans-serif;
`

export const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const CommentBox = styled.div`
    flex-basis: 200px;
    min-height: 200px;
    margin: 10px 20px;
    background-color: ${globalStyles.bgColor};
    border-radius: 5px;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CommentText = styled.p`
    margin-top: -10px;
`

export const QuoteAuth = styled.div`
    margin-top: 20px;
`

export const LogoWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
 
`

export const LogoBox = styled.div`
  flex-basis: 50%;
  min-height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoBox1 = LogoBox.extend`
`

export const LogoBox2 = LogoBox.extend`
    @media (min-width: 700px) {
    flex-basis: 200px;
  }
`

export const LogoBox3 = LogoBox.extend`
    @media (min-width: 700px) {
    flex-basis: 160px;
  }
`

export const LogoBox4 = LogoBox.extend`
    @media (min-width: 700px) {
    flex-basis: 160px;
  }
`

export const LogoBox5 = LogoBox.extend`
    @media (min-width: 700px) {
    flex-basis: 200px;
  }
`

export const LogoBox6 = LogoBox.extend`
    @media (min-width: 700px) {
    flex-basis: 200px;
  }
`