import pengaduan from "../models/pengaduanModels";
import path from "path";
import fs from "fs";
import { error } from "console";

export const getpengaduan = async(req,res)=>{
    try{
        const response = await pengaduan.findALL();
        res.json(reponse)
    } catch (error) {
        console.log(error.messege);
    }
}

export const getpengaduanByNik = async(req,res)=>{
    try{
        const reponse = await pengaduan.findOne({
            where:{
                id_pengaduan : req.params.id_pengaduan
            }
        });
        res.json(reponse)
    }catch (error){
        console.log(error.messege);
    }
}

export const savepengaduan = async(req, res)=>{
    const id_pengaduan = req.body.id_pengaduan;
    const tgl_pengeduan = req.body.tgl_pengeduan;
    const nik = req.body.nik;
    const isi_laporan = req.body.isi_laporan;
    const status = req.body.status;
    const foto = req.body.foto;
    const fileUpload = req.body.length;
    const ext = path.extname(foto.name);
    const filename = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${filename}`;
    const allowedType = ['.png', '.jpg', 'jpeg'];

    if(!allowedType.includes(ext.toLowerCase)) return res.status(422).json({msg : "Foto tidak valid"});
    if(filesize > 5000000) return res.status(422).json({msg : "Foto harus dibawah 5MB"});

    file.mv(`.public/images/${filename}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.messege});
        try {
            await pengaduan.create({id_pengaduan:id_pengaduan, tgl_pengeduan:tgl_pengeduan, nik:nik, isi_laporan:isi_laporan, foto:filename, status:status})
            res.status(201).json({msg: "pengaduan telah diupload"})
        }catch (error){
            console.log(error.message);
        }
    })
}