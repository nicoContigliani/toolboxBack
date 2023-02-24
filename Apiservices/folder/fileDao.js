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
    console.log("🚀 ~ file: fileDao.js:16 ~ get ~ dataReturn:", dataReturn.data)
    const { data } = dataReturn

    return data;
}
const getId = async (data) => {
    console.log("getId")

}

module.exports = {
    get,
    getId,
};