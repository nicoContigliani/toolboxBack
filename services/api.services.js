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
        ? `${url}${params}`
        : `${url}`;




    return datas = await axios({
        method: method,
        url: urls,
        data: body,
        headers: { Authorization: `Bearer ${Token}` }
    });


}

module.exports = {
    Api
}