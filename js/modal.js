document.addEventListener('DOMContentLoaded', function() {
     function openModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

     function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

     document.querySelectorAll('[data-modal]').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

     document.querySelectorAll('.close').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            var modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });

     window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
});



