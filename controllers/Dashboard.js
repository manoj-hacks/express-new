exports.dashboard =  (req, res, next) => {
    res.render('index',{
        pageTitle: 'Dashboard',
        path: 'index'
    });
};