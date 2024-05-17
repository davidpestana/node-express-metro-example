const idCheck = ({params}, res, next) => {
    let {id} = params;
    if(!isNaN(parseInt(id))) {
        next();
    } else {
        res.status(400);
        res.json({error: 'el id tiene que ser un numero'})
    }
}


module.exports = {idCheck}