function populateList(cupcakes) {
    for (const cupcake of cupcakes) {
        $('.cupcakes-list').append(`<li class="cupcake">
        <img src=${cupcake["image"]}>
        <br>
        ${cupcake["flavor"]} Size : ${cupcake["size"]} Rating : ${cupcake["rating"]}
        </li>`);
    }
}

async function getCupcakes() {
    const response = await axios.get('/api/cupcakes');
    populateList(response.data.cupcakes)
}

getCupcakes();

$('.new-cupcake-form').submit((event) => {
    event.preventDefault();
    let flavor = $("#flavor").val();
    let rating = $("#rating").val();
    let size = $("#size").val();
    let image = $("#image").val();

    axios.post(`/api/cupcakes`, {
        flavor,
        rating,
        size,
        image
    });

    $('.cupcakes-list').append(`<li class="cupcake">
        <img src=${image}>
        <br>
        ${flavor} Size : ${size} Rating : ${rating}
        </li>`
    );
    $('.new-cupcake-form').trigger("reset");
});