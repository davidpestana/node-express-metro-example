const Store = require("../store");
class DoctorStore extends Store {
    async registerCabin({id}, cabin) {
        let doctor = await this.find(id);
        doctor.cabins.push(cabin.id);
        return await this.update(id, doctor);
    }
}
let doctorStore =  new DoctorStore({name: 'string', age: 'number'});
module.exports = doctorStore;