$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3762192.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
      var course;
        for(var i = 0; i < response.courses.completed.length; i++) {
          course = response.courses.completed[i];
          $('#badges').html('<div class="course"><h3>' + course.title + '</h3><img src=' + course.badge + '><a href=' + course.url + ' target="_blank class="btn btn-primary">See Course</a></div>');
      }
    }
  });
});
