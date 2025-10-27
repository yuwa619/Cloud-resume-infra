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