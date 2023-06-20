 const GoogleStrategy = require("passport-google-oauth20").Strategy;
 const GithubStrategy = require("passport-github2").Strategy;
 const passport= require("passport");
  require("./passport")
const GOOGLE_CLIENT_ID="110147749417-sbfvh5epghn6u2rvf8obuqc1m2ufbk0e.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

GITHUB_CLIENT_ID = "110147749417-fcg32868cf0uib1n1h4us2hh22mi2437.apps.googleusercontent.com";
GITHUB_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
    
  }
));

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  