const detail = require("../model/M_user_details");

module.exports = {
  post: async (req, res) => {
    const user = req.body.mobile;
    // console.log(user + "update");
    const updateDetails = await detail.find({ mobile: user });
    // console.log(updateDetails);
    res.render("updateForm", { updateDetails });
  },
  update: async (req, res) => {
    const user = req.body.mobile;
    const update = await detail.updateOne(
      { mobile: user },
      {
        fullName: req.body.fullName,
        age: req.body.age,
        mobile: req.body.mobile,
        photo: req.file.filename,
        address: req.body.address,
        pin_code: req.body.pin_code,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
      }
    );
    res.end();
  },
};
