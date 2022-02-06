const url =
  'https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json';
let cityArray = [];
let districtArray = [];

//DOM
const citySelect = document.querySelector('#city');
const districtSelect = document.querySelector('#district');
const submitBtn = document.querySelector('input');

window.onload = function () {
  //抓資料
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityArray = [{ CityName: '', AreaList: [] }].concat(data);
      CitySelect();
      DistrictSelect();
      setBtnUI();
    })
    .catch((ex) => {
      console.warn(ex);
    });

  citySelect.onchange = function () {
    let theSelectedCity = citySelect.value;
    // console.log(theSelectedCity);
    districtArray = [''].concat(
      cityArray
        .find((x) => x.CityName == theSelectedCity)
        .AreaList.map((x) => `${x.ZipCode} - ${x.AreaName}`)
    );
    DistrictSelect();
    setBtnUI();
  };

  districtSelect.onchange = function () {
    setBtnUI();
  };
};

function CitySelect() {
  citySelect.innerHTML = '';
  cityArray.forEach((city) => {
    let option = document.createElement('option');
    option.innerText =
      city.CityName == '' ? '--- 請選擇城市 ---' : city.CityName;
    option.value = city.CityName;
    citySelect.appendChild(option);
  });
}

function DistrictSelect() {
  districtSelect.innerHTML = '';
  districtArray.forEach((district) => {
    // console.log(district);
    let option = document.createElement('option');
    option.innerText = district == '' ? '--- 請選擇行政區 ---' : district;
    option.value = district;
    districtSelect.appendChild(option);
  });
}

function setBtnUI() {
  if (citySelect.value == '') {
    districtSelect.setAttribute('disabled', true);
    submitBtn.setAttribute('disabled', true);
  } else {
    districtSelect.removeAttribute('disabled');
  }
  if (districtSelect.value == '') {
    submitBtn.setAttribute('disabled', true);
  } else {
    submitBtn.removeAttribute('disabled');
  }
}
