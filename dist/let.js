"use strict";
require('traceur-source-maps').install(require('traceur'));
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);
{
  try {
    throw undefined;
  } catch ($j) {
    {
      $j = 0;
      for (; $j < 10; $j++) {
        try {
          throw undefined;
        } catch (j) {
          {
            j = $j;
            try {
              console.log(j);
            } finally {
              $j = j;
            }
          }
        }
      }
    }
  }
}
console.log(j);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldC5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBQUMsSUFBUyxHQUFBLENBQUEsQ0FBQSxFQUFFLEVBQUEsQ0FBRyxDQUFBLENBQUEsRUFBRSxHQUFDLENBQUcsQ0FBQSxDQUFBLEVBQUUsQ0FBRztBQUNuRixRQUFNLElBQUksQUFBQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ2Q7QUFBQSxBQUNBLE1BQU0sSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUE7Ozs7OztTQUVGLEVBQUE7V0FBRyxLQUFFLEdBQUMsQ0FBRyxLQUFFOzs7Ozs7Y0FBRztBQUN4QixvQkFBTSxJQUFJLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtZQUNkOzs7Ozs7Ozs7QUFDQSxNQUFNLElBQUksQUFBQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQUEiLCJmaWxlIjoibGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtmb3IgKHZhciBpPTA7IGk8MTA7IGkrKykge1xuXHRjb25zb2xlLmxvZyhpKVxufVxuY29uc29sZS5sb2coaSlcblxuZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspIHtcblx0Y29uc29sZS5sb2coailcbn1cbmNvbnNvbGUubG9nKGopIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9