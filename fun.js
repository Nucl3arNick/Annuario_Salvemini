// Shows one page and hides the other two
function showPage(page) {

    document.querySelector(`#anno`).style.display = 'none';
    document.querySelector(`#nav1`).style.display = 'none';
    document.querySelector(`#nav2`).style.display = 'block';

    
    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'block';
}

// Wait for page to loaded:
document.addEventListener('DOMContentLoaded', function() {

    // Select all buttons
    document.querySelectorAll('button').forEach(button => {

        // When a button is clicked, switch to that page
        button.onclick = function() {
            showPage(this.dataset.page);
        }
    })
});


