import {create, done, getAll} from "../items.js";

const mockData = {
    data: [{id: 1, task: "1"}]
};
jest.mock('../../utils/fileUtils.js', () => {
    return {
        readFile: jest.fn(() => {
            return JSON.stringify(mockData.data);
        }),
        writeFile: jest.fn((data) => {
            mockData.data = data;
        })
    }
});

jest.mock('uuid', () => {
    return {
        v4: jest.fn().mockReturnValueOnce("uuid").mockReturnValueOnce("uuid2")
    }
});

describe('items', () => {
    it('should get all items', () => {
        expect(getAll()).toStrictEqual([{
            id: 1,
            task: "1"
        }]);
    });

    it('should remove the item if done', () => {
        done(1);
        expect(getAll()).toStrictEqual([]);
    })

    it('should add one more item if create', () => {
        create("abc");
        create("def")
        expect(getAll()).toStrictEqual([
            {id: "uuid", task: "abc"},
            {id: "uuid2", task: "def"}
        ]);
    })
})