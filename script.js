const div_bandeiras = document.getElementById("bandeiras");
const div_texto = document.getElementById("texto");

/*
	A FUNÇÃO ABAIXO CARREGA OS DADOS DO ENDEREÇO REMOTO EM UMA CONSTANTE response 
  E OS OBJETOS .JSON DA RESPOSTA SÃO ATRIBUIDOS À CONSTANTE data, ASSIM, OS OBJETOS 
  COM CHAVE estados SÃO REPASSADOS À CONSTANTE estados. POSTERIORMENTE, O MÉTODO MAP 
  MAPEIA A VARIÁVEL estados, POIS ELA ARMAZENA AS CHAVES estados E ENVIA À VARIÁVEL estado, 
  A QUAL SOFRERÁ AS OPERAÇÕES DA FUNÇÃO A SEGUIR. A FUNÇÃO CRIA AS VARIÁVEIS h3, descrição 
  E bandeira PARA CADA ELEMENTO DENTRO DA VARIÁVEL estados E ATRIBUI VALORES DE TEXTO PARA CADA VARIÁVEL 
  REFERENCIADOS PELAS CHAVES nome, descricao E bandeira_url. APÓS ISSO, ESSAS VARIÁVEIS SÃO ANEXADAS COMO FILHOS NA CONSTANTE div_bandeiras

*/
 
async function carregarDados() {
  const response = await fetch("https://mauriciodiias.github.io/estadosDoBrasil/data.json");ponse
  const data = await response.json();
  const estados = data.estados;
  console.log(response)

  estados.map((estado) => { 
    let h3 = document.createElement("h3");
    h3.textContent = estado.nome;

    let descricao = document.createElement("p");
    descricao.textContent = estado.descricao;
    

    let bandeira = document.createElement("img");
    bandeira.setAttribute("src", estado.bandeira_url);
    bandeira.setAttribute("width", "200px");
    bandeira.addEventListener("click", () => carregarTexto(estado));
    

    div_bandeiras.appendChild(h3);
    div_bandeiras.appendChild(bandeira);
  });
}

function carregarTexto(estado){
    div_texto.innerHTML = '';
    let nome = document.createElement('h3');
    nome.textContent = estado.nome;
    div_texto.appendChild(nome);

    let descricao = document.createElement('p');
    descricao.textContent = estado.descricao
    div_texto.appendChild(descricao)
}


carregarDados();
