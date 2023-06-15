import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding-inline: 4.8rem;
    margin-block: 0 3.2rem;

    .cards {
        max-width: 1120px;
        margin-inline: auto;
        .card__item {
            background: #eee;
            border-radius: .8rem;
            box-shadow: 0 0 5px #aaa;
            padding: 2.4rem;
            width: 100%;
            height: 475px;
            margin-bottom: 3.2rem;

            .status {
                font-weight: bold;
                margin-bottom: 1.6rem;
                display: block;
            }
            .status--open {
                color: var(--green);
            }
            .status--fechado {
                color: var(--red);
            }
            .unidade {
                font-size: 3.2rem;
                font-weight: bold;
                color: var(--dark-grey);
                margin-bottom: 1.6rem;
            }
            .endereco {
                color: var(--dark-grey);
                margin-bottom: 1.6rem;
            }
            .icons {
                border-top: 1px solid #ddd;
                padding-block: 1.6rem 0;
                margin-bottom: 3.2rem;
                img {
                    width: 6rem;
                }
            }
            .horarios {
                .dia {
                    display: block;
                    font-size: 2.4rem;
                    color: var(--dark-grey);
                    margin-bottom: 1.6rem;
                }
                .horas {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1.6rem;
                }
            }
        }
    }
    @media (min-width: 769px) {

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding-inline: 4.8rem;
            gap: 2.4rem;
        }
    }
`;