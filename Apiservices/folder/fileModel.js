
const filesDao = require('./fileDao')


const get = async () => {
    return await filesDao.get()
}
const getId = async (data) => {
    return await filesDao.getId(data)
}


module.exports = {
    get,
    getId,

};