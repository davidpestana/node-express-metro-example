const cabinStore = require("../store/cabin.store");
const doctorStore = require("../store/doctor.store");


const get = async () => {
    return await cabinStore.get();
}

const getFilterByDoctor = async(doctor) => {
    return await cabinStore.get()
        .then((cabins) => cabins.filter(cabin => doctor.cabins.includes(cabin.id)));
}

const findOne  = async (id, doctor = null) => {
   return doctor.cabins.includes(cabin.id) ? await cabinStore.find(id) : false;
} 
const create = async (data, doctor = null) => {
    let cabin = await cabinStore.create(data);
    if(doctor) {
       await doctorStore.registerCabin(doctor,cabin);
    }
    return cabin;
}

const update = async (id, data) => {
    return await cabinStore.update(id,data);
}

const cabinController = {
    get, create, update, findOne, getFilterByDoctor
}

module.exports = cabinController;
