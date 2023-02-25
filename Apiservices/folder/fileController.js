const fileModel = require('../folder/fileModel')
const fileDto = require('../folder/fileDto')


const get = async (req, res) => {
    try {
        const files = await fileModel.get()
        const filesRow = await fileDto.format(files);
        // console.log("🚀 ~ file: fileController.js:9 ~ get ~ filesRow:", filesRow)
        return res.status(200).json({
            data: filesRow,
            status: 200,
        });

    } catch (error) {
        return res.status(500).send(error.message);

    }
}

const getId = async (req, res) => {
    const data = req.params;
    try {
        const files = await fileModel.getId(data)
        // const productRow = await productDto.formatSingle(product);
        return res.status(200).json({
            data: product,
            status: 200,
        });

    } catch (error) {
        return res.status(500).send(error.message);

    }
}

const post = async (req, res) => { }
const put = async (req, res) => { }





module.exports = {
    get,
    getId,
    post,
    put

}