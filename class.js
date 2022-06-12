class Support {
    name;
    designation;
    address;
    constructor(name, address, designation) {
        this.name = name;
        this.address = address;
        this.designation = designation;
    }
    StartSession() {
        console.log(this.name, 'Start a Support Session');
    }
}

const Amir = new Support('Amir Khan', 'BD', 'Engineer');
const Asif = new Support('Asif Khan', 'Dubai', 'engineer');
// console.log(Amir);
// console.log(Asif);
Amir.StartSession();
Asif.StartSession();