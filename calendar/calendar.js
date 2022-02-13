//今天
const today = new Date();
//年
let year = today.getFullYear();
//月
let month = today.getMonth();
//日
let date = today.getDate();

let currentTodoIndex;

//-----DOM-----
const year_and_month = document.querySelector('.year-and-month');

//日期
const date_area = document.querySelector('tbody');

const add_modal = document.getElementById('add-modal');
const edit_modal = document.getElementById('edit-modal');
const add_data_input = document.getElementById('add-data');
const add_title_input = document.getElementById('add-title');
const edit_data_input = document.getElementById('edit-data');
const edit_title_input = document.getElementById('edit-title');

//-----window.onload-----
window.onload = function () {
  init();
};

function init() {
  date_area.innerText = '';

  year_and_month.innerText = `${year}年${month + 1}月`;
  //這個月第一天是禮拜幾
  let firstDay = new Date(year, month, 1).getDay();

  //這個月有幾天(看這個月的最後一天是幾號)
  let day_of_month = new Date(year, month + 1, 0).getDate();

  day = 1;
  let rows = Math.ceil((day_of_month + firstDay) / 7);

  for (let row = 0; row < rows; row++) {
    let tr = document.createElement('tr');
    for (let col = 0; col < 7; col++) {
      let td = document.createElement('td');
      if (row == 0 && col < firstDay) {
        //上個月
      } else {
        if (day <= day_of_month) {
          //這個月
          td.innerText = day;

          if (localStorage.getItem(`${year} - ${month + 1} - ${day}`) != null) {
            //不是null代表今天有行程
            let ul = document.createElement('ul');
            let toDoList = JSON.parse(
              localStorage.getItem(`${year} - ${month + 1} - ${day}`)
            );
            toDoList.forEach((item, index) => {
              let li = document.createElement('li');
              li.innerText = item.title;
              li.onclick = function (event) {
                bootstrap.Modal.getOrCreateInstance(edit_modal).show();

                currentTodoIndex = index;

                edit_data_input.value = `${year} - ${month + 1} - ${
                  td.childNodes[0].data
                }`;
                edit_title_input.value = item.title;
                event.stopPropagation();
              };

              ul.appendChild(li);
            });
            td.appendChild(ul);
          }
          td.onclick = function () {
            bootstrap.Modal.getOrCreateInstance(add_modal).show();
            add_data_input.value = `${year} - ${month + 1} - ${
              td.childNodes[0].data
            }`;
          };
        } else {
          //下個月
        }
        day++;
      }
      tr.appendChild(td);
    }
    date_area.appendChild(tr);
  }
}

//上個月
function previousMonth() {
  month--;
  if (month == -1) {
    month = 11; //12月
    year--;
  }
  init();
}

//下個月
function nextMonth() {
  month++;
  if (month == 12) {
    month = 0;
    yaer++;
  }
  init();
}

//新增行程
function addSchedule() {
  let date = add_data_input.value;
  let toDoItem = add_title_input.value;

  let toDoListObj = {
    title: toDoItem,
  };

  let toDoList = [];
  if (localStorage.getItem(date) == null) {
    //那天原本沒行程
    toDoList.push(toDoListObj);
  } else {
    //那天有行程
    toDoList = JSON.parse(localStorage.getItem(date));
    toDoList.push(toDoListObj);
  }
  localStorage.setItem(date, JSON.stringify(toDoList));
  bootstrap.Modal.getOrCreateInstance(add_modal).hide();
}

//修改行程
function editSchedule() {
  let date = edit_data_input.value;
  let toDoItem = edit_title_input.value;

  let toDoList = JSON.parse(localStorage.getItem(date));
  toDoList[currentTodoIndex] = { title: toDoItem };

  localStorage.setItem(date, JSON.stringify(toDoList));

  bootstrap.Modal.getOrCreateInstance(edit_modal).hide();

  init();
}

//刪除行程
function deleteSchedule() {
  let date = edit_data_input.value;

  let toDoList = JSON.parse(localStorage.getItem(date));

  //arr.splice(要插入或刪除的索引位置, 要刪除的元素數量, 要插入的元素內容)
  toDoList.splice(currentTodoIndex, 1);

  localStorage.setItem(date, JSON.stringify(toDoList));

  bootstrap.Modal.getOrCreateInstance(editModal).hide();

  init();
}
