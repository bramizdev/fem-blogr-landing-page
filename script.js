'use strict';

const $ = (selector) => document.querySelector(selector);

const $mobileMenuBtn = $('.navigation__mobile-menu');
const $mobileNavigation = $('.navigation__nav');

const toggleMobileNavMenu = () => {
  const isExpanded = $mobileMenuBtn.getAttribute('aria-expanded');
  if (isExpanded === 'false') {
    $mobileNavigation.classList.remove('close');
    $mobileMenuBtn.setAttribute('aria-expanded', 'true');
  } else {
    $mobileNavigation.classList.add('close');
    $mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }
};

const toggleMobileOptionList = (element) => {
  const isExpanded = element.getAttribute('aria-expanded');
  const option = element.getAttribute('data-option');
  const parentElement = element.closest('.nav__links');
  const list = parentElement.querySelector(`[data-list="${option}"]`);

  //Close all open tabs
  parentElement.querySelectorAll('.nav__short-list').forEach((element) => {
    element.classList.add('close');
    element
      .closest('li')
      .querySelector('.nav__btn')
      .setAttribute('aria-expanded', 'false');
  });

  if (isExpanded === 'false') {
    list.classList.remove('close');
    element.setAttribute('aria-expanded', 'true');
  } else {
    list.classList.add('close');
    element.setAttribute('aria-expanded', 'false');
  }
};

$mobileMenuBtn.addEventListener('click', toggleMobileNavMenu);

$mobileNavigation.addEventListener('click', (e) => {
  const click = e.target;
  if (!click.classList.contains('nav__btn')) return;
  toggleMobileOptionList(click);
});

$mobileNavigation.addEventListener('click', (e) => {
  const click = e.target;
  if (click.tagName !== 'A') return;
  toggleMobileNavMenu();
});
