const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json("server error");
};

module.exports = errorHandler;