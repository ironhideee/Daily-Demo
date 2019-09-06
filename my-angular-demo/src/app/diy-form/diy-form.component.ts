import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-diy-form',
  templateUrl: './diy-form.component.html',
  styleUrls: ['./diy-form.component.less']
})
export class DiyFormComponent implements OnInit {

  constructor(
    private message: NzMessageService
  ) { }

  name:string = '';
  required:boolean = null;
  key:string = '';
  type:boolean = null;
  length:string = '';

  optionList = [
    { label: '输入框', value: '1' },
    { label: '多行文本框', value: '2' },
    { label: '选择器', value: '3' },
    { label: '多选框', value: '4' }
  ]

  formList = [];

  ngOnInit() {
  }

  startDiy(){
    let obj = {
      name: '',
      require: null,
      key: '',
      type: null,
      length: '',
      option: ['']
    }
    if(this.formList.length == 0){
      this.formList.push(obj);
    }
  }

  addWidget(i){
    if(this.formList.length >= 10){
      this.message.create('warning', `最多配置10个表单控件`);
      return;
    }
    let obj = {
      name: '',
      require: null,
      key: '',
      type: null,
      length: '',
      option: ['']
    }
    this.formList.splice(i+1,0,obj);
  }

  delWidget(i){
    this.formList.splice(i,1);
  }

  addItem(i,k){
    console.log(i,k)
    if(this.formList[i].option.length >= 10){
      this.message.create('warning', `每个自定义选项最多配置10个选项`);
      return;
    }
    this.formList[i].option.splice(k+1,0,'');
    console.log(this.formList)
  }

  delItem(i,k){
    if(this.formList[i].option.length == 1){
      return;
    }
    this.formList[i].option.splice(k,1);
  }

  trackByIndex(index,item){
    return index;
  }

}
