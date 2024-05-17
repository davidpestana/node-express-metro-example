const cabinStore = require("../store/cabin.store");
const doctorStore = require("../store/doctor.store");


const get = async () => {
    return await doctorStore.get();
}

const findOne  = async (id) => {
    return await doctorStore.find(id);
} 
const create = async (doctor) => {
    let doctorInstance =  await doctorStore.create({...doctor, cabins: []});
    let cabinInstance = await cabinStore.create({});
    await doctorStore.registerCabin(doctorInstance,cabinInstance);
    return doctorInstance;
}

const update = async (id, data) => {
    return await doctorStore.update(id,data);
}

const doctorController = {
    get, create, update, findOne
}

module.exports = doctorController;
