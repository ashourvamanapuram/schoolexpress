// TypeScript code goes here
export class SchoolExpress {
  private students = new Map<string, Student>();

  public addStudent(student: Student) {
    this.students.set(student.id, student);
  }

  public getStudents() {
    return Array.from(this.students.values());
  }
}

class Student {
  constructor(public id: string, public name: string) {}
}
