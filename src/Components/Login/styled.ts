import styled from "styled-components";

export const Div = styled.div`

    width: 16.6rem;
    height-max: 24rem;
    margin: 0 auto;
    padding: 1.8rem 1.4rem;

    background: #212529;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    form {
        
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

    }

    h3 {

        width: 2.5rem;
        height: 1.4rem;
        margin: 0 auto;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 0.8rem;

        color: #F8F9FA;

    }

    label {

        width: 100%;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;

        color: #F8F9FA;

    }

    input {

        width: 100%;
        height: 2.2rem;

        background: #343B41;

        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;

    }

    input:placeholder {

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        color: #F8F9FA;

    }

    button {

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 1.4rem;

        width: 16.25rem;
        height: 2.4rem;
        margin-top: 1.4rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 21px;

        color: #FFFFFF;

        background: #FF577F;

        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;

    }

    .btnEntrar {

        margin: 0;
        cursor: pointer;

    }

    .btnCadastrar {

        background: #868E96;
        border: #868E96;
        cursor: pointer;

    }

    button:hover {

        transition: 500ms;
        opacity: 0.5;
        border: solid 2px #F8F9FA;

    }

    button::active {

        opacity: 1;
        border: #F8F9FA;

    }

    div {

        margin-top: 1rem;

    }

    .mensage {

        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;

        color: #868E96;

    }

`

export const DivImg = styled.div`

    width: 100%;
    height: 1.6rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {

        width: 5.5rem;
        height: 100%;
        margin-bottom: 1rem;

    }

`