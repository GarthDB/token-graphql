import * as Realm from "realm";

export type StaticColor = {};

export const StaticColorSchema = {
  name: "StaticColor",
  properties: {},
};

export type Task = {
  _id: number;
  name: string;
  status?: string;
};

export const TaskSchema = {
  name: "Task",
  primaryKey: "_id",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
};

export type Test = {
  _id: Realm.ObjectId;
  color?: Task;
};

export const TestSchema = {
  name: "Test",
  primaryKey: "_id",
  properties: {
    _id: "objectId",
    color: "Task",
  },
};

export const Schema = [StaticColorSchema, TaskSchema, TestSchema];
