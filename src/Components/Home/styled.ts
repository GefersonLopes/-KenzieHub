import styled from "styled-components";

export const Header = styled.header`

    width: 90%;
    height: 2.5rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {

        width: 6.6rem;
        height: 0.9rem;

    }

    button {

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;

        width: 55.49px;
        height: 32px;

        background: #212529;
        color: #F8F9FA;

        border: none;
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        cursor: pointer;

    }

    button:hover {

        opacity: 0.5;
        border: solid 1px #fff;

    }

`

export const Line = styled.div`

    width: 100%;
    height: 0.5px;

    margin-top: 1.5rem;

    background: grey;
    opacity: 0.2;

`

export const Main = styled.main`

    margin-top: 1.5rem;

    h1 {

        margin-left: 1.5rem;
            
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: #F8F9FA;

    }

    p {

        margin-left: 1.5rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        color: #868E96;

    }

`

export const Conteudo = styled.div`

    width: 70%;
    margin: auto;

    h1 {

        margin-left: 1.5rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: #F8F9FA;

    }

    p {

        margin-left: 1.5rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #FFFFFF;

    }

`