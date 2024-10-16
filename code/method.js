class Surgeon{
    constructor(name, department){
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name(){
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    // initialize a method

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

console.log(takeVacationDays);