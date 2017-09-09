import styled from 'styled-components';

export const SitemapWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;

    @media(min-width:1000px) {
        padding: 90px;
    }  
`;

export const Column = styled.div`
    width: 100%;
    padding: 15px;
    flex-wrap: wrap;
    flex: 1 1 250px (minimum width);

    @media(min-width:500px){
        width:50%;
    }

    @media(min-width: 1000px) {
        width: 25%;
    }

`;
export const Header = styled.header`
    border-bottom: #dddddd solid 1px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    font-size: 0.8em;

`;
export const FlexCol = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;

    a {
        flex-direction: row;
        text-decoration: none;
        color: #839496;
        font-size: 0.8em;
        padding-top: 25px;
        padding-bottom: 25px;
        &:hover {
            color: #000;
        }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -7px;
    }
`;

export const Fb = styled.i`
    color: #3b5998;
`;

export const Ln = styled.i`
    color: #08669c;
`;

export const Twitter = styled.i`
    color: #10a9e2;
`;

export const GPlus = styled.i`
    color: #dd5044;
`;

export const InstagramBackground = styled.span`
    width: calc(2em - 3px);
    height: calc(2em - 3px);
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    border-radius: 25%;
    position: relative;
`;

export const Instagram = styled.i`
    color: white;
    transform: scale(0.8) translateY(-2px);
`;

