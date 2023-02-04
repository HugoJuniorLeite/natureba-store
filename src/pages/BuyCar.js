import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListCar from "../components/ListCar";
import { useAuth } from "../providers/auth";

export default function BuyCar() {


    const navigate = useNavigate()
    const { apiForm, cart ,setCart, REACT_APP_API_URL } = useAuth()
    const [formBuy, setFormBuy] = useState([
        {
            name: "",
            street: "",
            number: "",
            district: "",
            city: "",
            state: "",
            zipcode: "",
            namecard: "",
            numbercard: "",
            validity: "",
            securitycode: ""
        }
    ])

    console.log(cart)
    const token = apiForm.token

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    const cloneCart = cart

    console.log(cart)

    let sum = 0;

    cloneCart.forEach(({ price, cont }) => {
        Number(cloneCart.price);
        sum += price * cont;

    });

    sum = sum.toFixed(2).replace(".", ",")

    async function buy(e) {
        e.preventDefault()

        const sendObj = {
            name:formBuy.name, 
            products:cart,
            price:sum, 
            street: formBuy.street,
            number: formBuy.number,
            district: formBuy.district,
            city: formBuy.city,
            state: formBuy.state,
            zipcode: formBuy.zipcode,
            namecard: formBuy.namecard,
            numbercard: formBuy.numbercard,
            validity: formBuy.validity,
            securitycode: formBuy.securitycode
        }

        try {

            const wasSendObj = await axios.post(`${REACT_APP_API_URL}/sales`, sendObj , config)
            
            console.log(wasSendObj)

            alert("Pedido enviado")

            setCart([])

            setFormBuy({
                name: "",
                street: "",
                number: "",
                district: "",
                city: "",
                state: "",
                zipcode: "",
                namecard: "",
                numbercard: "",
                validity: "",
                securitycode: ""
            })

            navigate("/home")



            
        } catch (err) {
            alert(err.response.data)
        }


        

    }



    function handleForm(e) {
        setFormBuy({
            ...formBuy,
            [e.target.name]: e.target.value,
        })
    }

    return (

        <Container>

            <ContainerList>

                <span>Descrição</span>
                <span>Valor unitário</span>
                <span>Qnd</span>
                <span>Total</span>

            </ContainerList>


            {cart.map(item => (<ListCar key={item.name} name={item.name} price={item.price} cont={item.cont} />))}

            <TituleResult>

                <span>Total:</span> <span>R$ {sum}</span>
            </TituleResult>

            <form onSubmit={buy}>


                <input placeholder="Nome" type="text" name="name" onChange={handleForm} value={formBuy.name} required ></input>
                <div>
                    <input placeholder="Rua" type="text" name="street" onChange={handleForm} value={formBuy.street} required></input>
                    <input placeholder="N" type="number" name="number" onChange={handleForm} value={formBuy.number} required></input>
                    <input placeholder="Bairro" type="text" name="district" onChange={handleForm} value={formBuy.district} required></input>
                </div>
                <div>
                    <input placeholder="Cidade" type="text" name="city" onChange={handleForm} value={formBuy.city} required></input>
                    <input placeholder="Estado" type="text" name="state" onChange={handleForm} value={formBuy.state} required></input>
                    <input placeholder="CEP" type="number" name="zipcode" onChange={handleForm} value={formBuy.zipcode} required></input>
                </div>

                <input placeholder="Nome do titular do cartão" type="text" name="namecard" onChange={handleForm} value={formBuy.namecard} required></input>
                <ContainerCard>
                    <input placeholder="Numero do cartão" type="number" name="numbercard" onChange={handleForm} value={formBuy.numbercard} required></input>
                    <input placeholder="validade" type="date" name="validity" onChange={handleForm} value={formBuy.validity} required></input>
                    <input placeholder="codigo sv" type="password" name="securitycode" onChange={handleForm} value={formBuy.securitycode} required ></input>
                </ContainerCard>
                <Button type="submit">Finalizar</Button>
            </form>

        </Container>
    )


}

const Container = styled.section`
background-color: #f5f5f5;
padding:5px;
padding-top:20px;
form{
    display:flex;
    flex-direction:column;
    margin-top:30px;
}
input{
    margin-top:10px;
    height:30px;
    margin-right:1px;
    
}
div{
    display:flex;
    width:364px;
input:nth-child(2){
    width:40px;
}
input:nth-child(3){
    width:121px;
}
}
`

const ContainerList = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
font-weight:700;
background-color:white;
height:50px;
margin: 0 1px 0 1px;
span:nth-child(1){
width:130px;
padding-left:20px;
}
span:nth-child(2){
padding-left:10px;
padding-right:15px;
text-align:center;
}
span:nth-child(3){
padding-right:45px;
}
span:nth-child(4){
padding-right:10px;
}
`

const TituleResult = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
height:40px;
font-size:22px;
font-weight:700;
margin-top: 5px;
background-color:white;
padding: 0 5px 0 5px;
`

const Button = styled.button`
margin-top:10px;
height:50px;
border-radius:50px;
background-color:green;
color:white;
border: solid 1px green;
font-weight:700;
font-size:20px;
`

const ContainerCard = styled.section`
width:364px;
input:nth-child(2){
    width:103px;
}
input:nth-child(3){
    width:60px;
}

`