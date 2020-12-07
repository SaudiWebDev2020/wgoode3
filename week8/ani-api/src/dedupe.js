export default function dedupe(arr) {
    const newArr = [];
    for(let item of arr) {
        let exists = false;
        for(let thing of newArr) {
            // we can use the `mal_id` to compare the objects
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
