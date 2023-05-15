const Router = require("express");
const router = Router();
const auth = require("../middlewares/authMiddleware");
const workspaceController = require("../controllers/workspaceController");

router.get("/", auth, workspaceController.getBatch);

router.post("/", auth, workspaceController.create);

router.put("/:_id", auth, workspaceController.update);

router.delete("/:_id", auth, workspaceController.delete);

router.post("/check-slug", auth, workspaceController.checkSlug);

module.exports = router;
