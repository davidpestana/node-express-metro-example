const { idCheck } = require("../check.middelware");
const doctorController = require("../controller/doctor.controller");
const cabinRouter = require("./cabin.route");

const doctorRouter = require("express").Router();

doctorRouter.get('/:id',idCheck, async ({params}, res) => {
    let {id} = params;
    res.status(200);
    res.json(await doctorController.findOne(id))
});

doctorRouter.get('',async (req, res) => {
    res.status(200);
    res.json(await doctorController.get());
});

doctorRouter.post('',async ({body}, res) => {
    if (true) {
        res.status(201);
        res.json(await doctorController.create(body));
    } else {
        res.status(400);
        res.json({error: 'datos mal'});
    }
});

doctorRouter.put('/:id',idCheck,async ({params, body}, res) => {
    let {id} = params;
    res.status(206);
    res.json(await doctorController.update(id, body))
});


doctorRouter.use('/:id/cabin',idCheck,async (req,res,next) => {
    req.doctor = await doctorController.findOne(req.params.id);
    next();
}, cabinRouter);


module.exports = doctorRouter;