const TECHS = {
  aws: {
    color: '#F7A80D'
  },
  c: {
    color: '#03599C'
  },
  java: {
    color: '#EA2D2E'
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

const COLOR_CONTENT_FOCUS = '#FFFFFF'
const COLOR_CONTENT_FADED = '#444444'

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

document.addEventListener('DOMContentLoaded', function() {
  Object.keys(TECHS).forEach(function(tech) {
    logoElement = document.querySelector(`.${[tech]}_logo`);
    logoElement.addEventListener('mouseenter', function(event) {
      focus(tech);
    });
    logoElement.addEventListener('mouseleave', function(event) {
      restore(tech);
    });
  });
});
