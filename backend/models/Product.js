const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
        },

        category: {
            type: String,
            required: true,
        },

        brand: {
            type: String,
            required: true,
        },

        images: {
            type: [String],
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        originalPrice: {
            type: Number,
            required: true,
        },

        rating: {
            type: Number,
            default: 0,
        },

        discount: {
            type: Number,
            default: 0,
        },

        reviewCount: {
            type: Number,
            default: 0,
        },

        description: {
            type: String,
            required: true,
        },

        specifications: {
            type: [specificationSchema],
            default: [],
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        salesCount: {
            type: Number,
            default: 0,
        },

        inStock: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);