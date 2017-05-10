$(document).ready(function() {
  console.log("Testing");

  setTimeout(function() {
    console.log("Testing");
    $('.ball').addClass('scale');
  }, 1000);

  setTimeout(function() {
    console.log("Testing");
    $('.user-photo').addClass('user-photo-animate');
  }, 1200);

  setTimeout(function() {
    console.log("Testing");
    $('.user-photo-mask > img').addClass('user-img');
    $('.user-photo-mask > img').addClass('user-img');
  }, 1400);

  setTimeout(function() {
    console.log("Testing");
    $('.user-name').addClass('fadeInUp');
  }, 1500);

  setTimeout(function() {
    console.log("Testing");

    var children = $("ul.lines > li");
    var index = 0;
    //console.log(children);

    function addClassNextChild() {
      console.log("Testing");
      if (index == children.length) return;
      children.eq(index++).addClass('fadeInUp');
      window.setTimeout(addClassNextChild, 200);
    }
    addClassNextChild();
  }, 1600);

});
