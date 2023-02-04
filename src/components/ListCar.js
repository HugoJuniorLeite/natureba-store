import styled from "styled-components"

export default function ListCar({name,price, cont}){




    return(


<ContainerList>

<span>{name}</span>
<span>{price.replace(".",",")}</span>
<span>{cont}</span>
<span>R$ {(cont*price).toFixed(2).replace(".",",")}</span>

</ContainerList>


 )



}

const ContainerList = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
height:30px;
margin:1px 1px 0 1px;;
background-color:white;
padding: 0 5px 0 5px;

span:nth-child(1){
width:130px;
}

`
