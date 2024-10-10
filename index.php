<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./src/Utils/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Questão 1 - Avaliação Prog. Web</title>
</head>
<body>
    <main class="container" id="main-container">
        <!-- Estrutura com dados do usuário -->
        <div class="card mt-3">
            <div class="card-body">
                <img src="./src/Database/images/100.png" alt="user-profile-photo" class="img-thumbnail rounded-circle">
                <h5 class="card-title d-inline-block ms-2">Nome</h5>
                <ul class="list-group list-group-flush mt-3">                    
                    <li class="list-group-item text-primary">+<b>Receitas</b>: R$ 0.00</li>
                    <li class="list-group-item text-danger">-<b>Despesas</b>: R$ 0.00</li>
                    <li class="list-group-item text-dark"><b>Balanço</b>: R$ 0.00 </li>
                </ul>
            </div>
        </div>  
    </main>  

    <!-- Estrutura com os totalizadores -->
    <footer class="container" id="footer-container"> 
        <div class="card mt-3">
            <h5 class="card-title d-inline-block ms-3 mb-2 mt-3">Totalizadores</h5>
            <div class="card-body">
                <h6>Nome Cliente</h6>                                
                <p class="text-primary"><b>Maior Receita</b>: R$ 0.00</p>
                                
                <h6>Nome Cliente</h6>                
                <p class="text-danger"><b>Maior Despesa</b>: R$ 0.00</p>
            </div>
        </div>`               
    </footer>
    
    <script src="./src/Utils/jquery.min.js"></script>
    <script src="./src/Utils/script.js"></script>
    
</body>
</html>
