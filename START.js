// `Lagos is stuffy`
// 'he said \'i should collect the money\''
// console.log('Life no easy')

//WHILE LOOP 
// let counter=1
// while(counter < 100) {
//     if(counter % 2 ===0) {
//         console.log(counter)
//     }
//     counter++
// }

// //FOR LOOP
// for (let counter=0; counter<101; counter +=5){
//     console.log(counter)
// }
// for (let list=[12,23,45,67,89,90,100]; list<104; list[0]++){
//     console.log(list +=4)
// }
// let list=['12','23','45','67','89','90','100']


// for (let counter=0; counter<list.length; counter+=1) {
//     console.log(list[counter])
// }
// //create a list with these values 
// let counter=1
// let fizz= 'FIZZ'
// let buzz= 'BUZZ'
// let fizzbuzz= 'FizzBuzz'
// do{
//     console.log(counter)
//     if(counter % 3 ===0){
//         console.log(fizz)
//     }
//     if(counter % 5 ===0){
//         console.log(buzz)
//     }
//     if(counter % 3 ===0 && counter % 5 ===0){
//         console.log(fizzbuzz)
//     }
//     counter++
// }while(counter<101)

// let a= ''

// for (let i=0; i < 5; i++){
//    a=a + '#'
//    console.log(a)
   
// }

// class AbujaSchools{
//     constructor(a, b, c, d, e, f){
//         this.namez=a
//         this.LOC='MARABA'
//         this.fees=c
//         this.noStudents=d
//         this.noTeachers=e
//         this.OwnerName=f
//     }
// }
// let SCH1= new AbujaSchools('PANAF', '#15,000', 2500, 25, 'ME!!!!')
// let SCH2= new AbujaSchools('LANDMARK', '#20,000', 2300, 23, 'YOU!!!!')
// console.log(SCH1)

// class triangle{
//     constructor(b, h){
//         this.base=b
//         this.height=h
//     }
//     area(){
//         return 0.5*this.base*this.height 
//     }
// }
// let A= new triangle(2,4)
// console.log(A.area())
let deposite=1000
class bankuser{
    constructor(a, b, c){
        this.names=a
        this.bankname=b
        this.acctbal=c
    }
    increase(deposite){
        this.acctbal= this.acctbal + deposite
    }
}
let sarah= new bankuser("Sarah",'Access',500)
sarah.increase(deposite)
console.log(sarah)

class animal{
    constructor(a, b, c, d){
        this.sound=a
        this.no0fleg=b
        this.habitat=c
        this.names=d
    }
    speak(){
        console.log(this.names + ' communicates by ' + this.sound)
    }
}
let DOG= new animal('Barking😁👵🏽👨🏽‍🦱👱🏽‍♀️', 4, 'houses','dogs')

console.log(DOG.speak())


class livingthings {
    constructor(name){
        this.name
    }
    breathe(){
        console.log(this.name + 'is breathing')
    }
    eat(){
        console.log(this.name + ' is eating' +food) 
       }
}

class plants extends livingthings{
    constructor(name){
        super(name)
    }
}
class masqueradeTree extends plants {
    constructor(name){
        super(name)
    }
}


class CBN{
    constructor(name, currency ){
        this.names=name
        this.CUR=currency
    }
}
class AccessBank extends CBN{
    constructor(name, amountOfSalary){
        super(name,currency)
        this.amountOfSalary=amountOfSalary
    }

}
class Diamond extends AccessBank{
    constructor(profit, loss){ 
      this.profit=profit
    this.loss
    }
}


