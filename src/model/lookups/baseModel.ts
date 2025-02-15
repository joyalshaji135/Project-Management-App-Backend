// import mongoose, { Schema, Document } from "mongoose";
// import { UserDocument } from "./userModel";

// export interface BaseDocument extends Document {
//   status: boolean;
//   isDeleted: boolean;
//   userUpdatedDate: Date;
//   userUpdatedBy: mongoose.Types.ObjectId | UserDocument;
//   createdBy: mongoose.Types.ObjectId;
//   updatedBy: mongoose.Types.ObjectId;
//   deletedBy: mongoose.Types.ObjectId;
//   deletedAt: Date;
//   isDefault: boolean;
// }

// export const BaseSchema = new Schema<BaseDocument>(
//   {
//     status: { type: Boolean, default: true },
//     isDeleted: { type: Boolean, default: false },
//     createdBy: { type: Schema.Types.ObjectId, ref: "User" },
//     userUpdatedDate: { type: Date },
//     userUpdatedBy: { type: Schema.Types.ObjectId, ref: "User" },
//     updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
//     deletedBy: { type: Schema.Types.ObjectId, ref: "User" },
//     deletedAt: { type: Date },
//     isDefault: { type: Boolean, default: true },
//   },
//   { timestamps: true },
// );
