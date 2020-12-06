export default function(arr) {
    const newArr = [];
    for(let item of arr) {
        // console.log(item);
        // we can use the `id` to compare the objects
        let exists = false;
        for(let thing of newArr) {
            if(thing.mal_id === item.mal_id) {
                exists = true;
                break
            }
        }
        if(!exists) {
            newArr.push(item);
        }
    }
    return newArr;
}