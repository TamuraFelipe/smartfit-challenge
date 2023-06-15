import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    padding-inline: 4.8rem;
    margin-inline: auto;
    margin-block: 0 3.2rem;
    
    > .form {
        margin-inline: auto;
        border: 3px solid #eee;
        border-radius: .8rem;
        padding: 1.6rem;

        .form__title {
            display: flex;
            align-items: center;
            gap: .8rem;
            img {
                width: 4rem;
            }
            span {
                color: var(--light-grey);
            }
        }
        .form__question {
            width: 100%;
            border-bottom: 1px solid #eee;
            padding-bottom: 1.6rem;
            margin-block: 3.2rem;
            span {
                font-size: 3.2rem;
                color: var(--light-grey);
            }
        }
        .radio-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2.4rem;
            padding-bottom: 1.6rem;
            border-bottom: 1px solid #eee;
            label {
                display: flex;
                align-items: center;
                column-gap: .8rem;
                input[type='radio']:checked + .custom-radio {
                    border-color: var(--yellow);
                }
                input[type='radio']:checked + .custom-radio span {
                    background: var(--yellow);
                }
                .custom-radio {
                    border: 1px solid var(--light-grey);
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .custom-radio, span {
                    transition: 0.5s ease;
                    color: var(--light-grey);
                }
                .custom-radio span {
                    content: '';
                    width: 1.4rem;
                    height: 1.4rem;
                    background: #fff;
                    border-radius: 50%;
                }
            }
            
            span {
                color: var(--light-grey);
            }
        }
        .checkbox-container {
            margin-bottom: 2.4rem;
            padding-bottom: 1.6rem;
            label {
                display: flex;
                align-items: center;
                column-gap: .8rem;
                margin-bottom: 1.6rem;
                input[type='checkbox']:checked + .custom-checkbox {
                    border-color: var(--yellow);
                }
                input[type='checkbox']:checked + .custom-checkbox span {
                    background: var(--yellow);
                }
                .custom-checkbox {
                    border: 1px solid var(--light-grey);
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: .2rem;
                }
                .custom-checkbox, span {
                    transition: 0.5s ease;
                    color: var(--light-grey);
                }
                .custom-checkbox span {
                    content: '';
                    width: 1.4rem;
                    height: 1.4rem;
                    background: #fff;
                    border-radius: .2rem;
                }
            }
            span {
                color: var(--light-grey);
                strong {
                    font-size: 2rem;
                }
            }
        }
        .btn-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 2.4rem;
        }
    }

    @media (min-width: 769px){

        .form {

            .btn-container {
                flex-direction: row;
            }
        }
    }
`;

