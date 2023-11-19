import { describe, test, expect, beforeAll } from "@jest/globals";
import FakeApiData from "./sample/index.json"
import { grabPath, grabValue } from "../scripts/searchModule/search";


describe('search module', () => {

    let fakeData = FakeApiData;

    beforeAll(() => {
        fakeData = FakeApiData;
    });

    test('find nested value for object', () => {
        expect(grabValue({
            obj: fakeData, routes: ["taglib", "nested2"]
        })).toMatchObject({ value: 'hi' });
    });

    test('find one before the last item value in array', () => {
        expect(grabValue({
            obj: fakeData, routes: ["last-array-item", "adminGroupID"]
        })).toBe(4);
    });

    test('find last item value in array', () => {
        expect(grabValue({
            obj: FakeApiData, routes: ["last-array-item", "betaServer"]
        })).toBe(true);
    });

    test('find last item value in array', () => {
        expect(grabValue({
            obj: FakeApiData, routes: ["last-array-item", "betaServer"]
        })).toBe(true);
    });

    test('get navigate path in object', () => {
        expect(grabPath({
            obj: FakeApiData, routes: ["taglib", "value"]
        })).toBe(".web-app.taglib.nested1.nested2.value");
    });


    test('get navigate path in array', () => {
        expect(grabPath({
            obj: FakeApiData, routes: ["init-param", "mailHostOverride"]
        })).toEqual(".web-app.servlet[2].init-param.mailHostOverride");
    });



    // Test modes of incorrect routes
    test('select side key (wrong test)', () => {
        expect(grabPath({
            obj: FakeApiData, routes: ["servlet-mapping", "taglib"]
        })).toBe(undefined);
    });

    test('apply nested wrong navigate path in array (wrong test)', () => {
        expect(grabPath({
            obj: FakeApiData, routes: ["servlet-mapping", "nested1"]
        })).toBe(undefined);
    });

    test('get navigate path in array (wrong test)', () => {
        expect(grabPath({
            obj: FakeApiData, routes: ["init-param", "wrong"]
        })).toBe(undefined);
    });
});