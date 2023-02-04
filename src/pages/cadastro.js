import cestaOrganica from "../assets/cestaOrganica.jpg"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Conteiner, Form } from "../css/css";
import axios from "axios";


export default function Registration() {

    const navigate = useNavigate()

    const [formUser, setFormUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm:""
    });

    function handleForm(e) {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value,
        })
    }

    async function sendForm(event) {
        event.preventDefault();

        try {
            
            const sendIt = await axios.post(`REACT_APP_API_URL/cadastro`, formUser)

            alert(sendIt.data)

            navigate("/")


        }
        catch (err) {alert(err.response.data) }

        setFormUser({
            name: "",
            email: "",
            password: "",
            passwordConfirm:""
        });

    }


    return (
        <Conteiner>
            <img src={cestaOrganica} />
            <h1>{`Natureba.Store`}</h1>
            <Form >
                <form onSubmit={sendForm}>
                    <input  placeholder="Nome" type="text" name="name" onChange={handleForm} value={formUser.name} />
                    <input  placeholder="E-mail" type="email" name="email" onChange={handleForm} value={formUser.email} />
                    <input  placeholder="Senha" type="password" name="password" onChange={handleForm} value={formUser.password} />
                    <input  placeholder="Confirme a senha" type="password" name="passwordConfirm" onChange={handleForm} value={formUser.passwordConfirm} />
                    <button type="submit">Cadastrar</button>
                </form>
            </Form>
            <Link  to={"/"} style={{ textDecoration: 'none' }}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>


        </Conteiner>
    )
}