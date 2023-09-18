const form = document.getElementById("form");
const qtd = document.getElementById("qtd");
const qtdN = qtd.value;

const textao = document.getElementById("textaoAqui");
const botao = document.getElementById("submitButton");

const texto = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit a? Necessitatibus omnis sapiente, aperiam corrupti recusandae ducimus consectetur delectus? Nobis necessitatibus pariatur possimus temporibus rem tempora magnam cupiditate. Asperiores!",
    "Accusamus delectus voluptates hic temporibus? Iure quibusdam adipisci optio aperiam culpa, aut, nobis facere molestiae nesciunt rem rerum, nostrum ex? Non, distinctio repellat eligendi reprehenderit asperiores voluptatum incidunt quidem eaque?",
    "Tempore, alias culpa temporibus eius adipisci labore aliquam. Repellat doloremque numquam reiciendis, temporibus ut in, tempora tempore velit nemo provident voluptates inventore. Voluptas quos, non ullam facere voluptatibus maxime vel!",
    "Sit accusamus tenetur rem facere consequuntur fugit tempora voluptates inventore neque. Quas voluptatem, magnam minima totam ullam et. Enim, provident omnis minus debitis hic ad ratione porro quae rem at.",
    "Vitae rerum alias neque quasi eligendi, delectus mollitia at dignissimos magni corrupti blanditiis nam commodi ex, dolorum officiis sapiente fuga harum exercitationem laboriosam. Tempore minima itaque vitae veritatis obcaecati corrupti!",
    "Ad molestiae id accusantium tempora aliquid inventore earum sapiente voluptatibus possimus, tenetur libero fugiat accusamus, repellendus quisquam laboriosam voluptates et mollitia impedit dolore eum error vel suscipit qui. Repudiandae, nobis!",
    "Vel consectetur natus ex veniam rerum maiores, expedita iusto et dicta eos ratione, soluta illo aliquam odit eius quod voluptates doloremque iure. Harum laboriosam esse qui sit eligendi atque ullam!",
    "Accusantium reprehenderit voluptatem dolor. Culpa corporis facilis quis quos blanditiis unde odio soluta, fugit officia molestias, consectetur itaque assumenda aliquam dolor, quia totam? Quos est quisquam soluta tenetur iure sint!",
    "Laborum laboriosam eaque reiciendis neque ratione, fugit consequuntur dignissimos nobis sequi nesciunt aut sunt iste deserunt ipsum nisi saepe, sed perspiciatis voluptatum. Libero voluptatibus laboriosam exercitationem provident adipisci nihil impedit!",
    "Perspiciatis nihil incidunt maxime porro saepe odit, tempora veritatis, distinctio repellendus autem excepturi nisi dicta quia iste obcaecati cumque ipsum fugit. Assumenda quae ipsa amet quidem voluptates laboriosam corporis voluptatibus?",
];

botao.addEventListener("click", (e) => {
e.preventDefault();

const linhas = parseInt(qtd.value);

for (i = 1; i <= linhas; i++) {
    textao.innerHTML += `<p>${texto[i]}</p>`;
}
});