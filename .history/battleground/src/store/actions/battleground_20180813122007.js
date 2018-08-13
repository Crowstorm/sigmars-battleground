export const toggleTerrain = () =>{
    return {
        type: 'TOGGLE_TERRAIN',
    }
}

export const toggleScenery = () =>{
    return {
        type: 'TOGGLE_SCENERY',
    }
}

export const pushPickedSquares = (array) =>{
    return{
        type: 'PICKED_SQUARES',
        array
    }
}