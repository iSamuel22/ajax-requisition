$(document).ready(function () {
    function buscar() {
        $.ajax({
            url: './ClientesJSON.php',
            method: 'GET',
            dataType: 'json',
            success: function (clientes) {
                console.log('Sucess: ', clientes);
                processarDados(clientes);
            },
            error: function (error) {
                console.error('Error: ', error);
            }
        });
    }
    
    function processarDados(clientes) {
        let clienteMaiorReceita = null;
        let clienteMaiorDespesa = null;

        $('#main-container').empty();

        clientes.forEach(cliente => {
            const totalReceitas = calcularSoma(cliente.receitas);
            const totalDespesas = calcularSoma(cliente.despesas);

            const saldo = totalReceitas - totalDespesas;

            if (!clienteMaiorReceita || totalReceitas > clienteMaiorReceita.totalReceitas) {
                clienteMaiorReceita = { nome: cliente.nome, totalReceitas };
            }

            if (!clienteMaiorDespesa || totalDespesas > clienteMaiorDespesa.totalDespesas) {
                clienteMaiorDespesa = { nome: cliente.nome, totalDespesas };
            }

            adicionar(cliente, totalReceitas, totalDespesas, saldo);
        });

        totalizacao(clienteMaiorReceita, clienteMaiorDespesa);
    }

    function calcularSoma(valores) {
        let soma = 0;
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        return soma;
    }

    function adicionar(cliente, totalReceitas, totalDespesas, saldo) {
        const cardCliente = $(`
            <div class="card mt-3">
                <div class="card-body">
                    <img src="${cliente.avatar}" alt="foto-perfil-do-cliente" class="img-thumbnail rounded-circle">
                    <h5 class="card-title d-inline-block ms-2">${cliente.nome}</h5>
                    <ul class="list-group list-group-flush mt-3">
                        <li class="list-group-item text-primary">+<b>Receitas</b>: R$ ${totalReceitas.toFixed(2)}</li>
                        <li class="list-group-item text-danger">-<b>Despesas</b>: R$ ${totalDespesas.toFixed(2)}</li>
                        <li class="list-group-item text-dark"><b>Balanço</b>: R$ ${saldo.toFixed(2)}</li>
                    </ul>
                </div>
            </div>
        `);

        $('#main-container').append(cardCliente);
    }

    function totalizacao(clienteMaiorReceita, clienteMaiorDespesa) {
        if (clienteMaiorReceita) {
            $('#footer-container h6').first().text(clienteMaiorReceita.nome);
            $('#footer-container p.text-primary').html(`<b>Maior Receita</b>: R$ ${clienteMaiorReceita.totalReceitas.toFixed(2)}`);
        }

        if (clienteMaiorDespesa) {
            $('#footer-container h6').last().text(clienteMaiorDespesa.nome);
            $('#footer-container p.text-danger').html(`<b>Maior Despesa</b>: R$ ${clienteMaiorDespesa.totalDespesas.toFixed(2)}`);
        }
    }

    buscar();
});