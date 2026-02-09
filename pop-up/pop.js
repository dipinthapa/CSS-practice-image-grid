const showModalBtn = document.getElementById('showModal');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('closeBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        const confirmBtn = document.getElementById('confirmBtn');

        // Show modal
        showModalBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
        });

        // Close modal
        const closeModal = () => {
            modalOverlay.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        confirmBtn.addEventListener('click', () => {
            alert('Confirmed!');
            closeModal();
        });

        // Close on overlay click
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });