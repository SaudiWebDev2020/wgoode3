function generateId() {
    let nextId = 1;
    return function() {
        return nextId++;
    }
}

// const getId = generateId();

// console.log(getId());
// console.log(getId());
// console.log(getId());
// console.log(getId());
// console.log(getId());
// console.log(nextId);

export default generateId;