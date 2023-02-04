import { useState } from "react"
import styled from "styled-components"
import { useAuth } from "../providers/auth"


export default function Poduct({ name, price, category, unit, picture, handleSelect, }) {

    const [count, setCount] = useState(0)

    let cont = 0

    function soma() {

        cont = count + 1
        setCount(cont)

        handleSelect(name, price, cont)
    }


    function subtrai() {

        cont = count - 1


        setCount(cont)

        handleSelect(name, price, cont)
    }

    return (

        <ContainerProduct>

            <li>
                {count > 0 ? <ContainerIcons><button onClick={subtrai}>-</button>
                    <span> {count}</span>
                    <button onClick={soma}>+</button></ContainerIcons> :
                    <ButtonSoma onClick={soma}>+</ButtonSoma>}
                <img src={picture} alt={name} />
                <p>R$ {price.replace(".", ",")}/{unit}</p>
                <p>{name} </p>
            </li>
        </ContainerProduct>

    )
}

const ContainerProduct = styled.ul`
display:flex;
flex-direction: column;
justify-content:center;
button{
    border-radius:50%;
    box-sizing:border-box;
    border: solid 1px green;
    color:green;
    background-color:white;
    font-weight:700;
    cursor: pointer;
}
//width: 101px;
//height:175px;
//margin: 15px 0 15px 10px;
    width:168px;
    height:268px;
img{
    width: 148px;//90px;//
    height: 148px; //120px;//
    margin:0;
}
li{    
//    width:168px;
  //  height:268px;
   // padding:10px 10px 30px
}
p{
    margin-top:5px;
    text-align:center;
    color:#666666;
}
p:first-of-type {
    font-weight:700;
}
span{
    font-weight:700;
    color:green;
}

`

const ButtonSoma = styled.button`
margin-left: 130.2px;
`

const ContainerIcons = styled.section`
display:flex;
justify-content: space-between;
align-items:center;
width:141px;
height:20px;
padding-left:11px;
`
