document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ELEMENTOS
    ================================= */

    const likeBtn = document.querySelector(".like-btn");
    const likeCountSpan = document.querySelector(".like-count");
    const othersCountSpan = document.querySelector(".others-count");

    const postMedia = document.querySelector(".post-media");
    const doubleClickHeart = document.querySelector(".double-click-heart");

    const bookmarkBtn = document.querySelector(".bookmark-btn");


    /* ================================
       ESTADO INICIAL
    ================================= */

    let isLiked = false;

    // Número inicial de curtidas
    let baseLikes = 1200;

    // Número inicial exibido em "235 others"
    let othersLikes = 235;


    /* ================================
       FORMATAR NÚMEROS
    ================================= */

    function formatLikes(num) {

        if (num >= 1000) {

            return (num / 1000)
                .toFixed(1)
                .replace(".0", "") + "K";

        }

        return num.toString();
    }


    /* ================================
       ATUALIZAR CONTADORES
    ================================= */

    function updateLikeCount() {

        if (likeCountSpan) {

            likeCountSpan.textContent =
                formatLikes(baseLikes);

        }

        if (othersCountSpan) {

            othersCountSpan.textContent =
                othersLikes + " others";

        }
    }


    /* ================================
       ANIMAÇÃO DO CORAÇÃO PEQUENO
    ================================= */

    function animateSmallHeart() {

        if (!likeBtn) return;

        likeBtn.classList.remove("animate-heart");

        // Reinicia a animação
        void likeBtn.offsetWidth;

        likeBtn.classList.add("animate-heart");

        setTimeout(() => {

            likeBtn.classList.remove("animate-heart");

        }, 300);
    }


    /* ================================
       ANIMAÇÃO DO CORAÇÃO GRANDE
    ================================= */

    function showBigHeart() {

        if (!doubleClickHeart) return;

        doubleClickHeart.classList.remove("show");

        // Reinicia a animação
        void doubleClickHeart.offsetWidth;

        doubleClickHeart.classList.add("show");

        setTimeout(() => {

            doubleClickHeart.classList.remove("show");

        }, 800);
    }


    /* ================================
       CURTIR
    ================================= */

    function addLike() {

        // Se já está curtido, não adiciona novamente
        if (isLiked) return;

        isLiked = true;

        baseLikes++;
        othersLikes++;

        if (likeBtn) {

            likeBtn.classList.add("liked");

        }

        updateLikeCount();

        animateSmallHeart();
    }


    /* ================================
       DESCURTIR
    ================================= */

    function removeLike() {

        // Se não está curtido, não remove
        if (!isLiked) return;

        isLiked = false;

        baseLikes = Math.max(0, baseLikes - 1);
        othersLikes = Math.max(0, othersLikes - 1);

        if (likeBtn) {

            likeBtn.classList.remove("liked");

        }

        updateLikeCount();
    }


    /* ================================
       BOTÃO DE CURTIDA
    ================================= */

    if (likeBtn) {

        likeBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            if (isLiked) {

                removeLike();

            } else {

                addLike();

            }

        });

    }


    /* ================================
       DUPLO CLIQUE NA FOTO
    ================================= */

    if (postMedia) {

        postMedia.addEventListener("dblclick", (event) => {

            event.preventDefault();

            event.stopPropagation();

            // Mostra o coração grande
            showBigHeart();

            // Dá like somente se ainda não estiver curtido
            if (!isLiked) {

                addLike();

            } else {

                // Mesmo já curtido, mostra a animação
                animateSmallHeart();

            }

        });

    }


    /* ================================
       BOTÃO SALVAR
    ================================= */

    if (bookmarkBtn) {

        let isBookmarked = false;

        bookmarkBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            isBookmarked = !isBookmarked;

            bookmarkBtn.classList.toggle(
                "bookmarked",
                isBookmarked
            );

        });

    }


    /* ================================
       INICIALIZAÇÃO
    ================================= */

    updateLikeCount();

});