const { Api } = require("../../services/api.services");
const { callApi } = require("../../services/call.api.services");
const { structureValidation } = require("../../services/struture.validation.service");

const format = async (data) => {
    const { files } = data;
    const datas = []

    // const dataReturn = files.forEach(async element => {
    //     const data = await callApi(element)
    //     if (data !== undefined) {
    //         const dataR = structureValidation(data)
    //     }

    // });

    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        const data = await callApi(element)
        if (data !== undefined) {
            const dataR = await structureValidation(data)
            datas.push(dataR)

        }

    }



    // console.log("🚀 ~ file: fileDto.js:30 ~ format ~ datas:", datas)


    // console.log("🚀 ~ file: fileDto.js:15 ~ dataReturn ~ dataReturn:", dataReturn)
    return datas
}






module.exports = {
    format
};