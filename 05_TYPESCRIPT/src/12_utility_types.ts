interface collegeDataType {
    name: string
    location: string
    year: number
}

const collegeData: collegeDataType = {
    name: "ABC College",
    location: "New York",
    year: 2022
}

const collegeData3: Pick<collegeDataType, "name" | "location"> = {
    name: "ABC College",
    location: "New York"
}

const collegeData4: Partial<collegeDataType> = {
    name: "ABC College",
    location: "New York"
}

const collegeData5: Required<collegeDataType> = {
    name: "ABC College",
    location: "New York",
    year: 2022
}

const collegeData6: Readonly<Pick<collegeDataType, "name" | "location">> = {
    name: "ABC College",
    location: "New York"
}

const collegeData2: Omit<collegeDataType, "year"> = {
    name: "ABC College",
    location: "New York"
}

type keys = keyof collegeDataType;
// const key1: keys = "name"
// const key2: keys = "location"
// const key3: keys = "year"

const collegeData7: Record<keys, string> = {
    name: "ABC College",
    location: "New York",
    year: "2022"
}

type API_Status = "success" | "fail" | "pending"
const status1: API_Status = "success"
type API_Call_Status = Exclude<API_Status, "pending">
// const status2: API_Call_Status = "pending" // error
type API_Call_Status2 = Extract<API_Status, "success" | "fail">
// const status3: API_Call_Status2 = "success"

type RandomNumber = string | number | undefined | null | boolean 
type RandomNumber2 = NonNullable<RandomNumber>
const randomNumber1: RandomNumber2 = 1
// const randomNumber2: RandomNumber2 = null // error
// const randomNumber3: RandomNumber2 = undefined // error