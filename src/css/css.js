import styled from "styled-components";

export const Conteiner = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: white;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
        img{
            margin-top: 159px;
            width:147px;
        }
        p{
            color:grey;
            font-size: 15px;
            margin-top: 25px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
            
        }
        h1{
        font-family:"open-sans";
        font-size:42px;
        font-weight:700;
        width:263px;
        height:56px;
        color:green;
        text-align:center;
    }

`
export const Form = styled.div`
    margin-top: 24px;
    margin-left: 25px;
    display: flex;
    flex-direction: collum;
    height: auto;
    width: 326px;
        input{
            width: 326px;
            height: 58px;
            margin-bottom: 13px;
            border-radius: 15px;
            border: 1px solid #D4D4D4;
            box-sizing: border-box;
            color: #000000;
            padding-left: 11px;
            font-size: 20px;
            font-weight: 400;
            font-family: 'Raleway', sans-serif;
            &:focus{
                outline: none;
            }
            &::placeholder{
            color: grey;
            }   
        }
        button{
            font-family: 'Raleway', sans-serif;
            width: 326px;
            height: 46px;
            background-color: green;
            border-radius: 15px;
            border: none;
            box-sizing: border-box;
            color:white;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
            
        }

    `

export const HomeConteiner = styled(Conteiner)`
    `


export const TopConteiner = styled.div`
    font-family: 'Raleway', sans-serif;
    height: 78px;
    width: 100%;
    display: flex;
    justify-content: space-between;
        p{
            font-size: 26px;
            font-weight: 700;
            color:black;
            margin-left: 25px;
        }
    
`

export const IconDiv = styled.div`
    color : black;
    margin-right:25px;
    margin-top:25px;
    font-size: 24px;
    cursor: pointer;
`

