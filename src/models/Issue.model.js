import mongoose, { Schema } from "mongoose";

const issueSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            // Frontend se match karne ke liye Caps mein rakha hai
            enum: ["TODO", "IN PROGRESS", "DONE", "BACKLOG"],
            default: "TODO",
        },
        priority: {
            type: String,
            // "HIGH" validation error ab nahi aayega
            enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
            default: "MEDIUM",
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: false, // Development phase ke liye false hai
        },
    },
    {
        timestamps: true,
    }
);

// Search optimization ke liye index (Optional par achha hai)
issueSchema.index({ title: "text", description: "text" });

export const Issue = mongoose.model("Issue", issueSchema);