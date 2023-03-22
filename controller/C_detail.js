const detail = require("../model/M_user_details");
const login = require("../model/M_login");

module.exports = {
  post: async (req, res) => {
    console.log(req.file.filename);
    try {
      const userDetail = await detail.insertMany({
        fullName: req.body.fullName,
        age: req.body.age,
        mobile: req.body.mobile,
        photo: req.file.filename,
        address: req.body.address,
        pin_code: req.body.pin_code,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
      });
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  },
};
