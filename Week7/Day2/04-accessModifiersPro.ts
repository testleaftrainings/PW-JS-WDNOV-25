import { EmployeeSignUp } from "./03-accessMoodifiers";


class HR extends EmployeeSignUp{ //HR is a derived class / Child class

    empUpdate(){
    //    this.ephno=55555 // Modifying
        console.log(this.ephno)//Reading
    }
  
}

const emp1 = new HR()
emp1.empUpdate()


