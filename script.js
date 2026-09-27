const app = document.getElementById("app");

function carregarPagina() {

    const pagina = window.location.hash;

    if (pagina === "#projetos") {

        app.innerHTML = `
            <section>
                <h2>Projetos Sociais</h2>

                <p>
                    A ONG Esperança desenvolve projetos sociais
                    voltados para pessoas em situação de vulnerabilidade.
                </p>

                <h3>Projeto Educação</h3>

                <p>
                    Ações voltadas para educação e capacitação.
                </p>

                <h3>Projeto Solidariedade</h3>

                <p>
                    Campanhas de arrecadação e distribuição de alimentos.
                </p>
            </section>
        `;

    } else if (pagina === "#cadastro") {

        app.innerHTML = `
            <section>
                <h2>Cadastre-se</h2>

                <p>
                    Cadastre-se para receber informações sobre
                    nossos projetos e ações.
                </p>

                <form>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome">

                    <br><br>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email">

                    <br><br>

                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        `;

    } else {

        app.innerHTML = `
            <section class="feedback-demo">

                <h2>Componentes de Feedback</h2>

                <div class="projeto-status">
                    Projeto Educação
                    <span class="badge">ATIVO</span>
                </div>

                <div class="alerta">
                    <strong>Sucesso!</strong>
                    Cadastro realizado com sucesso.
                </div>

                <div class="toast">
                    ✓ Mensagem enviada com sucesso!
                </div>

            </section>

            <section>
                <h2>Quem Somos</h2>

                <p>
                    A ONG Esperança é uma organização dedicada a promover
                    oportunidades e melhorar a qualidade de vida de pessoas
                    em situação de vulnerabilidade social.
                </p>

                <p>
                    Atuamos por meio de projetos sociais, campanhas de doação
                    e ações de voluntariado, buscando construir uma sociedade
                    mais justa e inclusiva.
                </p>

                <img src="img/ong.jpg"
                     alt="Voluntários da ONG Esperança realizando uma ação social">
            </section>

            <section>
                <h2>Nossa Missão</h2>

                <p>
                    Nossa missão é transformar vidas por meio da solidariedade,
                    da educação e da participação comunitária.
                </p>
            </section>

            <section>
                <h2>Entre em Contato</h2>

                <p><strong>E-mail:</strong> contato@ongespranca.org.br</p>
                <p><strong>Telefone:</strong> (11) 99999-9999</p>
                <p><strong>Endereço:</strong> São Paulo - SP</p>
            </section>
        `;
    }
}

window.addEventListener("hashchange", carregarPagina);

carregarPagina();
