function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function get(url, myHeaders) {
    return fetch(url,{
        method: 'GET',
        headers: myHeaders,
        cache: 'default'
    })
}

function post(url, data, myHeaders) {
    return fetch(url,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'default'
    }).then(handleErrors)
}

function formPost(url, data){
    return fetch(url , {
        method:'POST',
        body: data
    }).then(handleErrors)
}

const requestAPI = {
    get: get,
    post: post,
    formPost: formPost
};

export default requestAPI;