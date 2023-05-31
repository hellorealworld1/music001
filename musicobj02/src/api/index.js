import axios from "axios"

const baseUrl = "http://localhost:3000"

export function getBanner (type=0) {
    return axios.get(baseUrl + "/banner?type=" + type)
}

export function getgd (num) {
    return axios.get(baseUrl + "/personalized?limit="+num)
}


export function getgdxq (id) {
    return axios.get(baseUrl + "/playlist/detail?id="+id)
}


export function getlyric (id) {
    return axios.get(baseUrl + "/lyric?id="+id)
}

export function getsearch (key) {
    return axios.get(baseUrl + "/search?keywords="+key+'&type=1&limit=10')
}
// export default { getBanner }