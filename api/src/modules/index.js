const router = require("express").Router();
const phoneRouter = require("./phone");
const usersRouter = require("./users");


router.use("/phone", phoneRouter);
router.use("/users", usersRouter);


module.exports = router;
