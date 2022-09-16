import { Link, useHistory } from "react-router-dom";
import logo from "../imgComponents/login/logo.png";
import { Header, Line, Main } from "./styled";
import { ContentMain } from "../Main";
import "./style.css";
import { useContext, useEffect } from "react";
import { Context } from "../../Context/Auth";
import { motion } from "framer-motion";

export function Home() {
    const { close } = useContext(Context);
    const dataSalve = JSON.parse(localStorage.getItem("salveData") || "{}");
    const token = localStorage.getItem("@token");
    const history = useHistory();

    return (
        <>
            {token ? (
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0,  x:-2000 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                >
                    <Header>
                        <nav>
                            <img src={logo} alt="logo" />
                        </nav>
                        <Link to="/">
                            <button onClick={close}>Sair</button>
                        </Link>
                    </Header>
                    <Line></Line>
                    <Main>
                        <div className="main">
                            <h1>
                                Olá,{" "}
                                {dataSalve.data.user?.name !== undefined
                                    ? dataSalve.data.user.name
                                    : dataSalve.data.name}{" "}
                            </h1>
                            <p>
                                {dataSalve.data.user?.course_module !==
                                undefined
                                    ? dataSalve.data.user?.course_module
                                    : dataSalve.data.course_module}
                            </p>
                        </div>
                    </Main>
                    <Line></Line>

                    <div id="conteudo">
                        <ContentMain />
                    </div>
                </motion.div>
            ) : (
                history.push("/")
            )}
        </>
    );
}
