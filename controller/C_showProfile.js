const detail = require("../model/M_user_details");

module.exports = {
  post: async (req, res) => {
    const user = req.body.mobile;
    // console.log(user);
    const friend = await detail.find({ mobile: user });
    // console.log(friend);
    res.render("showFriends", { friend });
  },
};
