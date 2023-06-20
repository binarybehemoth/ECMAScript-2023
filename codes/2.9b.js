function clone(obj) {
    var copy;
    if (null == obj || "object" != typeof obj) return obj;
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++)
              copy[i] = clone(obj[i]);
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (let attr in obj) 
            if (obj.hasOwnProperty(attr)) 
                copy[attr] = clone(obj[attr]);
        return copy;
    }
    throw new Error("Unable to clone object! ");
}
