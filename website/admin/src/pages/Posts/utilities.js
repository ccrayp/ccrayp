export async function getPostsData() {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch('https://ccrayp.onrender.com/api/post/list', {
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

export async function getPostData(id) {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch(`https://ccrayp.onrender.com/api/post/${id}`, {
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

export async function deletePostById(id) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/post/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export async function updatePostById(id, data) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/post/update/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: data
    })
}

export async function newPostByData(data) {
    const token = localStorage.getItem('jwt_token');
    return await fetch(`https://ccrayp.onrender.com/api/post/new`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: data
    })
}