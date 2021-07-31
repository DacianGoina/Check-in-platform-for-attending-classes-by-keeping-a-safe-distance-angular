export class User {
    id:number;
    role:string;
    firstName:string;
    lastName:string;
    year:number;
    department:string;

    constructor(id: number,
                role:string,
                firstName:string,
                lastName:string,
                year:number,
                department:string) {
        this.id = id;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.department = department;
    }
}
