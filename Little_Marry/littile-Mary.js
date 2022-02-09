//宣告
//格子資料
let brickData = [
  {
    id: '1',
    img: './img/仙杜瑞拉.jpg',
    target: function () {
      return '仙杜瑞拉';
    },
  },
  {
    id: '2',
    img: './img/壞皇后.jpg',
    target: function () {
      return '壞皇后';
    },
  },
  {
    id: '3',
    img: './img/小美人魚愛麗兒公主.jpg',
    target: function () {
      return '小美人魚愛麗兒公主';
    },
  },
  {
    id: '4',
    img: './img/白雪公主.jpg',
    target: function () {
      return '白雪公主';
    },
  },
  {
    id: '5',
    img: './img/艾紗公主.jpg',
    target: function () {
      return 'F艾紗公主';
    },
  },
  {
    id: '6',
    img: './img/花木蘭.jpg',
    target: function () {
      return '花木蘭';
    },
  },
  {
    id: '7',
    img: './img/蒂安娜公主.jpg',
    target: function () {
      return '蒂安娜公主';
    },
  },
  {
    id: '8',
    img: './img/貝兒公主.jpg',
    target: function () {
      return '貝兒公主';
    },
  },
  {
    id: '9',
    img: './img/阿拉丁茉莉公主.jpg',
    target: function () {
      return '阿拉丁茉莉公主';
    },
  },
  {
    id: '10',
    img: './img/魔髮奇緣-樂佩公主.jpg',
    target: function () {
      return '魔髮奇緣 樂佩公主';
    },
  },
  {
    id: '11',
    img: './img/仙杜瑞拉.jpg',
    target: function () {
      return '仙杜瑞拉';
    },
  },
  {
    id: '12',
    img: './img/壞皇后.jpg',
    target: function () {
      return '壞皇后';
    },
  },
  {
    id: '13',
    img: './img/小美人魚愛麗兒公主.jpg',
    target: function () {
      return '小美人魚愛麗兒公主';
    },
  },
  {
    id: '14',
    img: './img/白雪公主.jpg',
    target: function () {
      return '白雪公主';
    },
  },
  {
    id: '15',
    img: './img/艾紗公主.jpg',
    target: function () {
      return '艾紗公主';
    },
  },
  {
    id: '16',
    img: './img/花木蘭.jpg',
    target: function () {
      return '花木蘭';
    },
  },
  {
    id: '17',
    img: './img/蒂安娜公主.jpg',
    target: function () {
      return '蒂安娜公主';
    },
  },
  {
    id: '18',
    img: './img/貝兒公主.jpg',
    target: function () {
      return '貝兒公主';
    },
  },
  {
    id: '19',
    img: './img/阿拉丁茉莉公主.jpg',
    target: function () {
      return '阿拉丁茉莉公主';
    },
  },
  {
    id: '20',
    img: './img/魔髮奇緣-樂佩公主.jpg',
    target: function () {
      return '魔髮奇緣 樂佩公主';
    },
  },
  {
    id: '21',
    img: './img/仙杜瑞拉.jpg',
    target: function () {
      return '仙杜瑞拉';
    },
  },
  {
    id: '22',
    img: './img/壞皇后.jpg',
    target: function () {
      return '壞皇后';
    },
  },
  {
    id: '23',
    img: './img/小美人魚愛麗兒公主.jpg',
    target: function () {
      return '小美人魚愛麗兒公主';
    },
  },
  {
    id: '24',
    img: './img/白雪公主.jpg',
    target: function () {
      return '白雪公主';
    },
  },
  {
    id: '25',
    img: './img/艾紗公主.jpg',
    target: function () {
      return '艾紗公主';
    },
  },
  {
    id: '26',
    img: './img/花木蘭.jpg',
    target: function () {
      return '花木蘭';
    },
  },
  {
    id: '27',
    img: './img/蒂安娜公主.jpg',
    target: function () {
      return '蒂安娜公主';
    },
  },
  {
    id: '28',
    img: './img/貝兒公主.jpg',
    target: function () {
      return '貝兒公主';
    },
  },
  {
    id: '29',
    img: './img/阿拉丁茉莉公主.jpg',
    target: function () {
      return '阿拉丁茉莉公主';
    },
  },
  {
    id: '30',
    img: './img/魔髮奇緣-樂佩公主.jpg',
    target: function () {
      return '魔髮奇緣 樂佩公主';
    },
  },
  {
    id: '31',
    img: './img/仙杜瑞拉.jpg',
    target: function () {
      return '仙杜瑞拉';
    },
  },
  {
    id: '32',
    img: './img/壞皇后.jpg',
    target: function () {
      return '壞皇后';
    },
  },
];
//剩下要走的步數
let steps = 0;
//全部的步數
let allSteps = 0;
//目前走到哪一格
let currentIndex = 0;

//格子跑的速率，值越大越慢
let speed = 50;

//DOM
let bricks = document.querySelectorAll('[box-id]');
const startBtn = document.querySelector('button');
const msgShow = document.querySelector('#msg');

//window.onload
window.onload = function () {
  console.log('排序前');
  console.log(bricks);

  //排序格子
  //先把 NodeList 轉成 array 再 sort(排序)
  bricks = Array.from(bricks).sort((a, b) => {
    return (
      a.getAttributeNode('box-id').value - b.getAttributeNode('box-id').value
    );
  });
  console.log('排序後');
  console.log(bricks);

  //把所有資料逐一塞進格子
  bricks.forEach((box) => {
    let id = box.getAttributeNode('box-id').value;
    let data = brickData.find((x) => x.id == id);

    let img = document.createElement('img');
    img.src = `${data.img}`;
    box.appendChild(img);
  });

  startBtn.onclick = function () {
    speed = 50;

    //至少走一步 → +1
    let random = Math.floor(Math.random() * brickData.length) + 1;
    //多跑1.5圈再加上random → 走的步數
    steps = random + 1.5 * bricks.length;
    allSteps = steps;
    turnAround();
  };

  function turnAround() {
    bricks[currentIndex].classList.remove('active');
    currentIndex++;

    //如果目前走的步數超過格子總數，從頭開始跑 → currentIndex = 0;
    if (currentIndex >= bricks.length) {
      currentIndex = 0;
    }
    //目前走到的這格加上active的特效
    bricks[currentIndex].classList.add('active');
    steps--;

    if (steps > 0) {
      //還沒走完
      setTimeout(turnAround, speed);

      //速度變速，當剩餘步數剩下1/3時，做減速
      if (steps < Math.floor(allSteps / 3)) speed += 10;
    } else {
      //走完了
      let value = brickData[currentIndex].target();
      msgShow.innerText = `${value}`;
    }
  }
};
