import React, { useEffect } from "react"

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{

    const [apiForm , setApiForm] = React.useState({})
    
    // const [user, setUser] =React.useState({
    //     username:'',
    //     token:''
    // })

    const [cart,setCart] =React.useState([])


useEffect(()=>{

    const apiFormStorage = localStorage.getItem('apiForm');
    if(apiFormStorage){
        setApiForm(JSON.parse(apiFormStorage))
    }
    const cartStorage = localStorage.getItem('cart');
    if(cartStorage){
        setCart(JSON.parse(cartStorage))
    }

},[])

return(
    <AuthContext.Provider value = {{apiForm,setApiForm,cart,setCart}}>
        {props.children}
    </AuthContext.Provider>
)

}
    

export const useAuth = () => React.useContext(AuthContext)