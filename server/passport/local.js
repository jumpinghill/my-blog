const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

// Passport.js는 인증 요청을 처리해주는 Node.js의 인증 미들웨어입니다.
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다." });
          }
          // 아이디가 틀리면 위에 열림.
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }

          return done(null, false, { reason: "비밀번호가 일치하지 않습니다." });
          // 아이디는 맞고 비밀번호만 틀리면 위에 열림.
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
