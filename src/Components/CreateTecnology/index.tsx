import { Div } from "../Login/styled";
import { FormTecnologi, Header } from "./styled";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import "./style.css";
import { useContext } from "react";
import { Context } from "../../Context/Auth";

interface IFormCreateTechs {
    title: string;
    status: string;
}

export function CreateTecnology() {
    const { isModal, modalTrue, onSubmit } = useContext(Context);

    const { register, handleSubmit } = useForm<IFormCreateTechs>();

    return (
        <>
            {isModal && (
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 1 }}
                >
                    <div className="modal">
                        <Div id="modal-content">
                            <Header>
                                <h3>Cadastrar Tecnologia</h3>
                                <button
                                    onClick={modalTrue}
                                    className="btn-Close"
                                >
                                    X
                                </button>
                            </Header>
                            <FormTecnologi onSubmit={handleSubmit(onSubmit)}>
                                <label>
                                    <div>
                                        <p>Nome</p>
                                        <input
                                            type="text"
                                            placeholder="TypeScript"
                                            {...register("title")}
                                        />
                                    </div>
                                    <div>
                                        <p>Selecionar status</p>
                                        <select
                                            /* name="text" */ id=""
                                            {...register("status")}
                                        >
                                            <option value="Iniciante">
                                                Iniciante
                                            </option>
                                            <option value="Intermediário">
                                                Intermediário
                                            </option>
                                            <option value="Avançado">
                                                Avançado
                                            </option>
                                        </select>
                                    </div>
                                    <button type="submit">
                                        Cadastrar Tecnologia
                                    </button>
                                </label>
                            </FormTecnologi>
                        </Div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
