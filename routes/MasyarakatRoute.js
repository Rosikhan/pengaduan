import express from "express";
import {
    getMasyarakat,
    getMasyarakatByNik,
    saveMasyarakat,
    updateMasyarakat,
    deleteMasyarakat
} from "../controllers/Masyarakatcontroller.js";

const router = express.Router

router.get('/masyarakat', getMasyarakat)
router.get('/masyarakat/:nik', getMasyarakat)
router.post('/masyarakat', saveMasyarakat)
router.patch('/masyarakat', updateMasyarakat)
router.delete('/masyarakat', deleteMasyarakat)

export default router;