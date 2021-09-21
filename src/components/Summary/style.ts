import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);  // Repete 3 vezes o 1fr
    gap: 2rem;                             //espaçamento entre os elemntos do grid
    margin-top: -10rem;                   //para começar mais para cima

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: block;
            align-items: center;
            justify-content: space-between;
        }
        strong {
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &.highlight-background{
            background: var(--green);
            color: #ffffff;
        }
    }
`