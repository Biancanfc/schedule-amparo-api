const Activity = require('../models/activity');

module.exports = {
  async getAll(queryParams) {
    let query = {};
    const keys = Object.keys(queryParams);

    if (keys.length > 0) {
      query = {
        $and: keys.map((key) => {
          return {
            [key]: queryParams[key],
          };
        }),
      };
    }

    const activities = await Activity.find(query);

    return activities;
  },
  async create(data) {
    const activity = await Activity.create(data);

    return activity;
  },
  async update(id, data) {
    const activity = await Activity.findByIdAndUpdate(id, data, { new: true });

    return activity;
  },
  async delete(id) {
    const activity = await Activity.findByIdAndDelete(id);

    return activity;
  },
};
