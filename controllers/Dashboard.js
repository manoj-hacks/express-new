exports.dashboard = (req, res, next) => {
  res.render("layout", {
    pageTitle: "Dashboard",
    path: "layout",
    template: "../views/index",
  });
};
