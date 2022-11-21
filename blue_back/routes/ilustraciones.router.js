const express = require("express");
const router = express.Router();
const ilustracionesController = require("../controllers/ilustraciones.controller"); // 

router.post("/", ilustracionesController.create); 
router.get("/", ilustracionesController.find); 
router.get("/:id", ilustracionesController.findOne); 
router.put("/:id", ilustracionesController.update); 
router.delete("/:id", ilustracionesController.remove); 

module.exports = router;