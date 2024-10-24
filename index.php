<!-- Criando a conexão da pagina com o servidor -->
<?php
    require_once('database/conn.php');

    $tasks = [];
    $sql = $pdo -> query("SELECT * FROM task");

    if($sql -> rowCount() > 0) {
        $tasks = $sql -> fetchAll(PDO::FETCH_ASSOC);
    }

?><!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- jquery --> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- icons --> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <!-- css --> 
    <link rel="stylesheet" href="src/css/style.css">
    <title>PlanIt</title>
</head>
<body>
    <!-- corpo da aplicação --> 
    <div id="to_do">
        <h1>PlanIt.</h1>

        <!-- header --> 
        <form action="actions/create.php" method="POST" class="to-do-form">
            <input type="text" name="description" placeholder="Oque vamos fazer hoje?" required>
            <button type="submit" class="form-button">
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>

        <hr>

        <!-- área das tarefas -->
        <div id="tasks">

            <!-- Trás as informações do banco para a pagina -->
            <?php foreach($tasks as $task): ?>

            <!-- corpo da tarefa -->
            <div class="task">
                <input
                    type="checkbox"
                    name="progress"
                    class="progress"
                    <?= $task['completed'] ? 'checked': '' ?>
                >
                <!-- usamos um ternario de validação para lidar com o check de concluido ou não no banco de dados-->

                <p class="task-description">
                    <?= $task['description']  ?>

                </p>

                <div class="task-actions">
                    <a class="action-button edit-button">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </a>

                    <a href="" class="action-button delete-button">
                        <i class="fa-solid fa-trash-can"></i>
                    </a>
                </div>

                <!-- editar as tarefas -->
                <form action="" class="to-do-form edit-task hidden">
                    <input type="text" name="description" placeholder="Edite a sua task aqui!">
                    <button type= "submit" class="form-button confirm-button">
                        <i class="fa-solid fa-check"></i>
                    </button>

                </form>
            </div>
            <?php endforeach ?>
        </div>
    </div>
    
    <!-- scripts JS -->
    <script src="src/js/script.js"></script>
</body>
</html>