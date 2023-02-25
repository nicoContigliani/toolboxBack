const fs = require("fs")
const { parse } = require("csv-parse");


const structureValidation = async (data) => {
    const dataSplit = data.split(',')

    const dataAll = []
    const dataAllT = []

    dataSplit.forEach(element => {
        if (element.includes('\n')) {
            dataAll.push(...(element.split('\n')))
        } else {
            dataAll.push(element)
        }
    });

    const regexT = /^[a-z,A-Z]*$/;
    const regexN = /^[0,1,2,3,4,5,6,7,8,9]*$/;
    const regHexa = /^[a,b,c,d,e,f,0,1,2,3,4,5,6,7,8,9]*$/;

    for (let index = 4; index < dataAll.length; index++) {
        // const element = dataAll[index];


        if ((dataAll[index].includes('.csv')) && (typeof dataAll[index + 1] === 'string' && regexT.test(dataAll[index + 1])) && (!(regexT.test(dataAll[index + 2]))) && (dataAll[index + 3].length == 32)) {

            const file = dataAll[index]
            const text = dataAll[index + 1]
            const number = dataAll[index + 2]
            const hexa = dataAll[index + 3]

            dataAllT.push(
                {
                    text,
                    number,
                    hexa
                }
            )

        }
    }



    //  console.log("🚀 ~ file: struture.validation.service.js:64 ~ structureValidation ~ dataAllT:", dataAllT)
    return dataAllT
}



module.exports = {
    structureValidation
}