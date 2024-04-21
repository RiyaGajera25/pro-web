const express = require("express");
const router = express.Router();

//middlewares
const { authCheck, adminCheck } = require("../middlewares/auth")

//controller
const { create, update, remove, list, read } = require("../controllers/brand");

//routes
router.post("/brand", create);
router.get("/brands", list);
router.get("/brand/:slug", read);
// router.get("/category/:slug",read);
router.put("/brand/:slug", update);
router.delete("/brand/:slug", remove);
// router.get('/category/subs/:_id',getSubs);

module.exports = router;