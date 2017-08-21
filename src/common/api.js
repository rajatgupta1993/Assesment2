export function getAllData() {
    const url = "http://localhost:3000/home";
    return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
            //TODO Handle Error 
        });
}

export function getDetailsData() {

    let id = arguments[0];
    const url = "http://localhost:3000/details/" + id;
    return fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
            //TODO Handle Error 
        });
}

export function postAllData() {

    let reqObj = arguments[0];
    const url = "http://localhost:3000/update";
    return fetch(url, reqObj)
        .then((resp) => resp.json())
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
            //TODO Handle Error
        });
}