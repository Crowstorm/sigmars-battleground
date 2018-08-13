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
    const shuffled = shuffle(array);
    let selected = shuffled.slice(0, noOfTerr);
    return{
        type: 'PICKED_SQUARES',
        array
    }
}

export const rollNumberOfTerrains = () =>{
    return{
        type: 'TERRAIN_AMOUNT',
        value
    }
}