import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// находим эл...
const iframe = document.querySelector('iframe');

// создаем плеер
const player = new Player(iframe);

// запись в локальное зранилище на событие play м интервалом 1000 ms
const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

// вызов метода на событие play
player.on('timeupdate', throttle(onPlay, 1000));

// переменая которая берет данные с локального хранилища
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));


// запуск переменной с данными о текущем времени
player.setCurrentTime(currentTime || 0);