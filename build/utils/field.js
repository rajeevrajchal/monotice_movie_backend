"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uEnum = exports.dEnum = exports.rEnum = exports.uObject = exports.dObject = exports.rObject = exports.uArray = exports.dArray = exports.rArray = exports.uBool = exports.dBool = exports.rBool = exports.uNumber = exports.dNumber = exports.rNumber = exports.unEmail = exports.uEmail = exports.urEmail = exports.rEmail = exports.uString = exports.dString = exports.rString = void 0;
exports.rString = {
    type: String,
    required: true,
};
exports.dString = {
    type: String,
    default: '',
    required: false,
};
exports.uString = {
    type: String,
    required: false,
};
exports.rEmail = {
    type: String,
    required: true,
    unique: true,
};
exports.urEmail = {
    type: String,
    required: true,
    unique: true,
};
exports.uEmail = {
    type: String,
    required: false,
    unique: true,
};
exports.unEmail = {
    type: String,
    required: false,
    unique: false,
};
exports.rNumber = {
    type: Number,
    required: true,
    default: 0,
};
exports.dNumber = {
    type: Number,
    default: 0,
    required: false,
};
exports.uNumber = {
    type: Number,
    required: false,
};
exports.rBool = {
    type: Boolean,
    required: true,
};
exports.dBool = {
    type: Boolean,
    default: false,
    required: false,
};
exports.uBool = {
    type: Boolean,
    required: false,
};
exports.rArray = {
    type: Array,
    required: true,
};
exports.dArray = {
    type: Array,
    default: [],
    required: false,
};
exports.uArray = {
    type: Array,
    required: false,
    default: undefined,
};
exports.rObject = {
    type: Object,
    required: true,
};
exports.dObject = {
    type: Object,
    default: {},
    required: false,
};
exports.uObject = {
    type: Object,
    required: false,
};
var rEnum = function (values) { return ({
    type: String,
    enum: values,
    required: true,
}); };
exports.rEnum = rEnum;
var dEnum = function (values) { return ({
    type: String,
    enum: values,
    default: values[0],
    required: false,
}); };
exports.dEnum = dEnum;
var uEnum = function (values) { return ({
    type: String,
    enum: values,
    required: false,
}); };
exports.uEnum = uEnum;
//# sourceMappingURL=field.js.map