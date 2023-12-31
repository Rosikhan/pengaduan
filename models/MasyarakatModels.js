import { Sequelize } from "sequelize";
import db from "../config/database.js"


const { DataTypes } = Sequelize;

const Masyarakat = db.define("masyarakat", {
    nik: {type: DataTypes.CHAR(16), primarykey: true},
    nama: DataTypes.STRING(35),
    username: DataTypes.STRING(35),
    password: DataTypes.STRING(32),
    telp: DataTypes.STRING(13)
},{
    freezeTableName: true
});

export default Masyarakat;

(async()=>{
    await db.sync();
})();
