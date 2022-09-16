import logo from "../imgComponents/login/logo.png";

import { Div, DivImg } from "./styled";
import { Context } from "../../Context/Auth";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import { MdAlternateEmail, MdOutlinePassword, MdError } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IErrorsLoguin {
    email: string;
    password: string;
}

export function Login() {
    const { ler, isclick, hide, isTornHide } = useContext(Context);

    //requisição yup
    const schema = yup
        .object()
        .shape({
            email: yup
                .string()
                .required("Preencha o campo")
                .email("Deve ser Email"),
            password: yup.string().required("Preencha o campo"),
        })
        .required();

    //Capturar dados do formulario
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IErrorsLoguin>({ resolver: yupResolver(schema) });
    const onSubmit = (data: FieldValues) => {
        ler(data);
    };

    const notify = () =>
        toast("🦄 Insira as informações!", {
            position:"bottom-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }); 
 

    return (
        <>
            <DivImg>
                <img src={logo} alt="logo" />
            </DivImg>

            <Div>
                <form onSubmit={handleSubmit(onSubmit, notify)}>
                    <h3>Login</h3>
                    <label>
                        <p>Email</p>
                        <div className="inputContainer">
                            <input {...register("email")} />
                            {errors.email ? (
                                <>
                                    <p className="errorMessage">
                                        {errors.email.message}
                                    </p>
                                    <MdError className="errorSvg" />
                                </>
                            ) : (
                                <MdAlternateEmail className="errorSvg" />
                            )}
                        </div>
                    </label>
                    <label>
                        <p>Senha</p>
                        <div className="inputContainer">
                            <input type={isclick} {...register("password")} />
                            {errors.password ? (
                                <>
                                    <p className="errorMessage">
                                        {errors.password.message}
                                    </p>
                                    <MdError className="errorSvg" />
                                </>
                            ) : isTornHide ? (
                                <BiHide className="errorSvg" onClick={hide} />
                            ) : <MdOutlinePassword className="errorSvg" onClick={hide} /> }
                        </div>
                    </label>
                    <button type="submit" className="btnEntrar">
                        Entrar
                    </button>
                    <div>
                        <p className="mensage">Ainda não possui uma conta?</p>
                        <Link to="/register">
                            <button type="submit" className="btnCadastrar">
                                Cadastrar
                            </button>
                        </Link>
                    </div>
                </form>
            </Div>
            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
