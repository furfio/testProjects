import { add, getObj }from './utils';

test('add 1 + 2 to equals 3', () => {
    expect(add(1, 2)).toBe(3);
});

//toEqual recursively checks every field of an object or array
test(`obj1 !=== obj2`, () => {
    const obj1 = getObj(1);
    const obj2 = { objName: 'mike', age: 1 };
    expect(obj1).toEqual(obj2);
});