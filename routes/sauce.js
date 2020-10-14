/*const express = require("express");
const router = express.Router();//Création d'un routeur Express

const sauceController = require("../controllers/sauce");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");


router.post("/", auth, multer, sauceController.createThing);
router.put("/:id", auth, sauceController.modifyThing);
router.delete("/:id", auth, sauceController.deleteThing);
router.get("/:id", auth, sauceController.getOneThing);
router.get('/', auth, sauceController.getAllThings);
  


module.exports = router;*/