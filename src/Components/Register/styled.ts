import styled from "styled-components";

export const Main = styled.main`
    position: relative;
`;

export const DivCadastrar = styled.div`
    width: 16.6rem;
    height-max: 39rem;
    margin: 1rem auto;
    padding: 1.8rem 1.4rem;

    background: #212529;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    form {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h3 {
        height: 1.4rem;
        margin: 0 auto;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 0.8rem;

        color: #f8f9fa;
    }

    .message {
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;

        color: #868e96;
    }

    label {
        width: 100%;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;

        color: #f8f9fa;
    }

    input {
        width: 100%;
        height: 2rem;

        background: #343b41;

        border: none;
        border-radius: 3.20867px;
    }

    input:placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        color: #f8f9fa;
    }

    input::-ms-reveal {
        display: none;
    }

    .inputContainer {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        position: relative;
    }

    .errorMessage {
        transition: 0.5s ease;

        position: absolute;
        bottom: -1.05rem;
        left: -2rem;

        color: #ff577f;
        opacity: 0;
    }

    .inputContainer:hover > .errorMessage {
        opacity: 1;
        left: 0rem;
    }

    .errorSvg {
        width: 10%;
        height: 100%;

        position: absolute;
        right: 1rem;

        color: #ff577f;

        cursor: pointer;
    }

    select {
        width: 100%;
        height: 2rem;

        background: #343b41;

        border: none;
        border-radius: 3.20867px;

        color: #868e96;
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

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 21px;

        color: #ffffff;

        background: #ff577f;

        border: 1.2182px solid #ff577f;
        border-radius: 4.06066px;
        cursor: pointer;
    }

    .btnRegister {
        background: #59323f;
        border: #59323f;
        cursor: pointer;
    }

    button:hover {
        transition: 500ms;
        opacity: 0.5;
        border: solid 2px #f8f9fa;
    }

    button::active {
        opacity: 1;
        border: #f8f9fa;
    }

    div {
        margin-top: 1rem;
    }
`;

export const DivImgCadastrar = styled.div`
    width: 18rem;
    height: 1.6rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
        width: 5.5rem;
        height: 0.8rem;
    }

    button {
        width: 79.54px;
        height: 31.95px;
        margin-top: 1rem;
        margin-bottom: 1.2rem;

        background: #212529;
        color: #f8f9fa;
        border: none;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 9.59437px;
        line-height: 23px;

        text-align: center;
        cursor: pointer;
    }

    button:hover {
        transition: 500ms;
        opacity: 0.5;
        border: solid 2px #f8f9fa;
    }

    button::active {
        opacity: 1;
        border: #f8f9fa;
    }
`;

export const Fetch = styled.div`
    transition: 1.5s;

    position: fixed;
    top: 0;

    width: 286px;
    height: 69px;
    margin: 1rem;

    background: #343b41;
    border-radius: 4px;

    button {
        position: absolute;
        top: 0;

        width: 98%;
        margin-top: 10px;

        display: flex;
        justify-content: flex-end;

        cursor: pointer;

        border: none;
        background-color: transparent;
    }

    .container-card {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        width: 25px;
        height: 25px;
        margin-left: 0.3rem;
    }

    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        color: #f8f9fa;
    }

    .color-green {
        position: absolute;
        bottom: 0;

        width: 206px;
        height: 6px;

        background: #3fe864;
        border-radius: 0px 0px 0px 4px;
    }
`;

export const Error = styled.div`
    transition: 1.5s;

    position: fixed;
    top: 0;

    width: 286px;
    height: 69px;
    margin: 1rem;

    background: #343b41;
    border-radius: 4px;

    button {
        position: absolute;
        top: 0;

        width: 98%;
        margin-top: 10px;

        display: flex;
        justify-content: flex-end;

        cursor: pointer;

        border: none;
        background-color: transparent;
    }

    .container-card {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        width: 25px;
        height: 25px;
        margin-left: 0.3rem;
    }

    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        color: #f8f9fa;
    }

    .color-red {
        position: absolute;
        bottom: 0;

        width: 206px;
        height: 6px;

        background: #e83f5b;
        border-radius: 0px 0px 0px 4px;
    }
`;
