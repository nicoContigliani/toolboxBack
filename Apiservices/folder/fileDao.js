const { Api } = require('../../services/api.services')

const get = async () => {
    const todo = {
        url: "https://echo-serv.tbxnet.com/v1/secret/files",
        body: "",
        params: "",
        method: "get",
        Token: "aSuperSecretKey"
    }

    const dataReturn = await Api(todo)
    const { data } = dataReturn
    console.log("🚀 ~ file: fileDao.js:14 ~ get ~ data:",typeof data)

    return data;
}
const getId = async (data) => {
    console.log("getId")

}

module.exports = {
    get,
    getId,
};