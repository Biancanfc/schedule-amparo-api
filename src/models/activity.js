const { Schema, model } = require('mongoose');

const activitySchema = new Schema(
  {
    dueDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['Aberto', 'Finalizado', 'Atrasado'],
    },
    activity: {
      type: String,
      required: true,
    },
    patient: {
      name: {
        type: String,
        required: true,
      },
      cpf: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Activity = model('activities', activitySchema);

module.exports = Activity;
