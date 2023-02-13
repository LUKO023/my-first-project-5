import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
storeArray: string [] = [];
display  = '' ;
displaySmall = '';
firstNumString = '';
firstNum = 0 ;
operator = '';
secondNumString = '';
secondNum = 0;
sum = '';
CalResult = '';
numArray: number [] = [];
storeArray2: string[] = [];
convertArray: number [] = []; 
rechnung = '';
num: number = 0;
regex1 = /[0-9]/;
regex2 =/[+-\/*] /;



 input(number:any) :void {
 
this.storeArray = this.storeArray.concat(number) 
this.display = this.storeArray.join('');


this.inputRechnung (this.input);



}
 result (): void{

 this.convertArrayForCalculation()
 
 this.save();
 
  //console.log(this.firstNum + this.secondNum)

  this.storeArray2 = this.storeArray.slice(); 
  for (var i= 1; i< this.storeArray.length; i++){
    this.storeArray2.splice(i,1);
  }
  for (var i= 0; i<= this.storeArray2.length+2;){
    this.numArray.push(parseInt(this.storeArray[i]));
    i = i+2;
  }

  
this.plus();

this.minus();
this.mal();
this.geteilt();
this.display = this.sum;
this.displaySmall = this.storeArray.join('');
console.log(this.storeArray)
 } 













inputRechnung (number : any) : void{
  
  


  }

/* if (this.storeArray.length >= 4){ 
   for ( var i = 0; i < this.storeArray.length; i++ ){
      if (this.regex1.test(this.storeArray[i]) === true){
        if (this.storeArray[i + 1 ] === '-|+|/|*|'){
          this.storeArray[i + 2 ] = this.storeArray [i + 1] + this.storeArray [i + 2];
            this.storeArray.splice(i + 1 ,1);
            
        }
      }
    
   }
} */

    
  

convertArrayForCalculation(): void {

    for (var i = 0; i <= this.storeArray.length; i++) {
      if (this.regex1.test(this.storeArray[i]) === true && this.regex1.test(this.storeArray[i + 1]) === true) {
        this.storeArray[i + 1] = this.storeArray[i] + this.storeArray[i + 1];
        this.storeArray.splice(i, 1);
        this.convertArrayForCalculation();
      
      }  
    }
}

save():void{

  if (this.storeArray.length >=3){
    
   // for (var i = 0; this.storeArray.length; i++){
      //if (this.firstNumString === '' && this.secondNumString === ''){

            this.firstNumString = this.storeArray[0];

            this.operator = this.storeArray[1]
            this.secondNumString = this.storeArray[2];
            this.firstNum = parseInt(this.firstNumString)
            this.secondNum = parseInt(this.secondNumString)
      }
      //else{


      //}
      

        
   // }
    
  //}
}

plus(): void {
 /* if (this.storeArray[1] === '+'){
    var num = this.firstNum + this.secondNum
    this.sum = num.toString();

  }*/
  //this.num = this.numArray[0]+ this.numArray[1]; 

  for(var i=0; i< this.numArray.length; i++){
    this.secondNum = this.numArray[i];
    this.num += this.secondNum;

    /*if (this.num === 0){
      this.num = this.numArray[i];
      
    }
    else if (this.num !== 0){
      console.log(this.numArray)
      this.secondNum = this.numArray[i];
      this.num = this.num + this.secondNum;
     
    }*/
  }
  console.log(this.num);
  this.sum = this.num.toString();
  
  

}
minus(): void {
  if (this.storeArray[1] === '-'){
    var differenz = this.firstNum - this.secondNum
    this.sum = differenz.toString();
  }
}
mal(): void {
  if (this.storeArray[1] === '*'){
    var produkt = this.firstNum * this.secondNum
    this.sum = produkt.toString();
  }
}
geteilt(): void {
  if (this.storeArray[1] === '/'){
    var quotient = this.firstNum / this.secondNum
    this.sum = quotient.toString();
  }
}



 clear (){
this.storeArray = [];
this.display = '';
this.displaySmall = '';
this.numArray = [];
this.num = 0 ;

}

 delete () {
this.display = this.display.slice(0,-1);
this.storeArray = this.storeArray.slice(0,-1);
this.numArray = this.numArray.slice(0,-1)

 }

 

 



}








  










