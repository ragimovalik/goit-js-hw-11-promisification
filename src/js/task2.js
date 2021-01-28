import debounce from 'lodash.debounce';

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

const taskStartEl = document.getElementById('task-2');
taskStartEl.addEventListener('click', debounce(taskStartHandler, 1000));

function taskStartHandler() {
  toggleUserState(users, 'Mango').then(logger);

  setTimeout(() => {
    toggleUserState(users, 'Lux').then(logger);
  }, 1000);
}

/*
Перепиши функцию toggleUserState() так, чтобы она не использовала 
callback-функцию callback, а принимала всего два параметра allUsers 
и userName и возвращала промис.
*/
