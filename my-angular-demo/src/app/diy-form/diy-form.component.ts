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

  //自定义属性
  formList = [];
  //表单参数
  needExtArr = [];
  //表单属性
  formDataArr = [];

  isVisible:boolean = false;
  isOkLoading = false;

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
    if(this.formList[i].option.length >= 10){
      this.message.create('warning', `每个自定义选项最多配置10个选项`);
      return;
    }
    this.formList[i].option.splice(k+1,0,'');
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

  showForm(){
    console.log(this.formList)
    let widdleware = JSON.parse(JSON.stringify(this.formList));
    widdleware.forEach(item => {
      if(item.type == 4){
        let arr = [];
        item.option.forEach(element => {
          arr.push({label: element, value: element, checked:false})
        });
        item.option = arr;
      }
    });
    this.formDataArr = widdleware;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  //保存checkbox选择结果
  checkChange(i,arr){
    console.log(arr)
  }

}
