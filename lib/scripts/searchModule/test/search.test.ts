import { describe, test, expect, beforeEach, beforeAll } from "@jest/globals";
import { findValueByNavigateKey } from "../search";
import FakeApiData from "./data/index.json"
import FakeApiData2 from "../../../data/fakeJson.json"


describe('search module', () => {

    let fakeData = FakeApiData;

    beforeAll(() => {
        fakeData = FakeApiData;
    });

    test('find nested value for object', () => {
        expect(findValueByNavigateKey({
            obj: fakeData, routes: ["taglib", "nested2"], options: {
                getPath: false
            }
        })).toMatchObject({ value: 'hi' });
    });

    test('find one before the last item value in array', () => {
        expect(findValueByNavigateKey({
            obj: fakeData, routes: ["last-array-item", "adminGroupID"], options: {
                getPath: false
            }
        })).toBe(4);
    });

    test('find last item value in array', () => {
        expect(findValueByNavigateKey({
            obj: FakeApiData, routes: ["last-array-item", "betaServer"], options: {
                getPath: false
            }
        })).toBe(true);
    });

    test('find last item value in array', () => {
        expect(findValueByNavigateKey({
            obj: FakeApiData, routes: ["last-array-item", "betaServer"], options: {
                getPath: false
            }
        })).toBe(true);
    });

    test('get navigate path in array', () => {
        expect(findValueByNavigateKey({
            obj: FakeApiData, routes: ["taglib", "value"], options: {
                getPath: true
            }
        })).toEqual(["web-app", "taglib", "nested1", "nested2", "value"]);
    });



    // Test modes of incorrect routes
    test('select side key', () => {
        expect(findValueByNavigateKey({
            obj: FakeApiData, routes: ["servlet-mapping","taglib"], options: {
                getPath: true
            }
        })).toBe(undefined);
    });

    test('apply nested wrong navigate path in array', () => {
        expect(findValueByNavigateKey({
            obj: FakeApiData, routes: ["servlet-mapping","nested1"], options: {
                getPath: true
            }
        })).toBe(undefined);
    });
});