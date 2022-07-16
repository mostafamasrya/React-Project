


const Intial_Value ={
  
    count:0,
    lang:"en",
    ArrIds:[]
}


export default function FavReducer(state=Intial_Value,action){
    switch (action.type){


    
            case "CHANGE-COUNTER":
                return {
                    ...state,
                    count:action.payload
                }


            default:
                return state



    }   
}