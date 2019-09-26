"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hash;
function hash(value, key) {
    var gen = computeGen(key);
    var hash = gen.init;

    var i = value.length;
    while (i) {
        hash = hash * gen.multiplier ^ value.charCodeAt(--i);
    }

    return hash >>> gen.shiftValue;
}

function computeGen(key) {
    var i = multiplier = init = shiftValue = key.length;

    while (i) {
        multiplier = multiplier * key.length ^ key.charCodeAt(--i);
        init += key.charCodeAt(--i);
    }

    shiftValue = shiftValue ^ (init ^ multiplier);

    return {
        shiftValue: shiftValue,
        init: init,
        multiplier: multiplier
    };
}
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoYXNoIiwidmFsdWUiLCJrZXkiLCJnZW4iLCJjb21wdXRlR2VuIiwiaW5pdCIsImkiLCJsZW5ndGgiLCJtdWx0aXBsaWVyIiwiY2hhckNvZGVBdCIsInNoaWZ0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztrQkFFd0JBLEk7QUFBVCxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3JDLFFBQUlDLE1BQU1DLFdBQVdGLEdBQVgsQ0FBVjtBQUNBLFFBQUlGLE9BQU9HLElBQUlFLElBQWY7O0FBRUEsUUFBSUMsSUFBSUwsTUFBTU0sTUFBZDtBQUNBLFdBQU9ELENBQVAsRUFBVTtBQUNOTixlQUFRQSxPQUFPRyxJQUFJSyxVQUFaLEdBQTBCUCxNQUFNUSxVQUFOLENBQWlCLEVBQUVILENBQW5CLENBQWpDO0FBQ0g7O0FBRUQsV0FBT04sU0FBU0csSUFBSU8sVUFBcEI7QUFDSDs7QUFFRCxTQUFTTixVQUFULENBQW9CRixHQUFwQixFQUF5QjtBQUNyQixRQUFJSSxJQUFJRSxhQUFhSCxPQUFPSyxhQUFhUixJQUFJSyxNQUE3Qzs7QUFFQSxXQUFPRCxDQUFQLEVBQVU7QUFDTkUscUJBQWNBLGFBQWFOLElBQUlLLE1BQWxCLEdBQTRCTCxJQUFJTyxVQUFKLENBQWUsRUFBRUgsQ0FBakIsQ0FBekM7QUFDQUQsZ0JBQVFILElBQUlPLFVBQUosQ0FBZSxFQUFFSCxDQUFqQixDQUFSO0FBQ0g7O0FBRURJLGlCQUFhQSxjQUFjTCxPQUFPRyxVQUFyQixDQUFiOztBQUVBLFdBQU87QUFDSEUsOEJBREc7QUFFSEwsa0JBRkc7QUFHSEc7QUFIRyxLQUFQO0FBS0giLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc2godmFsdWUsIGtleSkge1xyXG4gICAgbGV0IGdlbiA9IGNvbXB1dGVHZW4oa2V5KTtcclxuICAgIGxldCBoYXNoID0gZ2VuLmluaXQ7XHJcblxyXG4gICAgbGV0IGkgPSB2YWx1ZS5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaSkge1xyXG4gICAgICAgIGhhc2ggPSAoaGFzaCAqIGdlbi5tdWx0aXBsaWVyKSBeIHZhbHVlLmNoYXJDb2RlQXQoLS1pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzaCA+Pj4gZ2VuLnNoaWZ0VmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVHZW4oa2V5KSB7XHJcbiAgICBsZXQgaSA9IG11bHRpcGxpZXIgPSBpbml0ID0gc2hpZnRWYWx1ZSA9IGtleS5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGkpIHtcclxuICAgICAgICBtdWx0aXBsaWVyID0gKG11bHRpcGxpZXIgKiBrZXkubGVuZ3RoKSBeIGtleS5jaGFyQ29kZUF0KC0taSk7XHJcbiAgICAgICAgaW5pdCArPSBrZXkuY2hhckNvZGVBdCgtLWkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnRWYWx1ZSA9IHNoaWZ0VmFsdWUgXiAoaW5pdCBeIG11bHRpcGxpZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpZnRWYWx1ZSxcclxuICAgICAgICBpbml0LFxyXG4gICAgICAgIG11bHRpcGxpZXJcclxuICAgIH07XHJcbn0iXX0=