import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function RemoveTech(tech:string) {
  const url = "https://kenziehub.herokuapp.com/";
  const tokenUser = JSON.parse(localStorage.getItem("@token") || "{}");

  axios({
    method: "delete",
    url: url + "users/techs/" + tech,
    headers: { Authorization: `Bearer ${tokenUser}` },
  })
    .then((res) => {
      toast('Tech removida com sucesso', {
        position:"bottom-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { background: "black"}
        });
    })
    .catch((err) => {
      toast('Tech não pode ser removida', {
        position:"bottom-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { background: "black"}
        });
    });
}
