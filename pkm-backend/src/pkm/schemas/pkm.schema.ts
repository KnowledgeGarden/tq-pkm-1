import * as mongoose from 'mongoose';

export const PKMSchema = new mongoose.Schema({
    nodeId: String,
    nodeType: String,
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
})