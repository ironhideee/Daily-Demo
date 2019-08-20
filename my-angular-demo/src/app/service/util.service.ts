import { Injectable } from '@angular/core';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  // 动态加载函数
  loadedScripts: string[] = [];//已经加载过的列表
  
  /**
   * @param sctipts
   * 某一组件中需要同步加载的js数组 如['a.js',['b.js,c.js'].'d.js']表示a加载完成后，加载b和c，最后加载d
   * @param callback 
   * 全部加载完成后的回调函数
   */

  loadScript(path,scripts,callback){
    let _t = this;
    if(scripts.length){
      let item = scripts.shift();
      if (typeof item === 'string') {
        if (_t.loadedScripts.indexOf(item)>=0) {
          _t.loadScript(path,scripts,callback);
        }else{
          let onload = () => {
            _t.loadedScripts.push(item);
            _t.loadScript(path,scripts,callback);
          }
          let name = item.split('.css');
          let isCss = name.length===2 && !name[1];
          if (isCss) {
            let link = document.createElement('link');
            document.head.appendChild(link);
            link.rel = 'stylesheet';
            link.onload = onload;
            link.type = 'text/css';
            link.href = './assets/lib' + path + '/' + item;
          } else {
            let script = document.createElement('script');
            document.head.appendChild(script);
            script.onload = onload;
            script.src = './assets/lib' + path + '/' + item + '.js';
          }
        }
      }else if (Object.prototype.toString.call(item)==="[object Array]") {
        if (item.length) {
          let loadCount = 0;
          item.forEach(s=>{
            if (_t.loadedScripts.indexOf(s)>=0) {
              loadCount++;
              _t.loadedScripts.push(s);
              if (loadCount===item.length) {
                _t.loadScript(path,scripts,callback);
              }
            } else {
              let onload = ()=>{
                loadCount++;
                _t.loadedScripts.push(s);
                if (loadCount===item.length) {
                  _t.loadScript(path,scripts,callback);
                }
              }
              let name = item.split('.css');
              let isCss = name.length===2 && !name[1];
              if (isCss) {
                let link = document.createElement('link');
                document.head.appendChild(link);
                link.rel = 'stylesheet';
                link.onload = onload;
                link.type = 'text/css';
                link.href = './assets/lib' + path + '/' + item;
              } else {
                let script = document.createElement('script');
                document.head.appendChild(script);
                script.onload = onload;
                script.src = './assets/lib' + path + '/' + item + '.js';
              }
            }
          })
        } else {
          _t.loadScript(path,[],callback);
        }
      }
    }else{
      callback && callback(window);
    }

  }

}
