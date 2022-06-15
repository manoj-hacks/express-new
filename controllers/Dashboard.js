exports.dashboard = (req, res, next) => {
  res.render("layout", {
    pageTitle: "Dashboard",
    path: "index",
    template: "../views/index",
  });
};
