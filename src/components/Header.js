import { RiLogoutBoxRLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"



export default function Header({ apiForm, form, setForm, cart, exit, setListProducts }) {

    const navigate = useNavigate()



    function handleFilter(e) {
        e.preventDefault();

        axios.get(`${process.env.REACT_APP_API_URL}products`)
            .then((res) => {


                let inputFilter = res.data.filter(item => item.name.includes(form.search))


                setListProducts(inputFilter)

                //                console.log(inputFilter,"teste")
            })


    }

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function moveCart() {


        if (!apiForm.token) {
            navigate("/")
        } else { navigate("/carrinho") }
    }

    return (

        <ContainerHeader>

            <ContainerLeft>
                <p>{`Bem Vindo ${apiForm.name}`}</p>


            </ContainerLeft>

            <ContairnerCenter>
                <h1>{`Natureba.Store`}</h1>
                <form onSubmit={handleFilter}>
                    <input name="search"
                        placeholder="pesquise por um produto especifico"
                        onChange={handleForm}
                        value={form.search}>
                    </input>

                    <button type="submit">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </form>

            </ContairnerCenter>
            <ContainerRight>
                {apiForm.token === undefined ?
                    <span onClick={exit}>
                        <ion-icon name="log-in-outline"></ion-icon> <span>Entrar</span></span> :
                    <span onClick={exit}> <span>Sair</span><RiLogoutBoxRLine></RiLogoutBoxRLine></span>
                }

                <Link to="/carrinho">
                    <span>
                        <span>carrinho</span>
                        <ion-icon name="cart-outline"></ion-icon>
                        {`|${cart.length}|`}
                    </span>
                </Link>


            </ContainerRight>

        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    background-color:white;
    position:fixed;
    background-color:#D4D4D4 0.5;
    
    top:0;
    padding-bottom:10px;
    ion-con{
        width:25px;
        height:25px;
    }
`

const ContairnerCenter = styled.section`
width: 30%;
height: 100%;
display:flex;
align-items: center;
flex-direction:column;
margin-top:15px;
  
    h1{
        font-family:"open-sans";
        font-size:42px;
        font-weight:700;
        width:263px;
        height:56px;
        color:green;
        text-align:center;
    }
form{
    display:flex;
    align-items:center;
    box-sizing:border-box;
}
input{
    width:210px;
    height:25px;
}
button{
    background-color:green;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
ion-icon{
    color:white;
    width:25px;
    height:25px;
}
}

`
const ButtonCard = styled.button`
span{
    color:white;
}
`

const ContainerLeft = styled.div`
    p{
        font-family:"open-sans";
        font-size:22px;
        font-weight:400;
        margin-top: 10px;
        width:263px;
        height:56px;
        color:green;

    }   
    width: 30%;
    left: 0;
`

const ContainerRight = styled.div`
    width: 30%;
    right: 0;
    a{
        text-decoration:none;
    }
    span,
    ion-icon{
        margin-top: 5px;
        color:green;
        cursor: pointer;
        
    }
    span{
        display:flex;
        justify-content: flex-end;
        align-items:center;
    }

`