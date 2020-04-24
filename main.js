for (let i = 1; i < 3; i++) {
    let toggleBtn = document.getElementById('li-toggle-' + i);
    toggleBtn.addEventListener('click', openClose);

    function openClose() {
        let toggleContent = document.getElementsByClassName(this.dataset.id);

        for (let k = 0; k < toggleContent.length; k++) {
            if (toggleContent[k].style.display == 'none') {
                toggleContent[k].style.display = 'list-item';
                toggleBtn.innerHTML = 'Less <<';
            }
            else if (toggleContent[k].style.display == 'list-item') {
                toggleContent[k].style.display = 'none';
                toggleBtn.innerHTML = 'More >>';
            }
        }
    }
}