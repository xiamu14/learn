interface lableObj {
    lable: string
}

function printLabel(lableObj: lableObj) {
    console.log(lableObj.lable);
}

const myObj = {size: 10, lable: "size 10 object"};

printLabel(myObj);
