import Masyarakat from "../models/Masyarakatmodels";
import path from "path";
import fs from "fs";
import { error } from "console";

export const getMasyarakat = async(req,res)=>{
    try{
        const response = await MAsyarakat.findALL();
        res.json(reponse)
    } catch (error) {
        console.log(error.messege);
    }
}

export const getMasyarakatByNik = async(req,res)=>{
    try{
        const reponse = await Masyarakat.findOne({
            where:{
                nik : req.params.nik
            }
        });
        res.json(reponse)
    }catch (error){
        console.log(error.messege);
    }
}

export const saveMasyarakat = async(req, res)=>{
    const nik = req.body.nik;
    const nama = req.body.nama
    const username = req.body.username
    const password = req.body.password
    const telp = req.body.telp

    try {
        await Masyarakat.create({ nik,nama: nama, username: username, password: password, telp: telp})
    }catch (error){
        console.log(error.messege)
    }

}

export const updateMasyarakat = async(req, res)=>{
    const nik = await Masyarakat.findOne({
        where:{
            nik : params.nik
        }
    })
    if(!nik) return res.status(404).json({msg: "no Data Found"});
    const nama = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp

    try{
        await Masyarakat.update({nama: nama, username: username, password: password, telp: telp},{
            where:{
                nik : req.params.nik
            }
        });
        res.status(201).json({msg: "Account Updated Successfully"})
    }catch (error) {
        console.log(error.massage)
    }

}

export const deleteMasyarakat = async(req, res)=>{
    const nik = Masyarakat.findOne({
        where: {
            nik : req.params.nik
        }
    });
    if(!nik) return res.status(404).json({ msg: "no Data Found"});

    try{
        await MAsyarakat.detroy({
            where: {
                nik : req.params.nik
            }
        })
        res.status(200).json({msg: "account Deletes Successfully"})
    }catch (error) {
        console.log(error.messege)
    }
}