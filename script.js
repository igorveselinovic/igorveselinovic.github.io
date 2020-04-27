const TECHS = {
  aws: {
    color: '#F7A80D'
  },
  c: {
    color: '#03599C'
  },
  go: {
    color: '#00ADD8'
  },
  java: {
    color: '#EA2D2E'
  },
  javascript: {
    color: '#DA1884'
  },
  nodejs: {
    color: '#83CD29'
  },
  python: {
    color: '#FFD845'
  },
  terraform: {
    color: '#5C4EE5'
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.width === '350px') {
    sidebar.style.width = '60px';
  } else {
    sidebar.style.width = '350px';
  }
}

const COLOR_CONTENT_FOCUS = '#dddddd'
const COLOR_CONTENT_FADED = '#555555'
let focusSelected = '';

function focus(technology) {
  const fadeableContent = document.querySelectorAll('.fadeable');
  fadeableContent.forEach(function(content) {
    if (Array.from(content.classList).indexOf(technology) === -1) {
      content.style.color = COLOR_CONTENT_FADED;
    }
  });

  const fadeableSVGs = document.querySelectorAll('.fade_svg');
  fadeableSVGs.forEach(function(svg) {
    if (Array.from(svg.classList).indexOf(technology) === -1) {
      let path = svg.querySelector('path');
      path.setAttribute('fill', COLOR_CONTENT_FADED);
    }
  });
}

function restore(technology) {
  const fadeableContent = document.querySelectorAll('.fadeable');
  fadeableContent.forEach(function(content) {
    if (Array.from(content.classList).indexOf(technology) === -1) {
      content.style.color = COLOR_CONTENT_FOCUS;
    }
  });

  const fadeableSVGs = document.querySelectorAll('.fade_svg');
  fadeableSVGs.forEach(function(svg) {
    if (Array.from(svg.classList).indexOf(technology) === -1) {
      let svgTech = Object.keys(TECHS).find((tech) => Array.from(svg.classList).indexOf(tech) !== -1);
      let path = svg.querySelector('path');
      path.setAttribute('fill', TECHS[svgTech].color);
    }
  });
}

function fadeButtons(technology) {
  const fadeableButtons = document.querySelectorAll('.button');
  fadeableButtons.forEach(function(button) {
    if (Array.from(button.classList).indexOf(technology) === -1) {
      let path = button.querySelector('path');
      path.setAttribute('fill', COLOR_CONTENT_FADED);
      button.style.color = COLOR_CONTENT_FADED;
    }
  });
}

function restoreButtons(technology) {
  const fadeableButtons = document.querySelectorAll('.button');
  fadeableButtons.forEach(function(button) {
    if (Array.from(button.classList).indexOf(technology) === -1) {
      let buttonTech = Object.keys(TECHS).find((tech) => Array.from(button.classList).indexOf(tech) !== -1);
      let path = button.querySelector('path');
      path.setAttribute('fill', TECHS[buttonTech].color);
      button.style.color = TECHS[buttonTech].color;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    const tech = Object.keys(TECHS).find((tech) => Array.from(button.classList).indexOf(tech) !== -1);
    button.addEventListener('mouseenter', function(event) {
      if (focusSelected === '') {
        focus(tech);
      }
    });
    button.addEventListener('mouseleave', function(event) {
      if (focusSelected === '') {
        restore(tech);
      }
    });
    button.addEventListener('click', function(event) {
      if (focusSelected !== '') {
        restore(focusSelected);
      }

      if (focusSelected !== tech) {
        restoreButtons(focusSelected);
        fadeButtons(tech);
        focus(tech);
        focusSelected = tech;
      } else {
        restoreButtons(tech);
        focusSelected = '';
      }
    });
  });
});
