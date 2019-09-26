"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hash;
function hash(value, key) {
    var gen = computeGen(key);
    var hash = gen.i;

    for (var _i = 0; _i < value.length; _i++) {
        hash = hash * gen.m ^ value.charCodeAt(_i);
    }

    return hash >>> gen.s;
}

function computeGen(key) {
    var m = i = s = key.length;

    for (var index = 0; index < key.length; index++) {
        multiplier = multiplier * key.length ^ key.charCodeAt(index);
        init += key.charCodeAt(--i);
    }

    shiftValue = shiftValue ^ (init ^ multiplier);

    return {
        m: m, i: i, s: s
    };
}
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoYXNoIiwidmFsdWUiLCJrZXkiLCJnZW4iLCJjb21wdXRlR2VuIiwiaSIsImxlbmd0aCIsIm0iLCJjaGFyQ29kZUF0IiwicyIsImluZGV4IiwibXVsdGlwbGllciIsImluaXQiLCJzaGlmdFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7a0JBRXdCQSxJO0FBQVQsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxHQUFyQixFQUEwQjtBQUNyQyxRQUFJQyxNQUFNQyxXQUFXRixHQUFYLENBQVY7QUFDQSxRQUFJRixPQUFPRyxJQUFJRSxDQUFmOztBQUVBLFNBQUssSUFBSUEsS0FBSSxDQUFiLEVBQWdCQSxLQUFJSixNQUFNSyxNQUExQixFQUFrQ0QsSUFBbEMsRUFBdUM7QUFDbkNMLGVBQVFBLE9BQU9HLElBQUlJLENBQVosR0FBaUJOLE1BQU1PLFVBQU4sQ0FBaUJILEVBQWpCLENBQXhCO0FBQ0g7O0FBRUQsV0FBT0wsU0FBU0csSUFBSU0sQ0FBcEI7QUFDSDs7QUFFRCxTQUFTTCxVQUFULENBQW9CRixHQUFwQixFQUF5QjtBQUNyQixRQUFJSyxJQUFJRixJQUFJSSxJQUFJUCxJQUFJSSxNQUFwQjs7QUFFQSxTQUFLLElBQUlJLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFSLElBQUlJLE1BQWhDLEVBQXdDSSxPQUF4QyxFQUFpRDtBQUM3Q0MscUJBQWNBLGFBQWFULElBQUlJLE1BQWxCLEdBQTRCSixJQUFJTSxVQUFKLENBQWVFLEtBQWYsQ0FBekM7QUFDQUUsZ0JBQVFWLElBQUlNLFVBQUosQ0FBZSxFQUFFSCxDQUFqQixDQUFSO0FBQ0g7O0FBRURRLGlCQUFhQSxjQUFjRCxPQUFPRCxVQUFyQixDQUFiOztBQUVBLFdBQU87QUFDSEosWUFERyxFQUNBRixJQURBLEVBQ0dJO0FBREgsS0FBUDtBQUdIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNoKHZhbHVlLCBrZXkpIHtcclxuICAgIGxldCBnZW4gPSBjb21wdXRlR2VuKGtleSk7XHJcbiAgICBsZXQgaGFzaCA9IGdlbi5pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYXNoID0gKGhhc2ggKiBnZW4ubSkgXiB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNoID4+PiBnZW4ucztcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUdlbihrZXkpIHtcclxuICAgIGxldCBtID0gaSA9IHMgPSBrZXkubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbXVsdGlwbGllciA9IChtdWx0aXBsaWVyICoga2V5Lmxlbmd0aCkgXiBrZXkuY2hhckNvZGVBdChpbmRleCk7XHJcbiAgICAgICAgaW5pdCArPSBrZXkuY2hhckNvZGVBdCgtLWkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnRWYWx1ZSA9IHNoaWZ0VmFsdWUgXiAoaW5pdCBeIG11bHRpcGxpZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbSwgaSwgc1xyXG4gICAgfTtcclxufSJdfQ==