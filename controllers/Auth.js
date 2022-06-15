exports.login = (req, res, next) => {
    res.render("login", {
        pageTitle: "Login",
        path: "login",
    });
};

exports.register = (req, res, next) => {
    res.render("register", {
        pageTitle: "Register",
        path: "register",
    });
};

