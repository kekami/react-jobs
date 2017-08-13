import styled from 'styled-components';
import { globalStyles } from '../globalStyles';

export const ProfileWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vh;
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
    
`;
export const Link = styled.a``;
export const Inputform = styled.form`
    display: flex;
    flex-direction: column;
    input {
        margin: 0;
        padding: 0.5em;
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

