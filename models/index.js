import { Sequelize, DataTypes } from "sequelize";
import dbConfig from "../config/dbConfig.js";

import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
    define: {
      freezeTableName: false,
      // timestamps: false
    },
  }
);

sequelize
  .authenticate()
  .then((data) =>
    console.log("Connection to database was establish successfuly")
  )
  .catch((err) => console.log(err, "ERROR! While connecting to database"));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import productModels from "./productModels.js";
import reviewModels from "./reviewModels.js";
import adminModels from "./admin.js";

db.products = productModels(sequelize, DataTypes);
db.reviews = reviewModels(sequelize, DataTypes);
db.admins = adminModels(sequelize, DataTypes);

db.sequelize
  .sync({ alter: true })
  .then((data) =>
    console.log("Synced Models to Tables on database successfully")
  )
  .catch((err) => console.log("ERROR! occured why syncing"));

//   Establishing relationship betwwen product and reviews models
db.products.hasMany(db.reviews, {
  foreignKey: "product_id",
  as: "reviews",
});
db.reviews.belongsTo(db.products, {
  foreignKey: "product_id",
  as: "products",
});
export default db;
