
export class EmployeeSignUp{

//Properties are declared as public by default
   public eName : string
    public static eid : string
    protected readonly ephno : number
    private eSalary : number

    constructor(){
    this.eName = "Hari"
     EmployeeSignUp.eid = "Emp123"
     this.ephno=7898988989
     this.eSalary = 45345
    }

    printDetails(){
        console.log(`The emp details ${this.eName}: ${EmployeeSignUp.eid} : ${this.ephno}: ${this.eSalary}`);
    }

    public get readData(){
        return this.eSalary
    }

    public set writeData(salar:number){
        this.eSalary=salar // 89898
    }

}

// const emp = new EmployeeSignUp()
// emp.printDetails()
// console.log(emp.readData) //Old Salary =45345 Here readData holds the value of the privately declared global variable
// emp.writeData=89898
// console.log(emp.readData);//Modified Salary = 89898


