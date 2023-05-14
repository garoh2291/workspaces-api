const Workspace = require("../models/workspace");

const generateSlug = async (slug) => {
  let newSlug = slug;
  let counter = 1;
  let existingWorkspace = await Workspace.findOne({
    slug: newSlug,
  });

  while (existingWorkspace) {
    if (counter > 1) {
      const regex = /(\d+)$/;
      const match = newSlug.match(regex);
      if (match) {
        const numericalPart = parseInt(match[1]);
        newSlug = newSlug.replace(regex, numericalPart + 1);
      } else {
        newSlug = `${newSlug}${counter}`;
      }
    } else {
      newSlug = `${slug}${counter}`;
    }

    existingWorkspace = await Workspace.findOne({ slug: newSlug });
    counter++;
  }

  return newSlug;
};

module.exports = {
  generateSlug,
};
