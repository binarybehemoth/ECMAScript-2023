const arr = [
{
    id: 'id1',
    level: 'l1',
    children: []
}, {
    id: 'id2',
    level: 'l1',
    children: [{
        id: 'id3',
        level: 'l2',
        children: [{
            id: 'id4',
            level: 'l3',
            children: []
        }]
    }, {
        id: 'id5',
        level: 'l2',
        children: []
    }]
}];

/* depth-first
[{id: "id1", level: "l1"},
 {id: "id2", level: "l1"},
 {id: "id3", level: "l2"},
 {id: "id4", level: "l3"},
 {id: "id5", level: "l2"}]*/
const flatten = ({ children, ...o }) =>[o, ...children.flatMap(flatten)];
console.log(arr.flatMap(flatten));

/* breadth-first
[{id: "id1", level: "l1"},
{id: "id2", level: "l1"},
{id: "id3", level: "l2"},
{id: "id5", level: "l2"},
{id: "id4", level: "l3"}] */
function flatten2(ar){
    for (var i = 0; i < ar.length; i++) {
        if (ar[i].children.length)  ar.push(...ar[i].children);
        delete ar[i].children;
    }
    return ar;
}
console.log(flatten2(arr));
