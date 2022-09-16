import logo from "../imgComponents/login/logo.png";
import {
    MdAlternateEmail,
    MdOutlinePassword,
    MdError,
    MdDriveFileRenameOutline,
    MdBiotech,
    MdContacts,
} from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DivCadastrar, DivImgCadastrar, Main } from "./styled";
import { Context } from "../../Context/Auth";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiHide } from "react-icons/bi";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";

interface IErrors {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    bio: string;
    contact: string;
    course_module: string;
}

YupPassword(yup);

export function Register() {
    const { onSubmitRegister, isclick, hide, isTornHide } = useContext(Context);

    const schema = yup
        .object()
        .shape({
            name: yup.string().required("*Campo obrigatório*"),
            email: yup
                .string()
                .required("Escreva um email")
                .email("Deve ser email"),
            password: yup
                .string()
                .min(8)
                .minUppercase(1)
                .minRepeating(2)
                .minWords(1)
                .password()
                .required(),
            passwordConfirmation: yup
                .string()
                .required("*Campo Obrigatório*")
                .oneOf([yup.ref("password"), null], "*Senhas não coincidem*"),
            bio: yup.string().max(100).required("*Campo obrigatório*"),
            contact: yup.string().required("*Campo obrigatório*"),
            course_module: yup.string().required("*Campo obrigatório*"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IErrors>({
        resolver: yupResolver(schema),
    });

    return (
        <>
            <Main>
                <div>
                    <DivImgCadastrar>
                        <img src={logo} alt="logo" />
                        <Link to="/">
                            <button>Voltar</button>
                        </Link>
                    </DivImgCadastrar>

                    <DivCadastrar>
                        <form onSubmit={handleSubmit(onSubmitRegister)}>
                            <h3>Crie sua conta</h3>
                            <p className="message">
                                Rapido e grátis, vamos nessa
                            </p>
                            <label>
                                <p>Nome</p>
                                <div className="inputContainer">
                                    <input {...register("name")} />
                                    {errors.name ? (
                                        <>
                                            <p className="errorMessage">
                                                {errors.name.message}
                                            </p>
                                            <MdError className="errorSvg" />
                                        </>
                                    ) : (
                                        <MdDriveFileRenameOutline className="errorSvg" />
                                    )}
                                </div>
                            </label>
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
                                    <input
                                        type={isclick}
                                        {...register("password")}
                                    />
                                    {errors.password ? (
                                        <>
                                            <p className="errorMessage">
                                                {errors.password.message}
                                            </p>
                                            <MdError className="errorSvg" />
                                        </>
                                    ) : isTornHide ? (
                                        <BiHide
                                            className="errorSvg"
                                            onClick={hide}
                                        />
                                    ) : (
                                        <MdOutlinePassword
                                            className="errorSvg"
                                            onClick={hide}
                                        />
                                    )}
                                </div>
                            </label>
                            <label>
                                <p>Confirmar senha</p>
                                <div className="inputContainer">
                                    <input
                                        type={isclick}
                                        {...register("passwordConfirmation")}
                                    />
                                    {errors.passwordConfirmation ? (
                                        <>
                                            <p className="errorMessage">
                                                {
                                                    errors.passwordConfirmation
                                                        .message
                                                }
                                            </p>
                                            <MdError className="errorSvg" />
                                        </>
                                    ) : isTornHide ? (
                                        <BiHide
                                            className="errorSvg"
                                            onClick={hide}
                                        />
                                    ) : (
                                        <MdOutlinePassword
                                            className="errorSvg"
                                            onClick={hide}
                                        />
                                    )}
                                </div>
                            </label>
                            <label>
                                <p>Bio</p>
                                <div className="inputContainer">
                                    <input {...register("bio")} />
                                    {errors.bio ? (
                                        <>
                                            <p className="errorMessage">
                                                {errors.bio.message}
                                            </p>
                                            <MdError className="errorSvg" />
                                        </>
                                    ) : (
                                        <MdBiotech className="errorSvg" />
                                    )}
                                </div>
                            </label>
                            <label>
                                <p>Contato</p>
                                <div className="inputContainer">
                                    <input {...register("contact")} />
                                    {errors.contact ? (
                                        <>
                                            <p className="errorMessage">
                                                {errors.contact.message}
                                            </p>
                                            <MdError className="errorSvg" />
                                        </>
                                    ) : (
                                        <MdContacts className="errorSvg" />
                                    )}
                                </div>
                            </label>
                            <label>
                                <p>Selecionar módulo</p>
                                <select id="" {...register("course_module")}>
                                    <option value="Primeiro módulo (Introdução ao Frontend)">
                                        Primeiro módulo (Introdução ao Frontend)
                                    </option>
                                    <option value="Segundo módulo (Frontend Avançado)">
                                        Segundo módulo (Frontend Avançado)
                                    </option>
                                    <option value="Terceiro módulo (Introdução ao Backend)">
                                        Terceiro módulo (Introdução ao Backend)
                                    </option>
                                    <option value="Quarto módulo (Backend Avançado)">
                                        Quarto módulo (Backend Avançado)
                                    </option>
                                </select>
                                <button type="submit" className="btnRegister">
                                    Cadastrar
                                </button>
                            </label>
                        </form>
                    </DivCadastrar>
                </div>
            </Main>
            <ToastContainer />
        </>
    );
}
