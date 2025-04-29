function handleScrollForMultipleElements() {
    const elementSelectors = ['.animate-on-scroll', '.animate-on-scroll-left', '.animate-on-scroll-right', '.animate-on-scroll-zoom'];
    const elements = document.querySelectorAll(elementSelectors.join(','));

    elements.forEach(element => {
        if (isPartiallyInViewport(element) && !element.classList.contains('animate')) {
            const animation = element.dataset.animation;
            element.classList.add('animate', animation);
        }
    });
}

function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

window.addEventListener('scroll', handleScrollForMultipleElements);

document.addEventListener('DOMContentLoaded', handleScrollForMultipleElements);
import React, { useState } from 'react'

function animation() {
    const [elementSel, setelementSel] = useState();

    setelementSel(elementSelectors);
    const elementSelectors = ['.animate-on-scroll', '.animate-on-scroll-left', '.animate-on-scroll-right', '.animate-on-scroll-zoom'];



  return (
    <div>
      
    </div>
  )
}

export default animation


// I want to convert this in the react and file name is animation.js
// -> function handleScrollForMultipleElements() {
//     const elementSelectors = ['.animate-on-scroll', '.animate-on-scroll-left', '.animate-on-scroll-right', '.animate-on-scroll-zoom'];
//     const elements = document.querySelectorAll(elementSelectors.join(','));

//     elements.forEach(element => {
//         if (isPartiallyInViewport(element) && !element.classList.contains('animate')) {
//             const animation = element.dataset.animation;
//             element.classList.add('animate', animation);
//         }
//     });
// }

// function isPartiallyInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//     const windowWidth = window.innerWidth || document.documentElement.clientWidth;

//     const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
//     const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

//     return (vertInView && horInView);
// }

// window.addEventListener('scroll', handleScrollForMultipleElements);

// document.addEventListener('DOMContentLoaded', handleScrollForMultipleElements);
// import React from 'react'