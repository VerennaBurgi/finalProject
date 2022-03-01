$("#button").on("click", function(){
    var data = {};
    data.name = $("#name").val();
    data.comment = $("#comment").val();
    $('#mainContent').append(`
      <div class="commentBox">

      <div class="left">
      <div class="displayName">${data.name}</div>
      <div class="commentText">${data.comment}</div>
      </div>
  
      <div class="right">
      <div class="editComment">Edit <span
      class="deleteComment">Delete</span></div>
      </div>
      </div>
  `);
  });
  
  $("#mainContent").on("click", '.editCommentButton', function(){
    
    let thingToEditParent = $(this).parent();
    let thingToEdit = $(thingToEditParent).parent();

    $(thingToEdit).css("height","60px");
    texter = $(thingToEdit).find('.commentText');
    editText = $(thingToEdit).find('.editCommentInput');
    
    $(texter).html($(editText).val());

    editText.remove();
    $(this).remove();
  });
  
  $("#mainContent").on("click", '.deleteComment', function(){
    thingToRemove = $(this).parents()
    thingToRemove[2].remove()
  });
  
  $("#mainContent").on("click", '.editComment', function(){
    thingToEdit = $(this).parents();
    $(thingToEdit[1]).css("height","60px");
    $(thingToEdit[1]).append(`
<div class="editor">
      <input class="editCommentInput" name="comment" placeholder="Comment"><span<div class="editCommentButton">Submit</div> </span></textarea>
 
</div>
        `)
  });

