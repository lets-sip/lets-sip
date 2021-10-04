const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
    name: String,
    // drink: String,
    instructions: String,
    image: String,
    ingredients: Array,
    // measure: Array,
    likes: { type: Number, default: 0 },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
},
    { timestamps: true }
)

module.exports = model('Drink', drinkSchema);