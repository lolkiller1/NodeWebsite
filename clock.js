class Clock {
        constructor() {
                this.num = 0;
        }
        getNum() {
                this.num = this.num + 1;
                return this.num;
        }
}

exports.clock = new Clock();
