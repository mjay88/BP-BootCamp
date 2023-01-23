const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.create)
  .delete(userController.remove)
  .get(userController.getAllUsers);
router.route("/:uid").get(userController.getUser);

module.exports = router;
