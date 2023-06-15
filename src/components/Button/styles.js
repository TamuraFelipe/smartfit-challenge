import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-width: 40rem;
    display: block;
    padding: 1rem 2.4rem;
    margin-block: 0 1.6rem;
    font-size: 2.4rem;
    font-weight: bold;
    border-radius: .8rem;
    border: 1px solid ${({ btnStyle }) => btnStyle === "yellow" ? "#FFB612" : "#808080" };
    background: ${({ btnStyle }) => btnStyle === "yellow" ? "#FFB612" : "white" };

    
`;