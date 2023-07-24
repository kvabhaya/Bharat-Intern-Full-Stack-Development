// This function is called when the user clicks the "Create" button.
function createPost() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var image = document.getElementById("image").files[0];
    var video = document.getElementById("video").files[0];
  
    // Send the post data to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/create-post");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      title: title,
      content: content,
      image: image,
      video: video
    }));
  }
  
  // This function is called when the page loads.
  window.onload = function() {
    // Bind the "Create" button to the "createPost" function.
    document.getElementById("create").onclick = createPost;
  };
  
