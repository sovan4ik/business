import '../../node_modules/focus-visible/dist/focus-visible';

import $ from 'jquery';
import '../css/main.scss';
import '../index.html';
import '../js/owl.carousel.min.js'

$(document).ready(function() {
  const owl = $(".team__slider");
  owl.owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    margin: 16,
    navText: '',
    navSpeed: 1000,

    responsive:{
        360:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
  });
  $('.team__nav .arrow-next').click(function() {
    owl.trigger('next.owl.carousel', [1000]);
  });
  $('.team__nav .arrow-prev').click(function() {
    owl.trigger('prev.owl.carousel', [1000]);
  });
});

const tabs = $('.about-me__container');

const tabsHeader = tabs.find('.tabs');
const tabsList = tabs.find('.tabs__links');
const hiddenContainer = $('.tabs__content');



tabsList.on('click', function() {
	const self = $(this);
  const selfIndex = self.attr('data-index');
  const selfText =  hiddenContainer.find('.tabs__text[data-index='+selfIndex+']');

  const activeTab = tabsHeader.find('.tabs__links.active');
  const activeTabIndex = activeTab.attr('data-index');
  const activeText = hiddenContainer.find('.tabs__text[data-index='+activeTabIndex+']');

  if(self.hasClass('active')) {
  	return;
  } else {
  	activeTab.removeClass('active');
    activeText.addClass('hidden');
  	self.addClass('active');
    selfText.removeClass('hidden');
  }
});
