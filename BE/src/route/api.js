import express from "express";
let router = express.Router();
import APIController from '../controller/APIController';

const initApiroute = (app) => {
    router.get('/users', APIController.getAllUser); //method GET => read data
    router.get('/users/:id', APIController.getDetailUser);
    router.get('/users/customer_name/:customer_name', APIController.getUserForName);
    router.post('/create-user', APIController.createNewUser); //method POST => create data
    router.put('/update-user', APIController.updateUser); //method PUT => update data
    router.delete('/delete-user/:id', APIController.deleteUser); //method DELETE => DELETE data
    return app.use('/api/v1/', router)
}
export default initApiroute;
