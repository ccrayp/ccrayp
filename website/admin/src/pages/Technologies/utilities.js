export async function getTechnologiesData() {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch('https://ccrayp.onrender.com/api/technology/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.status === 404)
        return []
    else if (response.status === 500)
        return (await response.json()).error

    return await response.json()
}

export async function getTechnologyData(id) {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch(`https://ccrayp.onrender.com/api/technology/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })

    if (response.status === 404) {
        console.log((await response.json()).message)
        return {}
    }
    else if (response.status === 500)
        return (await response.json()).error

    return await response.json()
}

export async function deleteTechnologyById(id) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/technology/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export async function updateTechnologyById(id, data) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/technology/update/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: data
    })
}

export async function newTechnologyByData(data) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/technology/new`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: data
    })
}