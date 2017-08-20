import styled from 'styled-components';
import { globalStyles } from '../globalStyles';

export const ProfileWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #DDEDF5;
`;

export const ProfileContainer = styled.div`
    margin: auto;
    min-width: 75vw;
    max-width: 75vw;
    background-color: #fff;
    border-radius: 10px;
    padding: 2em;
`;

export const ProfileNav = styled.div``;
export const ProgressBar = styled.div`
   
`;
export const SectionWrapper = styled.div`
    margin: 3em;
    background-color: ${props => props.edited ? '#FAFAFA' : ' white'};
    padding: 2em;
    border: ${props => props.edited ? 'solid 1px #DDEDF5' : 'none'};
`;
export const SectionHead = styled.div`
    padding: 1em;
    
`;
export const First2 = styled.div`
 
`;
export const SkillHead = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const LangHead = styled(SkillHead)``;
export const LinkHead = styled(SkillHead)``;

export const Btn = styled.button` 
    border: none;
`;
export const Edit = styled.button`
    padding: 0.4em;
    background-color: ${props => props.edited ? '#FAFAFA' : ' white'};
    border: none;
    cursor: pointer;
`;
export const Link = styled.a``;
export const TagsForm = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const SkillTag = styled.p`
    display: ${props => props.showing ? 'inline-block' : 'none'};
    background-color: #E1D6D6;
    color: black;
    padding: 10px;
    margin: 5px 10px 5px 0px;
    font-size: 0.8rem;
    border: solid 2px #EEE;
    border-radius: 5px;
`;

export const LangTag = styled(SkillTag)``;
export const Inputform = styled.form`
    display: flex;
    flex-direction: column;
    input {
        margin: 0;
        padding: 0.5em;
        min-width: 50vw;
    }

    @media (min-width: 50em) {
        flex-direction: row;
        justify-content: left;

        input {
            margin: 0;
            width: 25em;
        }
    }
`;
export const InputformLink = styled.form`

  
`;
export const SocMediaInput = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    width:inherit;
    
    div {
        input {
            margin: 0;
            padding: 0.5em;
            min-width: 50%;
        }
    }
    

    @media (min-width: 50em) {
        flex-direction: row;
        justify-content: left;

        input {
            margin: 5;
            width: 25em;
        }
    }


`;
export const Label = styled.label`
    min-width:15em;
    align-self: center;
`;
export const Websites = styled.div``;
export const LinkTag = styled.div`
    border: solid 1px white;
`;
export const I = styled.i`
    padding-right: 0.2em;
`;
