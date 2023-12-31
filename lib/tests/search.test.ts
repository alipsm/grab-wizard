import { describe, test, expect, beforeAll } from "@jest/globals";
import FakeApiData from "./sample/index.json"
import DiContainer from "../scripts/di/module";
const { grabPath, grabValue } = DiContainer


describe('search module', () => {

    let fakeData = FakeApiData;

    beforeAll(() => {
        fakeData = FakeApiData;
    });

    test('find nested value for object', () => {
        expect(grabValue(fakeData, "taglib.nested2")).toMatchObject({ value: 'hi' });
    });

    test('same path', () => {
        expect(grabValue(fakeData, "taglib.nested2")).toMatchObject({ value: 'hi' });
    });

    test('find one before the last item value in array', () => {
        expect(grabValue(fakeData, "last-array-item.adminGroupID")).toBe(4);
    });

    test('find last item value in array', () => {
        expect(grabValue(FakeApiData, "last-array-item.betaServer")).toBe(true);
    });

    test('find last item value in array', () => {
        expect(grabValue(FakeApiData, "last-array-item.betaServer")).toBe(true);
    });

    test('get navigate path in object', () => {
        expect(grabPath(FakeApiData, "taglib.value"
        )).toBe(".web-app.taglib.nested1.nested2.value");
    });
    
    test('get navigate path in array', () => {
        expect(grabPath(FakeApiData, "init-param.mailHost"
        )).toBe(".web-app.servlet[2].init-param.mailHost");
    });
    
    test('get navigate path with parent array', () => {
        expect(grabPath(FakeApiData, "servlet.mailHost"
        )).toBe(".web-app.servlet[2].init-param.mailHost");
    });

    test('get navigation path with parent array and has exist array inner object data', () => {
        expect(grabPath(FakeApiData, "cars.speed"
        )).toBe(".cars[1].speed");
    });

    // Test modes of incorrect routes
    test('select side key (wrong test)', () => {
        expect(grabPath(FakeApiData, "servlet-mapping.taglib"
        )).toBe(undefined);
    });

    test('apply nested wrong navigate path in array (wrong test)', () => {
        expect(grabPath(FakeApiData, "servlet-mapping.nested1"
        )).toBe(undefined);
    });

    test('get navigate path in array (wrong test)', () => {
        expect(grabPath(FakeApiData, "init-param.wrong"
        )).toBe(undefined);
    });


    let defaultValue = "my default string for wrong operation"
    // Test default value
    test('get default value with set wrong path for grabPath', () => {
        expect(grabPath(FakeApiData, "wrong-path", defaultValue
        )).toBe(defaultValue);
    });

    test('get default value with set wrong path for grabValue', () => {
        expect(grabValue(FakeApiData, "wrong-path", defaultValue
        )).toBe(defaultValue);
    });
});