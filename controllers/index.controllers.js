const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index', { title: 'Express' });
};

module.exports = indexCtrl;