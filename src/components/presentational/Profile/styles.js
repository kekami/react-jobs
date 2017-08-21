import styled from 'styled-components';

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
    min-width: 65vw;
    max-width: 65vw;
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

    form {
        p {
            padding: 0.2em;
            color: grey;
        }
    }
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
        
    }

    @media (min-width: 60em) {
        flex-direction: row;
        justify-content: left;

        input {
            margin: 0;
            width: 25em;
        }
    }
`;

export const SocMediaInput = styled.div`
    display: flex;
    flex-flow: column wrap;
    
    div {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        padding: 0.1em;
        margin-top: 0.8em;
        margin-bottom: 0.8em;
        justify-content: space-between;
        align-items: center;
       

        label {
            min-width: 25%;
            padding: 0.2em;
        }

        input {
            margin-right: 5em;
            padding: 0.5em;
            min-width: 5em;
            
        }
    }
    

    @media (min-width: 1000px) {
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
export const Websites = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
`;
export const LinkTag = styled.div`
    display:flex;
    flex-flow: row wrap;   
    align-items: center;
    padding: 0.2em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;

   

    div {
        display: flex;
        font-size: 1em;
        min-height: 1.5em;
        min-width:1.5em;
        

        i {
            margin: 5;
            font-size: 1em;
        }
        p {
            min-width: 3em;
        }
    }

    @media (min-width: 700px) {
        div {
            font-size: 1.5em;
            min-height: 2em;
            min-width:2em;
            
    
            i {
                
                font-size: 1.6em;
            }
            p {
                margin-left: 2em;
                min-width: 4em;
            }
        }
    }

`;
export const I = styled.i`
    padding-right: 0.2em;

`;
