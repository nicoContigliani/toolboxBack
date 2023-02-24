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
        ? `${url}${params}?token=${Token}`
        : `${url}?token=${Token}`;
    console.log("🚀 ~ file: api.services.js:13 ~ urls:", urls)

    const datas = await axios({
        method: method,
        url: urls,
        data: body,
    });
    console.log("🚀 ~ file: api.services.js:22 ~ datas:", datas)

    return true
}

module.exports = {
    Api
}