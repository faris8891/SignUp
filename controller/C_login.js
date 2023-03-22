const login = require("../model/M_login");
const detail = require("../model/M_user_details");
module.exports = {
  get: (req, res) => {
    res.render("login", { failed: "" });
  },

  post: async (req, res) => {
    let userData = req.body;
    // console.log(userData);
    try {
      const showData = await login.find(
        { name: userData.name, password: userData.password },
        { _id: 0 }
      );

      if (showData.length > 0) {
        const mobileData = showData[0].mobile;
        const checkMobile = await detail.find({ mobile: mobileData });

        if (checkMobile.length > 0) {
          const name = checkMobile[0].fullName;
          console.log(name);
          const friends = await detail.find(
            { mobile: { $ne: mobileData } },
            { _id: 0, __v: 0 }
          );
          const profile = await detail.find(
            { mobile: { $eq: mobileData } },
            { _id: 0, __v: 0 }
          );
          res.render("profile", { friends, name, profile });
        } else {
          console.log(mobileData);
          res.render("details",{mobileData});
        }
      } else {
        const failed = "Wrong username or password.";
        res.render("login", { failed });
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
