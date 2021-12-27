class Date {
    day;
    month;
    year;

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year
    }

    get day() {
        return this.day
    }

    get month() {
        return this.month
    }

    get year() {
        return this.year
    }

    setday(day) {
        this.day = day;
    }

    setmonth(month) {
        this.month = month
    }

    setyear(year) {
        this.year = year
    }
    Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString() {
        return this.day + "/" + this.month + "/" + this.year;
    }
}