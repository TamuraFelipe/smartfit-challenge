import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
`;

export const BoxLogo = styled.div`
    width: 100%;
    padding-block: 3.2rem;
    background: #000;
`;

export const Image = styled.img`
    display: block;
    width: 50%;
    margin-inline: auto;
    @media (min-width: 769px){
        width: 15%;
    }
`;

export const Intro = styled.div`
    width: 100%;
    max-width: 1120px;
    
    margin-inline: auto;
    margin-block: 0 3.2rem;
    padding-inline: 4.8rem;

    > h1 {
        text-transform: uppercase;
        font-size: 4rem;
        color: var(--dark-grey);
        margin-top: 6rem;

        &::after {
            content: "";
            width: 30%;
            height: 10px;
            display: block;
            background: var(--dark-grey);
            margin-top: 1.6rem;
        }
    }
    > p {
        font-size: 1.6rem;
        margin-top: 3.2rem;
        line-height: 1.5;
    }
`;