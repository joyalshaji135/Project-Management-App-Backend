// src/models/superAdminModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface superAdminModel extends Document {
  name: string;
  email: string;
  age: number;
  password: string;
}

export type superAdminDocument = superAdminModel & Document;

const superAdminSchema: Schema<superAdminDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
});

// 
export default mongoose.model<superAdminDocument>('superAdmin', superAdminSchema);

