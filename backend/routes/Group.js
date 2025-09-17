const express = require("express");
const {
  createGroup,
  getGroups,
  getGroupById,
  addMember,
  removeMember,
} = require("../controllers/Group");

const router = express.Router();

// Create group
router.post("/", createGroup);

// Get all groups
router.get("/", getGroups);

// Get single group by ID
router.get("/:id", getGroupById);

// Add member to a group
router.post("/add-member", addMember);

// Remove member from a group
router.post("/remove-member", removeMember);

module.exports = router;
