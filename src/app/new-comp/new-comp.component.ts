import { Component, OnInit } from '@angular/core';
import { Person } from './Person';
@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

data:any=[]
Name:any=''
Age:number=0
NameData:any=[]
person:Person[]=[]


  Current_index: number=0;
  constructor() {
   }

  ngOnInit(): void {
    console.log("hello world");
    
  }


AddPerson(){
  console.log(this.Name);
  
  const person ={
    name:this.Name,
    age:this.Age
  }
  this.NameData.push(person)
  this.Age=0;
  this.Name=''

}
Edit(i:number){
this.Name=this.NameData[i].name
this.Age=this.NameData[i].age
this.Current_index=i
this.NameData.splice(i,1)
}
Delete(i:number){
  if(this.NameData.length==1){
window.alert("Cannot delete Last element")
  }
  else{
    this.NameData.splice(i,1)

  }
}
}
