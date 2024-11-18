import axios from "axios";
import { createContext, useEffect, useState } from "react"
// import { food_list } from "./data"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const url = "http://localhost:4000"

    const [token, setToken] = useState("");

    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId, price) => {
        // console.log(itemId, price);
        // console.log(cartItems);
        console.log(typeof(cartItems[itemId]));
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]: 50, price: price}))
        }else{
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 50}))
        }
        if(token){
            await axios.post(url + "/api/cart/add", {itemId}, {headers: {token}})
        }
    }

    
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 50}))
        if(token){
            await axios.post(url + '/api/cart/remove', {itemId}, {headers: {token}})
        }
    }

    // const getTotalAmount = () => {
    //     let amount = 0
    //     for (const item in cartItems) {
    //         console.log("cartItems",item, cartItems[item]);
    //         amount += cartItems[item]
    //         // if (cartItems[item] > 0) {
    //         //     amount += cartItems[item]*50                 //cartItems[price];
    //         //    }
    //     }
    //     return amount
    // }

        const getTotalItem = () => {
            let itemNo = 0
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    itemNo++;
                }
            }
            return itemNo
        }

        const fetchFoodList = async () => {
            const response = await axios.get(url+'/api/food/list');
            setFoodList(response.data.data)
        }

        const loadCartData = async (token) => {
            const response = await axios.post(url + '/api/cart/get',{}, {headers: {token}})
            setCartItems(response.data.cartData);
        }

        useEffect(() => {
            async function loadData(){
                await fetchFoodList();
                if(localStorage.getItem("token")){
                    setToken(localStorage.getItem("token"));
                    await loadCartData(localStorage.getItem("token"));
                }
            }
            loadData();
        },[])

        const contextValue = {
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            // getTotalAmount,
            getTotalItem,
            url,
            token,
            setToken
        }
        return(
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        )
}

export default StoreContextProvider




    