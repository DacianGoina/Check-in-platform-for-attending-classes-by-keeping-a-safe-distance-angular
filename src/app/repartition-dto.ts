export class RepartitionDTO {
    studentId:number;
    plannerId:number;
    constructor(studentId:number,
                plannerId:number) {
        this.studentId = studentId;
        this.plannerId = plannerId;
    }

}
