const axios = require('axios')

const Api = async ({
    url,
    body,
    params,
    method,
    Token
}) => {


    const urls = await
        params != null
        ? `${url}/${params}`
        : `${url}`;


    try {
        return datas = await axios({
            method: method,
            url: urls,
            data: body,
            headers: { Authorization: `Bearer ${Token}` }
        });

    } catch (error) {
        // console.log(error.message)
    }



}

module.exports = {
    Api
}