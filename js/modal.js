document.addEventListener('DOMContentLoaded', function() {
    // Function to open a modal
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

    // Function to close a modal
    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    // Event listener to open modals
    document.querySelectorAll('[data-modal]').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Event listener to close modals when clicking the close button
    document.querySelectorAll('.close').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            var modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });

    // Event listener to close modals when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
});
