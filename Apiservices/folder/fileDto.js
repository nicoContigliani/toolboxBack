const { Api } = require("../../services/api.services");
const { callApi } = require("../../services/call.api.services");
const { structureValidation } = require("../../services/struture.validation.service");

const format = async (data) => {
    const { files } = data;
    const datas = []


    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        console.log("🚀 ~ file: fileDto.js:12 ~ format ~ element:", element)
        const data = await callApi(element)
        if (data !== undefined) {
            const dataR = await structureValidation(data)

            if (dataR.length != 0) {
                datas.push({
                    file: element,
                    lines: dataR
                })
            }
        }
    }

    return datas
}
const formatFilter = async (files, filter) => {
    const { id } = filter
    const datas = []

    const data = await callApi(id)
 
    if (data !== undefined) {
        const dataR = await structureValidation(data)

        if (dataR.length != 0) {
            datas.push({
                file: id,
                lines: dataR
            })

        }
    }
return datas
}





module.exports = {
    format,
    formatFilter
};