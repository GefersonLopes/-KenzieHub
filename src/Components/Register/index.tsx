import logo from "../imgComponents/login/logo.png";
import fetchImg from "../imgComponents/models/get.png";
import errorImg from "../imgComponents/models/error.png";
import xImg from "../imgComponents/models/x.png";

import { DivCadastrar, DivImgCadastrar, Fetch, Error, Main } from "./styled";
import { Context } from "../../Context/Auth";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    const { isLogged, isError, closeError, onSubmitRegister } =
        useContext(Context);

    const schema = yup
        .object()
        .shape({
            name: yup.string().required(),
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
                        <p className="message">Rapido e grátis, vamos nessa</p>
                        <label>
                            <p>Nome</p>
                            <input
                                placeholder="Digite aqui seu nome"
                                {...register("name")}
                            />
                        </label>
                        <label>
                            <p>Email</p>
                            <input
                                placeholder="DIgite aqui seu email"
                                {...register("email")}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </label>
                        <label>
                            <p>Senha</p>
                            <input
                                type="password"
                                placeholder="Digite aqui sua senha"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p>{errors.password.message}</p>
                            )}
                        </label>
                        <label>
                            <p>Confirmar senha</p>
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                {...register("passwordConfirmation")}
                            />
                            {errors.passwordConfirmation && (
                                <p>{errors.passwordConfirmation.message}</p>
                            )}
                        </label>
                        <label>
                            <p>Bio</p>
                            <input
                                type="bio"
                                placeholder="Fale sobre você"
                                {...register("bio")}
                            />
                            {errors.bio && <p>{errors.bio.message}</p>}
                        </label>
                        <label>
                            <p>Contato</p>
                            <input
                                type="contact"
                                placeholder="Opção de contato"
                                {...register("contact")}
                            />
                            {errors.contact && <p>{errors.contact.message}</p>}
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
            {isLogged && (
                <Fetch className="bom">
                    <div className="container-card">
                        <img className="logo" src={fetchImg} alt="" />
                        <p>
                            Conta criada com sucesso! <br /> realize seu login
                        </p>
                    </div>
                    <div className="color-green"></div>
                </Fetch>
            )}

            {isLogged === false && isError && (
                <Error className="ruim">
                    <button onClick={closeError}>
                        <img src={xImg} alt="" />
                    </button>
                    <div className="container-card">
                        <img className="logo" src={errorImg} alt="" />
                        <p>Ops! Algo deu errado</p>
                    </div>
                    <div className="color-red"></div>
                </Error>
            )}
        </Main>
    );
}
