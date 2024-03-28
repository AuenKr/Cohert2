"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_module_css_1 = __importDefault(require("./page.module.css"));
const button_1 = require("@repo/ui/button");
function Page() {
    return (<div className={page_module_css_1.default.main}>
            hello next js
            <button_1.Button appName="web-app" className={page_module_css_1.default.button}>
                <span>NextJs</span>
            </button_1.Button>
        </div>);
}
exports.default = Page;
