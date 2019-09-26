"use strict";

export default function hash(value, key) {
    let gen = computeGen(key);
    let hash = gen.i;

    for (let i = 0; i < value.length; i++) {
        hash = (hash * gen.m) ^ value.charCodeAt(i);
    }

    return hash >>> gen.s;
}

function computeGen(key) {
    let m = i = s = key.length;

    for (let index = 0; index < key.length; index++) {
        multiplier = (multiplier * key.length) ^ key.charCodeAt(index);
        init += key.charCodeAt(--i)
    }

    shiftValue = shiftValue ^ (init ^ multiplier);

    return {
        m, i, s
    };
}