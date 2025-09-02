import express from "express";
import session from "express-session";
import passport from "passport";
import "./auth/google.js"

const app = express();

//session setup
app.use(
  session({
    secret: "anyStrongKey",
    resave: false,
    saveUninitialized: true,
  })
);

//passpot  initialization

app.use(passport.initialize());
app.use(passport.session());

//routing

app.get("/", (req, res) => {
  res.send(`<a href="/auth/google">Login with Google</a>`);  //change 1
});

// Google OAuth login
app.get(
  "/auth/google", //change 1
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);

app.get("/profile",(req,res)=>{
    if(!req.isAuthenticated()) return res.redirect("/")
        console.log(req.user)
    res.send(`<h1>Welcome to thi site ${req.user.displayName}</h1>
               <img src="${req.user.photos[0].value}"> 
              <a href="/logout">logout</a>
           `)
})

app.get("/logout",(req,res)=>{
    req.logout(()=>{
        res.redirect("/")
    })
})

app.listen(3000, () => {
  console.log("server is running ");
});
