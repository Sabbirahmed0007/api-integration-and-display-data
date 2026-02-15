const loadPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      ShowPosts(data);
    });
};

const ShowPosts = (posts) => {
  const showPosts = document.getElementById("showData");
  showPosts.innerHTML = "";

  // Loading posts

  posts.forEach((post) => {
    console.log(post);

    const postCard = document.createElement("div");
    postCard.innerHTML = `
      <div id="post-card" class="border-solid border p-3 mx-auto h-full  rounded-xl shadow-lg ">
            <h3 class="text-xl font-semibold my-2">${post.title}</h3>
            <p class="text-justify ">${post.body}</p>
        </div> 
    `;
    // postCard.className = "bg-gray-200 p-3 rounded m-3 capitalize";
    showPosts.append(postCard);
  });
};
