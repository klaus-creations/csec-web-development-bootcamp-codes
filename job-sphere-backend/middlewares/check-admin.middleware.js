export const checkAdmin = async function (req, res, next) {
  const user = req.user;
  try {
    if (!req.user) {
      throw new Error("there is no authorized user");
    }

    const role = user?.role || "USER";

    if (role !== "ADMIN") {
      throw new Error("you are not admin");
    }

    next();
  } catch (error) {
    next(error);
  }
};
