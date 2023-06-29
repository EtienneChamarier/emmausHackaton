const router = require("express").Router();
const phoneRouter = require("./phone");

router.use("/phone", phoneRouter);

module.exports = router;