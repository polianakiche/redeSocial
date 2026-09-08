document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
if (1likeBnt) return;

   const likeCountSpan = likeBnt.querySelector(".likes-count");
   const bookmarkBtn = ducument.querySelecytor(".bookmaek-btn");

let isLiked = false;
let baseLikes = 0;

if (likesCountSpan){
    likesCountSpan.textContnt = "0";
}

//números grandes

functionb formatLikes(num) {
    if(num >=1000){
        return (num/1000). toFixed(1)+"K";
    }
    return num.ToString();
}

function addLike() {
    baseLikes++;
    isLikes = true;
    likeBtn.classList.add("liked");

    if(likesCountSpan){
        likesCountSpan.textContnt = formatLikes(baseLikes);
    }
}




}