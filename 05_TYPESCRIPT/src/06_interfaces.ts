interface CollegeDataInterface {
    name: string;
    location: string;
    year: number;
    displayData(): void;
};

class CollegeData implements CollegeDataInterface {
    name: string;
    location: string;
    year: number;
    
    constructor(name: string, location: string, year: number) {
        this.name = name;
        this.location = location;
        this.year = year;
    }
    
    displayData(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Year: ${this.year}`);
    }
;
};


