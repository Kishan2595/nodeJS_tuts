
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/users/register", (req, res) => {
    res.render("register");
});

app.get("/users/login", (req, res) => {
// flash sets a messages variable. passport sets the error message
// console.log(req.session.flash.error);
    res.render("login");
});

app.get("/users/dashboard", (req, res) => {
// console.log(req.isAuthenticated());
    res.render("dashboard", { user: "Kishan" });
});

app.get("/users/logout", (req, res) => {
req.logout();
res.render("index", { message: "You have logged out successfully" });
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});