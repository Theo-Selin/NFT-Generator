const fs = require ("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const rarity = [
    {key: "", val: "original"},
    {key: "_r", val: "rare"},
    {key: "_sr", val: "super rare"},
];

const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if (_str.includes(r.key)) {
            itemRarity = r.val;
        }
    });
    return itemRarity;
};

const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
        name = name.replace(r.key, "");
    });
    return name;
};

const getElements = (path) => {
    return fs
    .readdirSync(path)
    .filter ((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
        return {
            id: index + 1,
            name: cleanName(i),
            fileName: i,
            rarity: addRarity(i),           
        };
    });
};

const layers = [
    {
        location: `${dir}/background/`,
        elements: getElements(`${dir}/background/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        location: `${dir}/base/`,
        elements: getElements(`${dir}/base/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        location: `${dir}/details/`,
        elements: getElements(`${dir}/details/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        location: `${dir}/face/`,
        elements: getElements(`${dir}/face/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        location: `${dir}/top/`,
        elements: getElements(`${dir}/top/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        location: `${dir}/eyes/`,
        elements: getElements(`${dir}/eyes/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
];

module.exports = {layers, width, height};