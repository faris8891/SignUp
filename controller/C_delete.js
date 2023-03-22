const detail = require("../model/M_user_details");
const login = require("../model/M_login");

module.exports = {
  post: async (req, res) => {
    const user = req.body.mobile;
    // console.log(user);
    const del_detail = await detail.deleteOne({ mobile: user });
    const del_user = await login.deleteOne({ mobile: user });
    ;
  },
};
