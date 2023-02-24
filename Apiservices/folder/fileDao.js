const {Api} = require('../../services/api.services')




const get = async () => {
    console.log("get")
    const todo = {
        url: "https://echo-serv.tbxnet.com/v1/secret/files",
        body: "",
        params: "",
        method:"get",
        Token:"aSuperSecretKey"
    }

    const dataReturn = await Api(todo)

    return true;
}
const getId = async (data) => {
    console.log("getId")

}

module.exports = {
    get,
    getId,
};