import styled from "styled-components";

export const Header = styled.header`

    width: 100%;
    height: 40.11px;
    padding: 0 1.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #343B41;
    border-radius: 3.20867px 3.20867px 0px 0px;

    h3 {

        width: 70%;
        height: 100%;
        margin: 0;

        display: flex;
        align-items: center;

        text-align: start;

    }

    .btn-Close {

        width: 14px;
        padding: 0;
        margin: 0;

        background: transparent;
        border: none;

        font-family: 'Nunito';
        font-size: 12px;

        color: #868E96;
        cursor: pointer;

    }
    
`

export const FormTecnologi = styled.form`

    input {

        border: none;
        padding: 0

    }

    select {

        width: 100%;
        height: 2.3rem;

        background: #343B41;

        border: none;
        border-radius: 3.20867px;

        color: #868E96;

    }

    button {

        margin: 2rem auto;
        cursor: pointer;

    }

`