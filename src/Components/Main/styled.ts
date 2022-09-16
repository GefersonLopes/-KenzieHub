import styled from "styled-components";

export const Content = styled.section`

    .tecnologiContainer {

        width: 80%;
        margin: 0 auto;
        margin-top: 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .titleTecnologi{

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 18px;

        color: #F8F9FA;

    }

    #btnAdd {

        height: 2rem;
        width: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        border :none;

        background: #1f1f1f;
        border-radius: 4px;
        cursor: pointer;
        
    }

    #btnAdd:hover {

        background-color: #000000;

    }
    
    #imgAdd {
        
        height: 10.562500953674316px;
        width: 10.722685813903809px;

    }

    ul {

        height-max: 28rem;
        width: 90%;
        margin: 0 auto;
        padding: 0.5rem 0;

        background: #1f1f1f;
        border-radius: 4px;

        overflow-y: scroll;

    }

    ul::-webkit-scrollbar {

        display: none;

    }

    .list_Content {

        display: flex;
        justify-content: space-between;

        width: 90%;
        height: 3rem;
        margin: 1.5rem auto;

        background: #121214;
        border-radius: 4px;

        list-style: none;

    }

    .list_Content:hover { 

        background: #343B41;

    }

    .titleList{
        
        height: 100%;
        
        display: flex;
        align-items: flex-start;
        justify-content: center;
        
        font-weight: 700;
        font-size: 14.21px;
        line-height: 22px;
        
        color: #F8F9FA;
        
    }
    h3{

        margin-left: 1rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.21px;
        line-height: 22px;

        color: #F8F9FA;

    }
    .container_Rigth{

        width: 8rem;
        height: 100%;
        margin-right: 1rem;

        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1.5rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;

        color: #868E96;

    }

    .btnRemoveItem {

        height: 1rem;
        width: 14px;

        background-color: transparent;
        border: none;
        cursor: pointer;
   
    }

    .imgRemoveItem {

        height: 0.8rem;
        width: 13px;

    }

    @media (max-width:468px) {
        .btnRemoveItem {

            display: none;

        }
    }

`