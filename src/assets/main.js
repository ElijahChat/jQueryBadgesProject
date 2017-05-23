$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3762192.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
        for(var i = 0; i < response.courses.completed.length; i++) {
          $('#badges').html('<div class="course"><h3>' + response.courses.completed[i].title + '</h3><img src=' + response.courses.completed[i].badge + '><a href=' + response.courses[i].completed.url + ' target="_blank class="btn btn-primary">See Course</a></div>');
      }
    }
  });
});
