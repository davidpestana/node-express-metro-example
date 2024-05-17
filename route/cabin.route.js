const { idCheck } = require("../check.middelware");
const cabinController = require("../controller/cabin.controller");
const cabinRouter = require("express").Router();

cabinRouter.get('/:id',idCheck, async ({params, doctor}, res) => {
    let {id} = params;
    res.status(200);
    res.json(doctor ? await cabinController.findOne(id, doctor): await cabinController.findOne(id))
});

cabinRouter.get('',async ({doctor}, res) => {
    res.status(200);
    res.json(doctor ? await cabinController.getFilterByDoctor(doctor): await cabinController.get());
});

cabinRouter.post('',async ({body}, res) => {
    res.status(201);
    res.json(await cabinController.create(body));
});

cabinRouter.put('/:id',idCheck,async ({params, body}, res) => {
    let {id} = params;
    res.status(206);
    res.json(await cabinController.update(id, body))
});

module.exports = cabinRouter;
