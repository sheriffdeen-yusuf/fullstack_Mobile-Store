app.post("/post", verifyToken, (req, res) => {
  res.status(200).json({
    message: "post created...",
    userLog: req.user,
  });
});

app.get("/login", (req, res) => {
  const user = {
    name: "lekenz",
    email: "lekenz@gmail.com",
  };
  jwt.sign(user, "secretkey", { expiresIn: "2m" }, (err, token) => {
    res.json({
      token,
    });
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    // req.bearerToken = bearerToken;
    jwt.verify(
      bearerToken,
      "secretkey",

      (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
      }
    );
    next();
  } else {
    res.sendStatus(401);
  }
}
