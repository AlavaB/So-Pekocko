const express = require("express");
const router = express.Router();

const sauceControllers = require("../controllers/sauce");
const auth = require("../middleware/auth");//Permet de protéger mes routes
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, sauceControllers.createSauce);
//router.post("/:id/like", auth, multer, sauceControllers.likeSauce);
//router.post("/:id/dislike", auth, multer, sauceControllers.dislikeSauce);
router.put("/:id", auth, sauceControllers.modifySauce);
router.delete("/:id", auth, sauceControllers.deleteSauce);
router.get("/:id", auth, sauceControllers.getOneSauce);
router.get("/", auth, sauceControllers.getAllSauces);
  

module.exports = router;