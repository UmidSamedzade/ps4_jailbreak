document.getElementById('warningButton').addEventListener('click', function() {
    showWarningNotification();
});

function showWarningNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Hide the notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}
