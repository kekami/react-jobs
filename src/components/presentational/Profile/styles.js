import styled from 'styled-components';

/* Start of General Profile styling */
export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #DDEDF5;
`;
export const ProfileContainer = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 25px;
    margin: auto;
    min-width: 100vw;
    margin-top: 4em;
    margin-bottom: 2em;

    @media (min-width: 500px) {   
        min-width: 90vw;
        max-width: 90vw;
        padding: 0em 1.5em 1.5em 1.5em ;
    }

    @media (min-width: 650px) {   
        min-width: 80vw;
        max-width: 80vw;
        padding: 0em 2em 2em 2em ;
    }

    @media (min-width: 800px) {   
        min-width: 70vw;
        max-width: 70vw;
        padding: 0em 3em 3em 3em ;

    }
`;
/* End of General Profile styling */
/* Start of Profile Navigation styling */
export const NavWrapper = styled.div`

    nav {
        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0;

            li {
                display: block;
                text-align: center;
                font-size: 0.9em;
                width: 50%;
                padding: 0;
                
                a {
                    display: block;
                    text-decoration: none;
                    padding: 1em 0em;
                }
                a:first-of-type {
                    color: #1c75bc;
                }

            }
        }
    }
`;
/* End of Profile Navigatoin styling */

/* Start of the upper part of the Profile styling */
export const UpperSectionWrapper = styled.div`
    maring: auto;
    border-bottom: none;
    @media (min-width: 650px) { 
        margin: 0.7em; 
        padding: 1em;
    }
    @media (min-width: 1000px) {
        margin: 1em;
        padding: 1.2em;
    }
    header {
        font-size: 1.2em;
        padding: 2em 0em 2em 0em;
        text-align: center;
        color: #04d092;

        strong {
            color: #9b9b9b;
        }

    }
    div {
        text-align: center;
    }
    p {
        text-align: center;
        line-height: 2em;
        font-size: 0.9em;

        @media(min-width:1000px) {
            padding: 1em 2.5em 0em 2.5em;
        }
        
    }
`;
export const PicWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin:auto;
    justify-content: center;

`;
export const Avatar = styled.div`
    border-radius:50%;
    background-color: white;
    border: dashed 2px black;
    width: 160px;
    height: 160px;
    padding: 20px;
    z-index:4;

    @media(min-width:1000px){
        margin-top: -140px;
        margin-bottom: -70px;
    }
`;
export const PicUploader = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 2px dashed #04d092;
    border-radius: 10px;
    justify-content: center;

    div {

        padding: 1.4em 0.2em 1.4em 0.2em;
        line-height: 1.7em;
        margin: auto;
        display: flex;
        font-size: 0.85em;
        position: relative;


        
        input {        
            display:inline-block;
            position: absolute;
            opacity: 0;
            cursor: pointer;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            align-items: baseline;
            text-align: start;
                
        }


        @media(min-width:800px){
            z-index:0;
            max-width: 65%;
           
        }
        
    }
`;

export const ProgressSection = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-items: center;
`;

export const ProgressWrapper = styled.div`
    width: 100%;
    background-color: #f0b14a;
    border-radius: 8px
    
    
`;
export const ProgressBar = styled.div`
    height: 8px;
    background-color: #04d092;
    border-radius: 8px
    ;
`;
/* End of the upper part of the Profile styling */
/* Start of General Section styling */
export const SectionWrapper = styled.div`
    background-color: ${props => (props.edited ? '#FAFAFA' : ' white')};
    border: ${props => (props.edited ? 'solid 1px #DDEDF5' : 'none')};
    border-bottom: solid 1px ${props => (!props.edited ? '#DDEDF5' : 'none')};
    marging: auto;
    form {
        padding: 1em;
        
        p {
            color: grey;
        }
        button {
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
            cursor: pointer;
            background-color: #04d092;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;

            &:hover {
                background-color: #9b9b9b;
            }
        }
    }

    @media (min-width: 650px) { 
        margin: 0.7em; 
        padding: 1em;

        form {
            p {
                padding: 0.2em;
            }
        }
    }

    @media (min-width: 1000px) {
        margin: 1em;
        padding: 1.2em;
    }
`;
export const SectionHead = styled.div`
    padding: 1em;  
`;
export const Btn = styled.button` 
    border: none;
    outline:none;
    background-color: #eee;
`;
export const Edit = styled.button`
    padding: 0.4em;
    background-color: inherit;
    border: none;
    cursor: pointer;
    color: #04d092;
    outline:none;
`;
export const I = styled.i`
    padding-right: 0.2em;
`;
/* End of General Section styling */

/* Start of Skills and Languages Sections styling */
export const First2 = styled.div`
 
`;
export const SkillHead = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
    color: #9b9b9b;
    
    strong {
        color: black;
        font-size: 1.3em;
        padding-right: 0.9em;

    }
    
`;
export const LangHead = styled(SkillHead)``;
export const LinkHead = styled(SkillHead)``;
export const Link = styled.a``;
export const TagsForm = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 1em;
`;
export const SkillTag = styled.p`
    display: ${props => (props.showing ? 'inline-block' : 'none')};
    background-color: #eee;
    color: black;
    padding: 10px;
    margin: 5px 10px 5px 0px;
    font-size: 0.8rem;
    border: solid 2px #EEE;
    border-radius: 5px;
