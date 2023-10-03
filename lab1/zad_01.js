"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function randomUserId() {
    return Math.floor(Math.random() * 50) + 1;
}
const id = randomUserId();
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users/13`);
            let posts = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts?userId=13`);
            return posts;
        }
        catch (err) {
            return 'user not found';
        }
    });
}
getPosts().then((res) => {
    console.log(res);
});
