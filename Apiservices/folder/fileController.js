const fileModel = require('../folder/fileModel')


const get = async (req, res) => {
    try {
        const files = await fileModel.get()
        return res.status(200).json({
            data: files,
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



module.exports = {
    get,
    getId
}