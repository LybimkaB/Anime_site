const mainData = () => {
  const renderAnimeList = (arr, ganres) => {};
  const renderTopAnime = (arr) => {
    const wripper = document.querySelector(".filter__gallery");
    wripper.innerHTML = ``;

    arr.forEach((el) => {
      wripper.insertAdjacentHTML(
        "afterbegin",
        `<div class="product__sidebar__view__item set-bg mix day years"
            data-setbg="${el.image}">
            <div class="ep">${el.rating} / 10</div>
            <div class="view"><i class="fa fa-eye"></i> ${el.views}</div>
            <h5><a href="/anime-details.html">${el.title}</a></h5>
        </div>`
      );
    });

    wripper.querySelectorAll(".set-bg").forEach((el) => {
      el.style.backgroundImage = `url(${el.dataset.setbg})`;
    });
  };

  fetch("./db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const ganres = new Set();

      renderTopAnime(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));

      data.anime.forEach((el) => {
        ganres.add(el.ganre);
      });

      renderAnimeList(data.anime, ganres);
    });
};

mainData();
