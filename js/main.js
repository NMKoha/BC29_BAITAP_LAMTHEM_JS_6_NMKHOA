function getEle(id) {
    return document.getElementById(id);
};

function soNguyenTo(n) {
    var kq;
    if (n < 2) {
        kq = false;
    } else if (n === 2 || n === 3) {
        kq = true;
    } else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                kq = false;
                break;
            } else {
                kq = true;
            };
        };
    };
    return kq;
};


getEle("btnBaiTap").onclick = function() {
    var n = getEle("soN").value * 1;
    var result = "";
    var kq = true;
    var i = 0;
    while (i <= n) {
        kq = soNguyenTo(i);
        if (kq === true) {
            result += i + " ";
        }
        i++;
    };
    getEle("divInfo").style.display = "block";
    getEle("divInfo").innerHTML = result;
};