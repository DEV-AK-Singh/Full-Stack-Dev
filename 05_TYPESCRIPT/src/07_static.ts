class Company {
    static count = 0;
    name: string;

    constructor(name: string) {
        this.name = name;
        Company.count += 1;
    }
}

const company1 = new Company("Company 1");
const company2 = new Company("Company 2");
const company3 = new Company("Company 3");

console.log(Company.count);