function getAllClasses(startElement) {
    let arr = [];
    if (startElement.children.length) {
        for (const element of startElement.children) {
            if (element.classList.length) {
                for (const item of element.classList) {
                    if (!arr.includes(item)) {
                        arr.push(item);
                    }
                }
            } else {
                arr = arr.concat(getAllClasses(element));
                //or
                //arr = [...arr, ...getAllClasses(element)];
            }
        }
    }
    return arr;
}

console.log(getAllClasses(document.body));

