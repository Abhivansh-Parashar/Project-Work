document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-desc');
    const fullDesc = document.getElementById('full-desc');
    const shortDesc = document.getElementById('short-desc');
    
    toggleButton.addEventListener('click', function() {
        if (fullDesc.classList.contains('hidden')) {
            // Show more content
            fullDesc.classList.remove('hidden');
            shortDesc.style.display = 'none';
            toggleButton.textContent = 'Show Less';
        } else {
            // Show less content
            fullDesc.classList.add('hidden');
            shortDesc.style.display = 'block';
            toggleButton.textContent = 'Show More';
        }
    });
});