const mongoose = require("mongoose");

const listingsAndReviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    property_type: {
        type: String,
        required: true,
    },
});

const listingsAndReviews = mongoose.model("listingsAndReviews", listingsAndReviewsSchema);

module.exports = listingsAndReviews;