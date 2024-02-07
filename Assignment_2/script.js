document.addEventListener("DOMContentLoaded", function() {

    if (document.readyState !== "complete") {
        console.log("DOM is still loading...");
    }

    let resultNum = document.getElementById("resultValue").textContent;


    function bttnClear() {
        document.getElementById("resultValue").textContent = "";
        document.getElementById("resultSymbol").textContent = "";
    }
    
    function bttnAdd() {
        let num = document.getElementById("resultValue").textContent;
        resultNum = num;
        document.getElementById("resultSymbol").textContent = "+" + num;
        document.getElementById("resultValue").textContent = "";
    }
    
    function bttnSub() {
        let num = document.getElementById("resultValue").textContent;
        resultNum = num;
        document.getElementById("resultSymbol").textContent = "-" + num;
        document.getElementById("resultValue").textContent = "";
    }
    
    function bttnMultiply() {
        let num = document.getElementById("resultValue").textContent;
        resultNum = num;
        document.getElementById("resultSymbol").textContent = "*" + num;
        document.getElementById("resultValue").textContent = "";
    }
    
    function bttnDivide() {
        let num = document.getElementById("resultValue").textContent;
        resultNum = num;
        document.getElementById("resultSymbol").textContent = "/" + num;
        document.getElementById("resultValue").textContent = "";
    }
    
    function bttnPercentage() {
        let num = document.getElementById("resultValue").textContent;
        resultNum = num;
        document.getElementById("resultSymbol").textContent = "%" + num;
        document.getElementById("resultValue").textContent = "";
    }
    
    function bttnResult() {
        let num = parseInt(document.getElementById("resultValue").textContent);
        let symbolCheck = document.getElementById("resultSymbol").textContent;
        //let indexCheck = symbolCheck.length;
    
        if (symbolCheck[0] === "+") {
            let result = parseInt(resultNum) + num;
            document.getElementById("resultValue").textContent = result;
            document.getElementById("resultSymbol").textContent = "";
        } else if (symbolCheck[0] === "-") {
            let result = parseInt(resultNum) - num;
            document.getElementById("resultValue").textContent = result;
            document.getElementById("resultSymbol").textContent = "";
        } else if (symbolCheck[0] === "*") {
            let result = parseInt(resultNum) * num;
            document.getElementById("resultValue").textContent = result;
            document.getElementById("resultSymbol").textContent = "";
        } else if (symbolCheck[0] === "%") {
            let result = (parseInt(resultNum) / 100) * num;
            document.getElementById("resultValue").textContent = result;
            document.getElementById("resultSymbol").textContent = "";
        }
        else if (symbolCheck[0] === "/") {
            let result = parseInt(resultNum) / num;
            document.getElementById("resultValue").textContent = result;
            document.getElementById("resultSymbol").textContent = "";
        }
    }
    
    function bttnNum1() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 1;
    }
    
    function bttnNum2() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 2;
    }
    
    function bttnNum3() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 3;
    }
    
    function bttnNum4() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 4;
    }
    
    function bttnNum5() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 5;
    }
    
    function bttnNum6() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 6;
    }
    
    function bttnNum7() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 7;
    }
    
    function bttnNum8() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 8;
    }
    
    function bttnNum9() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 9;
    }
    
    function bttnNum0() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + 0;
    }
    
    function bttnNumDot() {
        let num = document.getElementById("resultValue").textContent;
        document.getElementById("resultValue").textContent = num + ".";
    }
});