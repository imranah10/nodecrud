import express from "express";
import  {create, getAll, getOne, update,Delete}  from "../controllers/User.controllers.js";
const router=express.Router()
router.post('/create',create)
router.get('/getall',getAll)
router.get('/getone/:id',getOne)
router.put('/update/:id',update)
router.delete('/delete/:id',Delete)

export default router