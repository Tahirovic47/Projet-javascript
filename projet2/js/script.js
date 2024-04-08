
document.getElementById("toggleElement5").addEventListener("click", function() {
    var video = document.getElementById("videoPlayer");
    video.play();
});
const checkboxes = document.querySelectorAll('.toggle');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const content = checkbox.nextElementSibling.nextElementSibling;
        if (checkbox.checked) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
});
