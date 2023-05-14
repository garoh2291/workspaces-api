const Router = require("express");
const router = Router();
const auth = require("../middlewares/authMiddleware");
const workspaceController = require("../controllers/workspaceController");

//get batch
router.get("/", auth, workspaceController.getBatch);

//get Single
router.get("/:_id", auth, workspaceController.getSingle);

//create batch
router.post("/", auth, workspaceController.create);

//update batch
router.put("/:_id", auth, workspaceController.update);

//delete batch
router.delete("/:_id", auth, workspaceController.delete);

router.post("/check-slug", auth, workspaceController.checkSlug);

module.exports = router;
