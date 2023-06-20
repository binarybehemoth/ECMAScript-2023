class MyClass {
    constructor() {
        return (async () => {
            this.value = await asyncFunction();
            return this;
        })();
    }
}
