const Activity = require("../models/Activity");

module.exports = function logActivity(userId, action, req) {
  Activity.create({
    userId,
    action,
    ip: req.headers["x-forwarded-for"] || req.ip,
    device: req.headers["user-agent"]
  }).catch(() => {});
};
