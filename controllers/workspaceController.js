const errorConfig = require("../config/errorConfig");
const Workspace = require("../models/workspace");
const { generateSlug } = require("../utils/generateSlug");

class WorkspaceController {
  getBatch = async (req, res) => {
    try {
      const { query } = req;

      const dbQuery = {};

      if (query.search) {
        const searchReg = new RegExp(query.search, "ig");
        dbQuery.$or = [{ name: searchReg }];
      }

      // add pagination
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 10;
      const skip = (page - 1) * limit;

      const workspaces = await Workspace.find(dbQuery)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

      const count = await Workspace.countDocuments(dbQuery);

      const pages = Math.ceil(count / limit);

      res.status(200).json({
        success: true,
        data: workspaces,
        user: req.userId,
        pagination: {
          page,
          pages,
          limit,
          count,
        },
      });
    } catch (e) {
      return res.status(404).json(e);
    }
  };

  create = async (req, res) => {
    try {
      const newWorkspace = {
        ...req.body,
        userId: req.userId,
      };

      const workspace = await Workspace.create(newWorkspace);
      res.status(201).json({
        success: true,
        data: workspace,
      });
    } catch (e) {
      const error = (e.code = 11000 ? "Duplicated slug" : "Server Error");
      return res.status(404).json({
        message: error,
      });
    }
  };

  update = async (req, res) => {
    try {
      const { _id } = req.params;

      const updatedWorkspace = await Workspace.findByIdAndUpdate(
        {
          _id: _id,
        },
        { $set: req.body },
        { upsert: true, returnDocument: "after" }
      );

      return res.status(200).json({
        success: true,
        data: updatedWorkspace,
      });
    } catch (e) {
      const error = (e.code = 11000 ? "Duplicated slug" : "Server Error");
      return res.status(404).json({
        message: error,
      });
    }
  };

  delete = async (req, res) => {
    try {
      const { _id } = req.params;

      const workspace = await Workspace.findByIdAndDelete({
        _id,
      });

      return res.status(200).json({
        success: true,
        data: workspace,
      });
    } catch (e) {
      return res.status(404).json(e);
    }
  };

  getSingle = async (req, res) => {
    try {
      const { id } = req.params;
      const workspace = await Workspace.findById({
        _id: id,
      });

      return res.status(200).json({
        success: true,
        data: workspace,
      });
    } catch (e) {
      return res.status(404).json(e);
    }
  };

  checkSlug = async (req, res) => {
    try {
      const { slug } = req.body;

      const isExisted = await Workspace.findOne({ slug });

      if (isExisted) {
        const suggested = await generateSlug(slug);
        return res.status(200).json({
          existed: true,
          suggested,
        });
      }

      return res.status(200).json({
        existed: false,
      });
    } catch (e) {
      return res.status(404).json(e);
    }
  };
}

module.exports = new WorkspaceController();
