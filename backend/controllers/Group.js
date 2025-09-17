const Group = require("../model/Group");
const User = require("../model/User");

// Create new group
exports.createGroup = async (req, res) => {
  try {
    const { name, members } = req.body;

    // Create group
    const group = new Group({ name, members });
    await group.save();

    res.status(201).json({ message: "Group created successfully", group });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all groups
exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find().populate("members", "username email");
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single group by ID
exports.getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id).populate("members", "username email");
    if (!group) return res.status(404).json({ message: "Group not found" });
    res.status(200).json(group);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add member to group
exports.addMember = async (req, res) => {
  try {
    const { groupId, userId } = req.body;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ message: "Group not found" });

    // Check if already a member
    if (group.members.includes(userId)) {
      return res.status(400).json({ message: "User already in group" });
    }

    group.members.push(userId);
    await group.save();

    res.status(200).json({ message: "Member added successfully", group });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove member from group
exports.removeMember = async (req, res) => {
  try {
    const { groupId, userId } = req.body;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ message: "Group not found" });

    group.members = group.members.filter(member => member.toString() !== userId);
    await group.save();

    res.status(200).json({ message: "Member removed successfully", group });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
