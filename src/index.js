'use strict';

// Modules
import scroll from './modules/scroll';
import rangeProgress from './modules/rangeProgress';
import activePagination from './modules/activePagination';
import getAnimateEllipse from './modules/animateEllipse';
import getSlider from './modules/getSlider';

// Анимация в header
getAnimateEllipse();

// Скролл 
scroll();

// Активная пагинация
activePagination();

// Заполнение прогресса за ползунком
rangeProgress();

// Перключение слайдов
getSlider();