const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users (email, name, password, profile_img) 
                        VALUES (${email}, ${name}, ${hashedPassword}, '');
    `;
    res.status(201).json({ message: "New use created successfull" });
  } catch (error) {
    res.status(400).json({ message: "Client error garlaa" });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`SELECT * FROM users WHERE email =${email}
    `;
    if (!user) {
      res.status(404).json({ message: "Not found user" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res.status(400).json({ message: "Email or Password is wrong" });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "success", token });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Client error" });
  }
};

module.exports = { signUp, logIn };
