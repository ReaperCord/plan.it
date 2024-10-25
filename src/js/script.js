$(document).ready(function() {
    //botão de editar
    $('.edit-button').on('click', function() {
        
        var $task = $(this).closest('.task');

        $task.find('.progress').addClass('hidden');
        $task.find('.task-description').addClass('hidden');
        $task.find('.task-actions').addClass('hidden');
        $task.find('.edit-task').removeClass('hidden');
    });

    //estilo de conclusão de tarefa
    $('.progress').on('click', function() {
        
        if($(this).is(':checked')) {
            $(this).addClass('done');

        } else {
            $(this).removeClass('done');
        }
    });

    //ajax para manipulação de DOM
    $('.progress').on('change', function () {
        const id = $(this).data('task-id');
        const completed = $(this).is(':checked') ? 'true' : 'false';
        
        console.log('ID:', id, 'Completed:', completed);
        $.ajax({
            url: 'actions/update_progress.php',
            method: 'POST',
            data: {id: id, completed: completed},
            dataType: 'json',
            success: function (response) {
                if (response.success) {

                } else {
                    console.log('Erro ao editar a tarefa ');
                }
            },
            error: function () {
                alert('Ocorreu um erro');
            }
        });
    })
});