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
    background-color: #E1D6D6;
`;

export const ProfileContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 2em;
`;

export const ProfileNav = styled.div``;
export const ProgressBar = styled.div`
   
`;
export const SectionWrapper = styled.div`
    margin: 3em;
    background-color:#eee;
    padding: 2em;
`;
export const SectionHead = styled.div`
    padding: 1em;
    
`;
export const First2 = styled.div`
    div {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
`;
export const Btn = styled.button`
    background-color:#eee;
    border: none;
`;
export const Edit = styled.button`
    padding: 0.4em;
    background-color:#eee;
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
    background-color: ${globalStyles.DARKGREY};
    color: black;
    padding: 5px;
    margin: 5px 10px 5px 0px;
    font-size: 0.8rem;
    border: solid 2px #fff;
    border-radius: 5px;
`;
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
export const I = styled.i`
    padding-right: 0.2em;
`;
