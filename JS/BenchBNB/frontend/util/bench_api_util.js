

export const fetchBenches = (filters) => {

    return $.ajax({
        method: 'GET',
        url: '/api/benches',
        
    })
    

};


export const createBench = (bench) => {

    return $.ajax({
        method: 'POST',
        url: '/api/benches',
        data: {bench}
    })

}

export const deleteBench = (id) => {

    return $.ajax({
        method: 'DELETE',
        url: `/api/benches/${id}`
    
    })

}