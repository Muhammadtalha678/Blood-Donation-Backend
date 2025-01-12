import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    weight: { type: Number },
    disease: { type: String, default: "None" }, // Optional field
    lastDonated: { type: Date, default: null }, // Nullable date
    medicines: { type: [String], default: [] }, // Array of medicines
    takingAntibiotics: { type: Boolean, default: false }, // True if antibiotics are taken
    role: { type: String, enum: ["user",'admin'], default: "user" }, 
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
