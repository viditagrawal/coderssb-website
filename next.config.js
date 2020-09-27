// read the env file and fill up process.env with all the things in my .env file
require("dotenv").config();
// These two lines allow for css imports directly to js files
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    REDIRECT_URI:
      process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
    SESSION_COOKIE_SECRET:
      // This default is an arbitrary value which doesn't matter for development. Don't worry about it.
      process.env.SESSION_COOKIE_SECRET ||
      "viloxyf_z2GW6K4CT-KQD_MoLEA2wqv5jWuq4Jd0P7ymgG5GJGMpvMneXZzhK3sL",
    LOCAL_GOOGLE_CLIENT_ID: 
      process.env.GOOGLE_CLIENT_ID
  }
});
