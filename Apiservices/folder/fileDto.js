const { Api } = require("../../services/api.services");
const { callApi } = require("../../services/call.api.services");
const { structureValidation } = require("../../services/struture.validation.service");

const format = async (data) => {
    const { files } = data;

    const dataReturn = files.forEach(async element => {
        const data = await callApi(element)
        if (data !== undefined) {
            structureValidation(data)
        }
    });

}






module.exports = {
    format
};