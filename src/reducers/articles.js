const initalState = {
    list: [],
    activeId: null,
}
const articleReducer = (state =  initalState, action) => {
    switch(action.type){
        case 'SOMETHINK':{
            const newList = [...state.list]
            newList.push(action.payload)
        return {
            ...state,
            list: newList
        };
        }

        case 'SOMETHINK2':{
        return state;
        }

        default:
            return state;
    }
} 

export default articleReducer;