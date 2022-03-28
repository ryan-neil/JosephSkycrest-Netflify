import { projects } from '../../data/projects.js';

const renderProjects = () => {
  // get dom elements
  const loadingDOM = document.querySelector('.loading');
  const projectsDOM = document.querySelector('.projects-list');

  // show loading
  loadingDOM.style.visibility = 'visible';

  // render projects to DOM
  const allProjects = projects
    .map((item) => {
      const { type, name, description, technologies, links, image } = item;

      const tech = technologies
        .map((item) => {
          return `
					<p class="tech-item">${item}</p>
				`;
        })
        .join('');

      return `
				<article class="project-card">
					<!-- Project content section -->
					<div class="project-card__item text">
						<!-- Type -->
						<div class="project-type">${type}</div>

						<!-- Name -->
						<h3 class="project-name">${name}</h3>

						<!-- Description -->
						<p class="project-desc">${description}</p>

						<!-- Technologies -->
						<h3>Tech Stack:</h3>
						<div class="project-tech">${tech}</div>
						
						<!-- Icons -->
						<div class="project-icons">
							<!-- Github -->
							<a
								href="${links.github.href}"
								title="${links.github.title}"
								aria-label="${links.github.ariaLabel}"
								target="blank"
							>
								<button>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
								</button>
								</a>
								<!-- Live -->
								<a
								href="${links.live.href}"
								title="${links.live.title}"
								aria-label="${links.live.ariaLabel}"
								target="blank"
								>
								<button>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-radio"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
								</button>
							</a>
						</div>
					</div>

					<!-- Project image section -->
					<div class="project-card__item img">
						<img 
							src="${image.src}" 
							alt="${image.alt}" 
						/>
					</div>
				</article>
			`;
    })
    .join('');

  projectsDOM.innerHTML = allProjects;

  // hide loading
  loadingDOM.style.visibility = 'hidden';
};
renderProjects();
