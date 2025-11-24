document.addEventListener('DOMContentLoaded', () => {
    // --- Tabbed Navigation ---
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Get the target tab content ID
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding content
            tab.classList.add('active');
            targetContent.classList.add('active');
        });
    });
    // --- Project Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hide');
                        card.classList.add('show');
                    } else {
                        card.classList.add('hide');
                        card.classList.remove('show');
                    }
                });
            });
        });
    }
    // --- Mobile Sidebar Toggle ---
    const toggleButton = document.getElementById('dropdown-toggle');
    const collapsibleContent = document.getElementById('collapsible-content');

    if (toggleButton && collapsibleContent) {
        toggleButton.addEventListener('click', () => {
            // Toggle the 'open' class on the content
            collapsibleContent.classList.toggle('open');
            
            // Toggle the 'open' class on the button (for icon rotation)
            toggleButton.classList.toggle('open');
            
            // Update ARIA attribute for accessibility
            const isExpanded = collapsibleContent.classList.contains('open');
            toggleButton.setAttribute('aria-expanded', isExpanded);
        });
    }
});