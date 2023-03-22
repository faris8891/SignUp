const login = require("../model/M_login");

module.exports = {
  get: (req, res) => {

    res.render("../views/signUp");
  },
  post: (req, res) => {
    newUser = req.body;

    const showData = async () => {
      try {
        const data = await login.insertMany({
          name: req.body.name,
          mobile: req.body.mobile,
          email: req.body.email,
          password: req.body.password,
        });
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const dbData = showData();
    console.log(dbData);

    // ------------------
    // console.log(req.body.fullName);

    res.redirect('/login')
  },
};
