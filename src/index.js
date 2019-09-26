"use strict";

export default function hash(value, key) {
    let gen = computeGen(key);
    let hash = gen.init;

    let i = value.length;
    while (i) {
        hash = (hash * gen.multiplier) ^ value.charCodeAt(--i);
    }

    return hash >>> gen.shiftValue;
}

function computeGen(key) {
    let i = multiplier = init = shiftValue = key.length;

    while (i) {
        multiplier = (multiplier * key.length) ^ key.charCodeAt(--i);
        init += key.charCodeAt(--i)
    }

    shiftValue = shiftValue ^ (init ^ multiplier);

    return {
        shiftValue,
        init,
        multiplier
    };
}