import debounce from 'lodash.debounce';

const delay = ms => {
  // Твой код
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(`${ms}`);
    }, ms);
  });
  return promise;
};

const logger = time => console.log(`Resolved after ${time} ms`);

const taskStartEl = document.getElementById('task-1');
taskStartEl.addEventListener('click', debounce(taskStartHandler, 2000));

function taskStartHandler() {
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);
}

/*
Напиши функцию delay(ms), которая возвращает промис, 
переходящий в состояние "resolved" через ms миллисекунд. 
Значением исполнившегося промиса должно быть то кол-во 
миллисекунд которое передали во время вызова функции delay.
 */
// Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
