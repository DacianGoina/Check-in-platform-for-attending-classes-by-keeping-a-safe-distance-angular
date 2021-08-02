export class ClassDTO {
    id:number;
    classroomId:number;
    classId:number;
    startDate:string;
    endDate:string;
    courseName:string;
    roomName:string;
    teacherFirstName:string;
    teacherLastName:string;
    capacity:number;



    constructor(classId: number,
                id : number,
                classroomId:number,
                startDate:string,
                endDate:string,
                capacity:number,
                teacherLastName:string,
                roomName:string,
                courseName:string,
                teacherFirstName:string
                ) {
        this.id = id;
        this.classroomId = classroomId;
        this.classId = classId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.courseName = courseName;
        this.roomName = roomName;
        this.teacherFirstName = teacherFirstName;
        this.teacherLastName = teacherLastName;
        this.capacity = capacity;
    }
}
