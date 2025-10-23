// start manu button toggle code
const menuBtn = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');

const toggleMenu = () => {
    menuNav.classList.toggle('show-menu');
    
    const icon = menuBtn.querySelector('i');
    if (menuNav.classList.contains('show-menu')) {
        icon.classList.remove('uil-bars');
        icon.classList.add('uil-times');
        menuNav.style.display='block';
    } else {
        icon.classList.remove('uil-times');
        icon.classList.add('uil-bars');
        menuNav.style.display='none';
    }
};

menuBtn.addEventListener('click', toggleMenu);

const navLinks = menuNav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1024) { 
            toggleMenu();
        }
    });
});
// End of manu button toggle code

// start search button code
const searchInput = document.getElementById('search-input');
const searchContainer = document.getElementById('search-container');
const memberCards = document.querySelectorAll('.team__member');

function filterMembers() {
    const query = searchInput.value.toLowerCase();
    memberCards.forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        const roll = card.querySelector('p').textContent.toLowerCase();
        if (name.includes(query) || roll.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('input', filterMembers);
}

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');

    searchIcon.addEventListener('click', function() {
        // Toggle the 'expanded' class on the container
        searchContainer.classList.toggle('expanded');

        // Focus the input field when it expands, for immediate typing
        if (searchContainer.classList.contains('expanded')) {
            searchInput.focus();
        } else {
            // Blur the input when it collapses
            searchInput.blur();
        }
    });

    // Collapse the search bar when the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target) && searchContainer.classList.contains('expanded')) {
            searchContainer.classList.remove('expanded');
        }
    });
});
// end search button code