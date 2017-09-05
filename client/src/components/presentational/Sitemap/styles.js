import styled from 'styled-components';

export const SitemapWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    pading: 1em;

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

export const I = styled.i`
`;
