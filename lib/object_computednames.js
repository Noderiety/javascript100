"use strict";
var $__0;
require('traceur-source-maps').install(require('traceur'));
var x = 'foo';
var obj = {};
$traceurRuntime.setProperty(obj, x, true);
var obj2 = ($__0 = {}, Object.defineProperty($__0, x, {
  value: 'hello',
  configurable: true,
  enumerable: true,
  writable: true
}), $__0);
console.log(obj, obj2);
function newObj(key, value) {
  var $__1;
  return ($__1 = {}, Object.defineProperty($__1, key, {
    value: value,
    configurable: true,
    enumerable: true,
    writable: true
  }), $__1);
}
newObj('foo', 'bar');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamVjdF9jb21wdXRlZG5hbWVzLmVzNi5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci85Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLENBQUEsRUFBSSxNQUFJO0VBQ25FLENBQUEsR0FBRSxFQUFJLEdBQUM7QUNEWCxBREVBLGNDRmMsWUFBWSxBQUFDLENERTNCLEdBQUUsQ0FBRSxFQUFBLENBQUssS0FBRyxDQ0RrQyxDRENsQztFQUVSLENBQUEsSUFBRywwQ0FDSixFQUFBO09BQUksUUFBTTs7OztRQUNiO0FBRUEsTUFBTSxJQUFJLEFBQUMsQ0FBQyxHQUFFLENBQUcsS0FBRyxDQUFDLENBQUE7QUFFckIsT0FBUyxPQUFLLENBQUUsR0FBRSxDQUFHLENBQUEsS0FBSTs7QUFDdkIsK0NBQ0csSUFBRTtTQUFJLE1BQUk7Ozs7V0FDYjtBQUNGO0FBRUEsS0FBSyxBQUFDLENBQUMsS0FBSSxDQUFHLE1BQUksQ0FBQyxDQUFBO0FBQUEiLCJmaWxlIjoib2JqZWN0X2NvbXB1dGVkbmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpO2xldCB4ID0gJ2ZvbydcbmxldCBvYmogPSB7fVxub2JqW3hdID0gdHJ1ZVxuXG5sZXQgb2JqMiA9IHtcbiAgW3hdOiAnaGVsbG8nXG59XG5cbmNvbnNvbGUubG9nKG9iaiwgb2JqMilcblxuZnVuY3Rpb24gbmV3T2JqKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBba2V5XTogdmFsdWVcbiAgfVxufVxuXG5uZXdPYmooJ2ZvbycsICdiYXInKSIsIiR0cmFjZXVyUnVudGltZS5zZXRQcm9wZXJ0eSgkX19wbGFjZWhvbGRlcl9fMCxcbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9