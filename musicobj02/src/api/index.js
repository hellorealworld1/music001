import axios from "axios"

const baseUrl = "http://localhost:3000"

export function getBanner (type=0) {
    return axios.get(baseUrl + "/banner?type=" + type)
}

export function getgd (num) {
    return axios.get(baseUrl + "/personalized?limit="+num)
}



// export default { getBanner }