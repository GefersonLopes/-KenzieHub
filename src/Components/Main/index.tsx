import add from "../imgComponents/home/add.png";
import removeItem from "../imgComponents/home/removeItem.png";

import { Content } from "./styled";
import { Context } from "../../Context/Auth";

import { useContext } from "react";
import { CreateTecnology } from "../CreateTecnology";

export function ContentMain() {
  const {
    techsList,
    RemoveTech,
    modalTrue,
    LeadTechs,
    
  } = useContext(Context);

  LeadTechs();

  return (
    <>
      <CreateTecnology />
      <Content>
        <div className="tecnologiContainer">
          <h3 className="titleTecnologi">Tecnologias</h3>
          <button onClick={modalTrue} id="btnAdd">
            <img id="imgAdd" src={add} alt="adicionar" />
          </button>
        </div>
        {techsList && techsList.length > 0 && (
          <ul>
            {techsList.map((tech) => (
              <li id={`${tech.id}`} key={`${tech.id}`} className="list_Content">
                <h3 className="title_List">{tech.title}</h3>
                <div className="container_Rigth">
                  <p>{tech.status}</p>
                  <button id={`${tech.id}`}
                    onClick={(e) => {
                      RemoveTech(e.currentTarget.id);
                    }}
                    className="btnRemoveItem"
                  >
                    <img
                      id={`${tech.id}`}
                      className="imgRemoveItem"
                      src={removeItem}
                      alt="remover item"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Content>
    </>
  );
}
