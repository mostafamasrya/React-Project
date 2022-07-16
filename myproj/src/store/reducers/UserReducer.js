


const Intial_Value ={
  
 
    list:[]
}


export default function UserReducer(state=Intial_Value,action){
    switch (action.type){


    
            case "GET-USER_LIST":
                return {
                    ...state,
                    list:action.payload
                }


            default:
                return state



    }   
}