function checkCashRegister(price, cash, cid) {
    const cUnits = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    };

    let result = [];
    let cidLen = cid.length - 1;
    let change = cash - price;
    let remainder = 9;

    while (change > 0 && cidLen >= 0) {
        let div = parseInt(change / cUnits[cid[cidLen][0]]);
        if (div) {
            let deduct = cUnits[cid[cidLen][0]] * div;

            if (deduct >= cid[cidLen][1]) {
                deduct = cid[cidLen][1];
                --remainder;
            }

            result.push([cid[cidLen][0], deduct]);
            change = (change - deduct).toFixed(2);

        } else if (cid[cidLen][1] == 0) {
            --remainder;
        }

        cidLen--;
    }

    let status = "OPEN";

    if (change == 0 && remainder == 0) {
        status = "CLOSED";
        result = cid;
    } else if (change > 0) {
        status = "INSUFFICIENT_FUNDS";
        result = [];
    }

    return { status: status, change: result };
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));