import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 1120px;
    margin-inline: auto;
    margin-block: 0 3.2rem;
    padding-inline: 4.8rem;

    .legendas {
        background: #eee;
        padding-inline: 2.4rem;
        padding-block: 5rem;
        .legendas__item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto 1fr;
            row-gap: 2.4rem;
            margin-block: 0 3.2rem;
            .title {
                grid-column: 1/3;
                text-align: center;
            }
            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img {
                    display: block;
                    width: 8rem;
                }
                span {
                    color: var(--light-grey);
                }
            }
            &:nth-child(4) {
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: 1.6rem;
                .title {
                    grid-column: 1/4;
                }
                .icon {
                    img {
                        width: 7rem;
                    }
                }
            }
        }
    }
    @media (min-width: 769px){

        .legendas {
            display: flex;
            align-items: center;
            gap: 2.4rem;
        }
    }
`;