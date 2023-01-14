const DarkModeReducer = (state, actions) => {
    switch (actions.type) {
        case "LIGHT" : {
            return{
                darkMode: false
            }
        }
        case "DARK" : {
            return{
                darkMode: true
            }
        }
        case "TOGGLE" : {
            return{
                darkMode: !state.darkMode
            }
        }
        default:
            return state;
    }
}


export default DarkModeReducer;