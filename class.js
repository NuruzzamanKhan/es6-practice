class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Pabna Cadet Collage"
    }
}

const student1 = new student(22, "Mahi")
const student2 = new student(23, "Rakib")
console.log(student1, student2);