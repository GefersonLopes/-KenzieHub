import { createContext, ReactNode, useEffect, useState } from "react";
import { RemoveTech } from "../Components/RemoveTech";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IChildrenProviderProps {
    children: ReactNode;
}

export interface IDataTechs {
    title: string;
    status: string;
}

interface IDataGet {
    techs: never[];
}

interface ISalveResult {
    token: string;
}

interface ISalve {
    data?: ISalveResult;
}

interface IDataPost {
    email: string;
    password: string;
    token: string;
}

interface IDataList {
    id: number;
    title: string;
    status: string;
}

interface ITechList {
    data: IDataList;
    id: number;
    title: string;
    status: string;
}

interface IDataRegister {
    name: string;
    email: string;
    password: string;
    bio: string;
    contact: string;
    course_module: string;
}

interface IGlobalProps {
    isLogged: boolean | null | undefined;
    setIsLogged: (value: boolean) => void;
    isError: boolean;
    setIsError: (value: boolean) => void;
    isModal: boolean;
    setIsModal: (value: boolean) => void;
    techsList: ITechList[] | [];
    setTechsList: (value: React.SetStateAction<never[]>) => void;
    RemoveTech: (value: string) => void;
    modalTrue: () => void;
    url: string;
    tokenUser: () => void;
    close: () => void;
    isclick: string;
    setIsClick:(value: string) => void;
    hide: () => void;
    isTornHide: boolean; 
    setIsTornHide: (value: boolean) => void;
    salve: ISalve;
    ler: (value: FieldValues) => void;
    closeError: () => void;
    configToken: object;
    LeadTechs: () => void;
    onSubmit: SubmitHandler<FieldValues>;
    onSubmitRegister: SubmitHandler<FieldValues>;
}

export const Context = createContext<IGlobalProps>({} as IGlobalProps);

export const AuthProvider = ({ children }: IChildrenProviderProps) => {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /* Constantes Gerais */
    let salve: ISalve = {};
    const url: string = "https://kenziehub.herokuapp.com/";
    const tokenUser = JSON.parse(localStorage.getItem("@token") || "{}");
    const configToken = {
        headers: { Authorization: `Bearer ${tokenUser}` },
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /* States gerais */
    const [isLogged, setIsLogged] = useState<any>(false);
    const [isError, setIsError] = useState(true);
    const [isModal, setIsModal] = useState(false);
    const [techsList, setTechsList] = useState([]);
    const [isclick,setIsClick] = useState("password");
    const [isTornHide, setIsTornHide] = useState(false);   
    /////////////////////////////////////////////////////////////////////////////////////////////////
    /* Função Criar Tecnologias */
    const modalTrue = () => setIsModal(!isModal);

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        const title = data?.title;
        const status = data?.status;

        axios
            .post<IDataTechs>(
                url + "users/techs",
                {
                    title,
                    status,
                },
                { headers: { Authorization: `Bearer ${tokenUser}` } }
            )
            .then(function (response) {
                toast('🦄 Tech criada com sucesso!', {
                    position:"bottom-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { background: "black"}
                    });
                console.log(response);
            })
            .catch(function (error) {
                toast('🦄 Tech não pode ser criada', {
                    position:"bottom-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { background: "black"}
                    });
                console.log(error);
            });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////
    /* Função da Home */

    function close() {
        setIsLogged(undefined);
        localStorage.clear();
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    /* Função Loguin */

    const history = useHistory();
    function ler(data: FieldValues) {
        const email = data?.email;
        const password = data?.password;

        const handleNavigation = (path: string) => {
            return history.push(path);
        };

        return (
            data !== undefined &&
            axios
                .post<IDataPost>(url + "sessions", {
                    email,
                    password,
                })
                .then(function (response) {
                    toast("Login realizado!")
                    localStorage.setItem("salveData", JSON.stringify(response));
                    localStorage.setItem(
                        "@token",
                        JSON.stringify(response.data.token)
                    );
                    setIsLogged(true);
                    handleNavigation("/home");
                    return response;
                })
                .catch(function (error) {
                    toast('🦄 Você escreveu algo errado...', {
                        position:"bottom-right",
                        autoClose: 3500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        style: { background: "black"}
                        });
                    handleNavigation("/");
                    setIsLogged(false);
                    setIsError(true);
                    console.log(error);
                })
        );
    }

    //fechar componente de erro
    function closeError() {
        setIsError(false);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    /* Função Main */

    function LeadTechs() {
        useEffect(() => {
            axios
                .get<IDataGet>(url + "profile", configToken)
                .then(function (response) {
                    const data = response.data.techs;
                    //console.log(data)
                    setTechsList(data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, [techsList]);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const onSubmitRegister: SubmitHandler<FieldValues> = (
        data: FieldValues
    ) => {
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        const bio = data?.bio;
        const contact = data?.contact;
        const course_module = data?.course_module;

        axios
            .post<IDataRegister>("https://kenziehub.herokuapp.com/users", {
                name,
                email,
                password,
                bio,
                contact,
                course_module,
            })
            .then((res) => {
                toast('Cadastro realizado com sucesso!', {
                    position:"bottom-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { background: "black"}
                    });

                localStorage.setItem("salveData", JSON.stringify(res));
            })
            .catch((err) => {
                toast('Usuário já existente', {
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
    };

    const hide = () => {
        setIsTornHide(!isTornHide);
        
        if(isclick === "password") {
            setIsClick("text");
        }
        else {
            setIsClick("password");
        }
    };   
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Context.Provider
            value={{
                isLogged,
                setIsLogged,
                isError,
                setIsError,
                isModal,
                setIsModal,
                techsList,
                setTechsList,
                RemoveTech,
                modalTrue,
                url,
                tokenUser,
                close,
                isTornHide, 
                setIsTornHide,
                salve,
                ler,
                hide,
                closeError,
                configToken,
                LeadTechs,
                onSubmit,
                onSubmitRegister,
                isclick,
                setIsClick,
            }}
        >
            {children}
        </Context.Provider>
    );
};
