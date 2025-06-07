export async function getProjectsData() {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch('https://ccrayp.onrender.com/api/project/list', {
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

export async function getProjectData(id) {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch(`https://ccrayp.onrender.com/api/project/${id}`, {
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

export async function deleteProjectById(id) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/project/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export async function updateProjectById(id, data) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/project/update/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: data
    })
}

export async function newProjectByData(data) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/project/new`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: data
    })
}