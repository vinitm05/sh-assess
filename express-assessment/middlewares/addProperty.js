const addProperty = (req, res, next) => {
    req.user = "Guest";
    next()
}

module.exports = addProperty;