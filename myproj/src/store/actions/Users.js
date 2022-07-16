
import axios from "axios"



export const GetUserList = () => (dispatch) => {
    return axios.get("https://fakestoreapi.com/users")
    .then((res) => 
        dispatch({
            type : "GET-USER_LIST",
            payload: res.data
        })
    )
    .catch((err) => console.log(err))
     
}