const Router = require("express");
const router = Router();
const auth = require("../middlewares/authMiddleware");
const workspaceController = require("../controllers/workspaceController");

// Get all workspaces
router.get("/", auth, workspaceController.getBatch);
//Add new workspace
router.post("/", auth, workspaceController.create);
//Edit workspace by ID
router.put("/:_id", auth, workspaceController.update);
//Delete workspace by ID
router.delete("/:_id", auth, workspaceController.delete);
//Check slug availability
router.post("/check-slug", auth, workspaceController.checkSlug);

module.exports = router;
