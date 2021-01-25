const Activity = require("../models/activity");

module.exports = {
  async getAll(queryParams) {
    const { limit, skip, cpf, dueDate, status } = queryParams;

    let query = {
      $and: [],
    };

    if (cpf) query.$and.push({ "patient.cpf": cpf });
    if (dueDate) query.$and.push({ dueDate });
    if (status) query.$and.push({ status });

    const activities = await Activity.find(query.$and.length > 0 ? query : null)
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    const count = await Activity.find(
      query.$and.length > 0 ? query : null
    ).count();

    return { limit: limit, skip: skip, total: count, data: activities };
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
