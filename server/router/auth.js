const express = require("express");
const router = express.Router();
const Blog = require("../models/blogSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authentication = require("../middleware/authentication");

router.get("/", (req, res) => {
  res.send("Hey! Good day :)");
});

router.post(`/register`, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.json({ msg: "please fill the data" });
    }

    const emailExist = await User.findOne({ email: email });
    const usernameExist = await User.findOne({ username: username });

    if (emailExist) {
      return res.status(422).json({ msg: "Email already exist" });
    } else if (usernameExist) {
      return res.status(422).json({ msg: "username already exist" });
    } else {
      const member = new User(req.body);
      const userRegister = await member.save();

      if (userRegister) {
        res.status(201).json({ msg: "user registered successfully" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ msg: "please fill the data" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (isMatch) {
        const token = await userExist.generateAuthToken();

        console.log(token);

        return res.status(201).json({
          token: token,
          username: userExist.username,
        });

        // return res
        //   .cookie("jwt", token, {
        //     expires: new Date(Date.now() + 2592000000),
        //     httpOnly: true,
        //   })
        //   .status(201)
        //   .json({ msg: "login success" });
      } else {
        return res.status(422).json({ msg: "Invalid Credentials" });
      }
    } else {
      return res.status(422).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/logout", authentication, async (req, res) => {
  console.log(req.body);
  res.clearCookie("token", { path: "/" });

  req.rootUser.tokens = req.rootUser.tokens.filter((currToken) => {
    return currToken.token != req.token;
  });

  await req.rootUser.save();

  res.status(200).send("user logout");
});

router.post("/create_blog_page", authentication, (req, res) => {
  console.log(req.body.jwt);
  res.send(req.rootUser);
});

module.exports = router;
