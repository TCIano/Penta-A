import "./tab";
import "./banner";
import $ from "jquery";
// $("#swiper").css("background-color", "red");
import "./style/index.css";

// index.js
import imgUrl from "./assets/1.gif";

let img = document.createElement("img");
img.src = imgUrl;
document.body.appendChild(img);

// 引入字体图标文件
import "./assets/fonts/iconfont.css";

class App {
  static a = 123;
}

console.log(App.a);
