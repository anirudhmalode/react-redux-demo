import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numberOfCakes: 10
}

const cakeRducer = (previousState = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...previousState,
                numberOfCakes: previousState.numberOfCakes - 1
            }

        default:
            return previousState;
    }
}

export default cakeRducer;