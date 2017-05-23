$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3762192.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      for(var i = 0; i < courses.completed; i++) {
        $('#badges').appendChild('<div class="course"><h3>' + courses.completed.title + '</h3><img src=' + courses.completed.badge + '><a href=' + courses.completed.url + ' target="_blank class="btn btn-primary">See Course</a></div>');
      }
    }
  });
});
