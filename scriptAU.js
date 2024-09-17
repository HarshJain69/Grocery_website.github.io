document.addEventListener('DOMContentLoaded', (event) => {
    const members = document.querySelectorAll('.member');
    members.forEach((member, index) => {
        member.style.setProperty('--delay', index); 
    });
});