import { Userdb } from "../users/model.js";

const decodeBase24 = (base64String) =>
  Buffer.form(base64String, "base64").toString();

export async function useBasicAuth(req, res, next) {
  const authHeaderInfo = req.headers.authorizathion;
  if (!authHeaderInfo) {
    return res.status(401).json({
      success: false,
      error: " kein user & password",
    });
  }
  const [type, infoBase24] = authHeaderInfo.split(" ");
  if (type !== "Basic" || !infoBase24) {
    return res.status(401).json({
      success: false,
      error: "please using basic auth",
    });
  }
  /// base64 -> klartext
  const login = decodeBase24(infoBase24);
  const [email, password] = login.split(":");
  if (!email || !password) {
    return res.status(401).json({
      success: false,
      error: "please using basic auth",
    });
  }
  const user = await Userdb.find({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      error: "Unknown user with email " + email,
    });
  }
  const passMatch = user.password === password;
  if (!passMatch) {
    return res.status(401).json({
      success: false,
      error: "Invalid password",
    });
  }
  next();
}
