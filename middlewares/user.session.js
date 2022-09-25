const auth = (req, res, next) => {
    if(req.session.user && req.session.admin) {
        return next();
    } else {
        return res.sendStatus(401).json({msg: 'User not authenticated'});
    };
};

module.exports = auth;