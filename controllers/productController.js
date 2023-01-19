import db from "../models/index.js";
import multer from "multer";
import path from "path";

const Product = db.products;
const Review = db.reviews;

// 1. add Products
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
    // image: req.file.path,
    image: req.file.filename,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

// 2. Get all products
const getAllProduct = async (req, res) => {
  const products = await Product.findAll({});
  res.status(200).send(products);
};

// 3. Get single product
const getOneProduct = async (req, res) => {
  let req_id = req.params.id;
  const product = await Product.findOne({ where: { id: req_id } });
  res.status(200).send(product);
};

// 4. Update Product
const updateProduct = async (req, res) => {
  let req_id = req.params.id;
  const product = await Product.update(req.body, { where: { id: req_id } });
  res.status(200).send(product);
};

// 5. Get Single Product
// Not working yet
const deleteProduct = async (req, res) => {
  let req_id = req.params.id;
  await Product.destroy({ where: { id: req_id } });
  res.status(200).send("Product is deleted");
};

// 6. Get all published products
const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

// One to many relationship product and reviews
const getProductReviews = async (req, res) => {
  let req_id = req.params.id;
  const data = await Product.findOne({
    include: [
      {
        model: Review,
        as: "reviews",
      },
    ],
    where: { id: req_id },
  });

  res.status(200).send(data);
};

// Upload image

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `upload_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "2000000" },
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png|gif/;
    const mimeType = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

export {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
  getProductReviews,
  upload,
};
