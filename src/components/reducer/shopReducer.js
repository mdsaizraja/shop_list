const initialState = [
  {
    id: 1,
    shopeName: "",
    area: "",
    category: "",
    openDate: "",
    closeDate: "",
  },



];



const shopReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SHOP_NAME":
      state = [...state, action.payload];

      return state;

      case "DELETE_SHOP":
        return state.filter(shop => shop.id !== action.payload);


        

              
       case "SEARCH":
           return state.filter((shop)=>shop.shopeName.toLowerCase().includes(action.payload))





    default:
      return state;



  }
  

  

 
  
};


export default shopReducer;
