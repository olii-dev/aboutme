let allProjects = [];

document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    allProjects = Array.from(projectList.getElementsByClassName('floating-card'));

    allProjects.forEach((project, index) => {
        project.setAttribute('data-index', index);
    });
});

function sortProjects() {
    const projectList = document.getElementById('project-list');
    const sortOrder = document.getElementById('sort-select').value;

    let filteredProjects = [...allProjects];

    if (sortOrder === 'most-popular') {
        const popularityOrder = [
            "OliDraw",
            "Terminal Portfolio",
            "Penfolio",
            "Pizza Topping Generator",
            "Sliffer",
            "How many hours left?",
            "DevDeck"
        ];
        filteredProjects.sort((a, b) => {
            const titleA = a.querySelector('h1 a').textContent;
            const titleB = b.querySelector('h1 a').textContent;
            return popularityOrder.indexOf(titleA) - popularityOrder.indexOf(titleB);
        });
    } else if (sortOrder === 'paused') {
        filteredProjects = filteredProjects.filter(project => {
            const status = project.querySelector('.status p').textContent.toLowerCase();
            return status === 'paused';
        });
    } else if (sortOrder === 'published') {
        filteredProjects = filteredProjects.filter(project => {
            const status = project.querySelector('.status p').textContent.toLowerCase();
            return status === 'published';
        });
    } else if (sortOrder === 'work-in-progress') {
        filteredProjects = filteredProjects.filter(project => {
            const status = project.querySelector('.status p').textContent.toLowerCase();
            return status === 'work in progress';
        });
    } else {
        filteredProjects.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
    }

    projectList.innerHTML = '';
    filteredProjects.forEach(project => projectList.appendChild(project));
}
