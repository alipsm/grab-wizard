import { describe, test, expect, beforeAll } from "@jest/globals";
import FakeApiData from "./sample/index.json"
const { grabPath, grabValue } = require("../scripts/searchModule/search")


describe('search module', () => {

    let fakeData = FakeApiData;

    beforeAll(() => {
        fakeData = FakeApiData;
    });

    test('find nested value for object', () => {
        expect(grabValue(fakeData, ["taglib", "nested2"])).toMatchObject({ value: 'hi' });
    });

    test('find one before the last item value in array', () => {
        expect(grabValue(fakeData, ["last-array-item", "adminGroupID"])).toBe(4);
    });

    test('find last item value in array', () => {
        expect(grabValue(FakeApiData, ["last-array-item", "betaServer"])).toBe(true);
    });

    test('find last item value in array', () => {
        expect(grabValue(FakeApiData, ["last-array-item", "betaServer"])).toBe(true);
    });

    test('get navigate path in object', () => {
        expect(grabPath(FakeApiData, ["taglib", "value"]
        )).toBe(".web-app.taglib.nested1.nested2.value");
    });


    test('get navigate path in array', () => {
        expect(grabPath(FakeApiData, ["init-param", "mailHostOverride"]
        )).toBe(".web-app.servlet[2].init-param.mailHostOverride");
    });



    // Test modes of incorrect routes
    test('select side key (wrong test)', () => {
        expect(grabPath(FakeApiData, ["servlet-mapping", "taglib"]
        )).toBe("");
    });

    test('apply nested wrong navigate path in array (wrong test)', () => {
        expect(grabPath(FakeApiData, ["servlet-mapping", "nested1"]
        )).toBe("");
    });

    test('get navigate path in array (wrong test)', () => {
        expect(grabPath(FakeApiData, ["init-param", "wrong"]
        )).toBe("");
    });
});