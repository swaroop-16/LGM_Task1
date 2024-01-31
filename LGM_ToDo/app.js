$(document).ready(function () {
    let totalTasks = 0;
    let completedTasks = 0;

    // Function to add a new task
    window.addTask = function () {
        const taskInput = $('#task');
        const dateInput = $('#date');
        const taskText = taskInput.val();
        const taskDate = dateInput.val();

        if (taskText.trim() !== '') {
            const listItem = $('<li>').text(`${taskText} - ${taskDate}`);
            const deleteButton = $('<button>').text('Delete').click(function () {
                listItem.remove();
                updateProgress();
            });

            listItem.append(deleteButton);
            $('#task-list').append(listItem);
            taskInput.val('');
            dateInput.val('');
            totalTasks++;
            updateProgress();
        }
    };

    // Mark task as completed (strikethrough)
    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
        if ($(this).hasClass('completed')) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateProgress();
    });
});
