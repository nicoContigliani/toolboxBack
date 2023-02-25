const { Api } = require("./api.services");

const callApi = async (element) => {
    const todo = {
        url: "https://echo-serv.tbxnet.com/v1/secret/file",
        body: "",
        params: element,
        method: "get",
        Token: "aSuperSecretKey"
    }
    try {

        const { data } = await Api(todo)
        return data


    } catch (error) {
        // console.log("🚀 ~ file: call.api.services.js:16 ~ callApi ~ error:", error)

    }
}

module.exports = {
    callApi
}