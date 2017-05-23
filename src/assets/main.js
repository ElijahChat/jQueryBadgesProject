$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3762192.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
        var course;
        courses.forEach(function() {
          course = response.courses.completed;
            $('<div />', {
              'class': 'course'
            }).appendTo($('#badges'));
            var courseDiv = $('<div />', {
              'class': 'course'
            });
            $('<h3 />', {
              text: course.title
            }).appendTo(courseDiv);
            $('<img />', {
              src: course.badge
            }).appendTo(courseDiv);
            $('<a />', {
              href: course.url,
              target: '_blank',
              'class': 'btn btn-primary',
              text: 'See Course'
            }).appendTo(courseDiv);
          });
    }
  });
});
