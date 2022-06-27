import "./tab.js";
import "./banner.js";
import './styles/index.less'


import $ from 'jquery';
$('#swiper').css('background-color', 'red')
// import './styles/index.css';

import imgUrl from './assets/1.gif'

const img = document.createElement('img')
img.src = imgUrl;
document.body.appendChild(img)

// 引入图片-使用
import imgUrl1 from './assets/1.gif'
const theImg1 = document.createElement("img")
theImg1.src = imgUrl1
document.body.appendChild(theImg1)

// 引入字体图标文件
// import './assets/fonts/iconfont.css'