`;
export const LangTag = styled(SkillTag)``;

/* Start of Links Section styling */
export const Inputform = styled.form`
    display: flex;
    flex-direction: column;
    input {
        width: 100%;
        margin: 0;
        padding: 0.5em;
        
    }

    @media (min-width: 800px) {
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    display:flex;
    flex-flow: row wrap;   
    align-items: center;
    padding: 0.2em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;

    div {
        display: flex;
        padding: 0.2em;
        font-size: 1em;
        min-height: 1.5em;
        min-width:1.5em;
        margin: 0.5em;

        i {
            font-size: 1em;
        }
        
    }

    p {
        margin-left: 1em;
        a {
            text-decoration: none;
        }
    }

    @media (min-width: 700px) {
        div {
            display: flex;
            font-size: 1.5em;
            min-height: 2em;
            min-width:2em;
            
    
            i {
                
                font-size: 1.5em;
            }
            
        }
        p {
            margin-left: 2em;
            min-width: 4em;
        }
    }

`;
/* Start of Experience Section styling */

export const ExperienceHead = styled(LinkHead)``;
export const Click2AddWork = styled.div`
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    width: inherit;
    cursor: pointer;
    padding: 1em;
    background-color: #04d092;
    color: white;

    I {
        color: white;
        padding: 0.2em;
    }

    &:hover {
        background-color: white;
        color: #04d092;

        I {
            color: #04d092;
            padding: 0.2em;
        }
    }

`;
export const ExperienceInput = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 1em;
    border-bottom: solid 1px #04d092;

    div {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        padding: 0.1em;
        margin-top: 0.4em;
        margin-bottom: 0.4em;      
        width: 100%;  

        label {
            min-width: 25%;
            padding: 0.2em;

        }

        input {
            margin-right: 5em;
            padding: 0.5em;
            width: 100%;

            @media (min-width: 800px) {
                width: 100%;
            }     
        }
    }
`;
export const Company = styled.div`
    display: flex;
    flex-flow: row wrap;

    div {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        margin-top: 0.4em;
        margin-bottom: 0.4em;
        width:100%;

        input {
            width: 100%;

            @media (min-width: 800px) {
                width: 100%;
            }
        } 

        @media (min-width: 800px) {        
            width: 50%;
        }
    }
`;
export const Calendar = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    width: 100%;
    
    div {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-flow: column no-wrap;
        margin-top: 0.4em;
        margin-bottom: 0.4em;
        width: 100%;

        @media (min-width: 800px) {
            width: 50%;
        }

        label {
            width: 100%

            @media (min-width: 800px) {
                width: 75%;
        
            }
        } 
        div {
            display: flex;
            flex-flow: row no-wrap;
            width:100%;
            
            select {
                padding:0.1em;
                margin-right: 0.2em;
                font-size: 1.1em;
                width: 38%;
            }
        }
    }
`;
export const Experiences = styled(Websites)``;
export const XPTag = styled.div`
    width: 100%;
    display:flex;
    flex-flow: row wrap;   
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: solid 1px #DDEDF5;

`;

export const Dates = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    width:100%;

    @media (min-width: 800px) { 

        width: 35%;
    }
`;
export const WorkDetails = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    width:100%;

    @media (min-width: 800px) { 
       
        width: 65%;
    }
`;
export const SinceDate = styled.p`
    margin: 0;
    padding-bottom: 0.4em;
    width: 100%;
    color: #1c75bc;  
`;
export const YearsMonths = styled(SinceDate)`
    color: #9b9b9b;
`;

export const CompanyLocation = styled.p`
    color: #9b9b9b;
    margin: 0;
    padding: 0;
    width: 100%;
`;
export const PostitionInCorp = styled.p`
    margin: 0;
    padding-top: 0.7em;
    width: 100%;
    font-size: 1.4em;
`;
export const Info = styled.p`
    margin: 0;
    padding-top: 0.8em;
    width: 100%;
`;


/* Start of Education Section styling */
export const EducationHead = styled(ExperienceHead)``;
export const EducationInput = styled(ExperienceInput)``;
export const Click2AddEdu = styled(Click2AddWork)``;
export const EduTag = styled(XPTag)``;
export const EduDetails = styled(WorkDetails)``;
export const SchoolLocation = styled(CompanyLocation)``;
export const Degree = styled(PostitionInCorp)``;
export const Schools = styled(Experiences)``;
export const WhatDegree = styled(Company)``;
export const WhatUni = styled(Company)``;

/* Start of About Me Section styling */
export const AboutMeHead = styled(ExperienceHead)``;
export const AboutMeBody = styled.div`
    display: flex;
    flex-flow: column no-wrap;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;

    div {
        font-size: 0.95em;
        
        span {
            color: #9b9b9b;
            padding-left: 0.8em;
        }
    }
    
    p:not(:last-child) {
        font-size: 1.5em;
    }
`;
export const AboutMeInput = styled(ExperienceInput)`
    border-bottom: none;
`;
/* End of About Me Section styling */
