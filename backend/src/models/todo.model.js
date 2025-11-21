import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        createdBy: { type: mongoose.Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
