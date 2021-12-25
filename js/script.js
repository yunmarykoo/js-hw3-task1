var worker1 = +prompt('Заработная плата 1го сотрудника');
var worker2 = +prompt('Заработная плата 2го сотрудника');
var worker3 = +prompt('Заработная плата 3го сотрудника');

alert('Выход: ' + (Math.max(worker1, worker2, worker3) - Math.min(worker1, worker2, worker3)));