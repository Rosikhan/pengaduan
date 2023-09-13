import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const pengaduan = db.define("pengaduan", {
    id_pengaduan: {type: DataTypes.INTERGER(11), primarykey: true},
    tgl_pengeduan: DataTypes.Date(),
    nik: DataTypes.CHAR(16),
    isi_laporan: DataTypes.TEXT(),
    foto: DataTypes.STRING(255),
    status: DataTypes.ENUM('0', 'proses', 'selesai'),
}, {
    freezeTableName: true
});

export default pengaduan;

(async()=>{
    await db.sync
})();