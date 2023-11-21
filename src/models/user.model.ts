import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true})
export class User { }

export const UserSchema = SchemaFactory.createForClass(User);