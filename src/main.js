import "./tab";
import "./banner";

// jq的使用
// src/mains.js
// 先引入jquery
import $ from 'jquery';
$('#swiper').css('background-color', 'red')


import "./styles/index.css"

import "./styles/index.less"

// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// 引入图片-使用
import imgUrl1 from './assets/logo_small.png'
const theImg1 = document.createElement("img")
theImg1.src = imgUrl1
document.body.appendChild(theImg1)

// 引入字体图标文件
import './assets/fonts/iconfont.css'

class App {
    static a = 123
  }
  
console.log(App.a)
const fn = () => {
    console.log(11111);
}