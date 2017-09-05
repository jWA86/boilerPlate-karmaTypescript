import "mocha";
import {expect} from "chai"
import {DummyClass} from "./dummy.js";

describe("test import commonJs module", ()=>{
    it("should say 'Hello Joe'", ()=>{
        let d = new DummyClass("Joe");
        expect(d.hello()).to.equal("Hello Joe");
    });
});
describe("es6 features ", ()=>{
    it("es6 Map should be usable", ()=>{
        let m = new Map();
        m.set("1", "a");
        expect(m.get("1")).to.equal("a");
    });
});