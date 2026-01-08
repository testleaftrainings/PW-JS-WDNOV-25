

// //Scenario 1
// class Employee1{

// payroll(){
// console.log("Emplyee payroll process");
// }

// }
// //Object creation:
// const emp1 = new Employee1()
// emp1.payroll()

// //Scenario 2  : Method with Parameter (LOcal VAriable)

// class Employee2{

//     empDetails(empName:string, id:string){
//         console.log(`Employee name is ${empName}, id is ${id}`);        
//     }
// }

// const emp2 = new Employee2()
// emp2.empDetails("Hari","Emp123")

//Scenario 3 


// class Employee1{

// constructor(){ 
// //Default constructor - this method name with the keyword constructor gets executed immediately without being called at the time of creation of an object 
// console.log("This is constructor method");
// }

// payroll(){
// console.log("Emplyee payroll process");
// }

// }
// //Object creation:
// const emp1 = new Employee1()
// emp1.payroll()//Explicitely calling a normal function using the object


//Scenario 4 : Parameteried constructor 

class Employee3 {

    empName : string  // Global variable // property// Public accessmodifiers
    empid : string

    constructor(name:string, id: string){
        console.log("Parameterized Constructor");        
        this.empName = name // Hari
        this.empid = id // emp123
    }

    printEmployeeDeatils(){
        console.log(`Employee name is ${this.empName}, id is ${this.empid}`);      
        
    }
}

const emp3 = new Employee3("Hari","emp123")
emp3.printEmployeeDeatils()




