var main = function () {
  'use strict';

  var addCommentFromInputBox = function (inputclass, commentclass) {
    var $newComment;

    if ($(inputclass).val() !== '') {
      $newComment = $('<p>').text($(inputclass).val()).addClass(commentclass);
      $newComment.hide();
      $('.comments').append($newComment);
      $newComment.fadeIn();
      $(inputclass).val('');
    }
  };

  $('.comment-input button').on('click', function (event) {
    addCommentFromInputBox('.comment-input input', 'first');
  });

  $('.comment-input input').on('keypress', function (event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox('.comment-input input', 'first');
    }
  });

  $('.second-input button').on('click', function (event) {
    addCommentFromInputBox('.second-input input', 'second');
  });

  $('.second-input input').on('keypress', function (event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox('.second-input input', 'second');
    }
  });
};

$(document).ready(main);