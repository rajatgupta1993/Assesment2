export function fetchData() {
    return {
        type: "FETCH_DATA"
    }
}
export function saveData(data) {
    return {
        type: "SAVE_DATA",
        data: data
    }
}

export function getDetails(id) {

    return {
        type: "GET_DETAILS",
        data: id
    }
}

export function saveDetail(data) {
    return {
        type: "SAVE_DETAIL",
        data: data
    }
}

export function postDataToServerAction(data) {

    return {
        type: "POST_DATA",
        data: data
    }
}