const uploadButton = document.querySelector('button');
const uploadInput = document.getElementById('upload-file');
const fileListElement = document.getElementById('uploaded-files');

function uploadFiles() {
    const formData = new FormData(uploadInput);
    fetch('/upload', { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fileListElement.innerHTML = '';
                data.files.forEach(file => {
                    const li = document.createElement('li');
                    li.textContent = file;
                    fileListElement.appendChild(li);
                });
            }
        })
        .catch(error => console.error(error));
}
