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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldC5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzFELElBQVMsR0FBQSxDQUFBLENBQUEsRUFBRSxFQUFBLENBQUcsQ0FBQSxDQUFBLEVBQUUsR0FBQyxDQUFHLENBQUEsQ0FBQSxFQUFFLENBQUc7QUFDeEIsUUFBTSxJQUFJLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNkO0FBQUEsQUFFQSxNQUFNLElBQUksQUFBQyxDQUFDLENBQUEsQ0FBQyxDQUFBOzs7Ozs7U0FHRixFQUFBO1dBQUcsS0FBRSxHQUFDLENBQUcsS0FBRTs7Ozs7O2NBQUc7QUFDeEIsb0JBQU0sSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUE7WUFDZDs7Ozs7Ozs7O0FBR0EsTUFBTSxJQUFJLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUFBIiwiZmlsZSI6ImxldC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7Ly8gcHJpbnQgMC05XG5mb3IgKHZhciBpPTA7IGk8MTA7IGkrKykge1xuXHRjb25zb2xlLmxvZyhpKVxufVxuLy8gcHJpbnQgMTBcbmNvbnNvbGUubG9nKGkpXG5cbi8vIHByaW50IDAtOVxuZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspIHtcblx0Y29uc29sZS5sb2coailcbn1cblxuLy8gdGhyb3dzIFJlZmVyZW5jZUVycm9yXG5jb25zb2xlLmxvZyhqKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==