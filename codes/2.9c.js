function equals(o1, o2) {
    function _equals(a, b) {
        return JSON.stringify(a) ===  
               JSON.stringify($.extend(true, {}, a, b));
    }
    return _equals(o1, o2) && _equals(o2, o1);
}
