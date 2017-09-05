import {DummyToImportClass} from "./dummyToImport";

export class DummyClass {
    constructor(public name:string) {}

    public hello(): string {
        let d = new DummyToImportClass(this.name);
        return d.hello;
    }
}