import { useState, useRef } from "react";


enum Operators {
    sum, sub, mul, div
}


export const useCalculator = () => {

const [number, setNumber] = useState("0");
    const [prevNumber, setPrevNumber] = useState("0");

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber("0");
        setPrevNumber("0");
    };

    const buildNumber = (numText: string) => {
        // no accept double point
        if (number.includes(".") && numText === ".") {
            return;
        }

        if (number.startsWith("0") || number.startsWith("-0")) {
            // float
            if (numText === ".") {
                setNumber(number + numText);

                // evaluate if it's another zero and if there is a float point
            } else if (numText === "0" && number.includes(".")) {
                setNumber(number + numText);

                // evualate if is different to zero and it there is not a point
            } else if (numText !== "0" && !number.includes(".")) {
                setNumber(numText);
            } else if (numText === "0" && !number.includes(".")) {
                setNumber(number);
            } else {
                setNumber(number + numText);
            }
        } else {
            setNumber(number + numText);
        }
    };

    const positiveNegative = () => {
        if (number.includes("-")) {
            setNumber(number.replace("-", ""));
        } else {
            setNumber("-" + number);
        }
    };

    const btnDelete = () => {
        let negative = "";
        let tempVal = number;

        if (number.includes("-")) {
            negative = "-";
            tempVal = number.substr(1);
        }

        if (tempVal.length > 1) {
            setNumber(negative + tempVal.slice(0, -1));
        } else {
            setNumber('0');
        }
    };

    const changeNumToPrev = () => {


        if (number.endsWith('.')) {
            console.log('xd');
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    }

    const btnSum = () => {
        changeNumToPrev();
        lastOperation.current = Operators.sum;
    }

    const btnSub = () => {
        changeNumToPrev();
        lastOperation.current = Operators.sub;
    }

    const btnMul = () => {
        changeNumToPrev();
        lastOperation.current = Operators.mul;
    }

    const btnDiv = () => {
        changeNumToPrev();
        lastOperation.current = Operators.div;
    }

    
    const calc = () => {
        
        const num1 = Number(number);
        const num2 = Number(prevNumber);

        switch (lastOperation.current) {
            case Operators.sum:
                setNumber(`${num1+num2}`);
                break;

            case Operators.sub:
                setNumber(`${num2-num1}`);
                break;
        
            case Operators.mul:
                setNumber(`${num1*num2}`);
                break;

            case Operators.div:
                setNumber(`${num2/num1}`);
                break;
            

        }

        setPrevNumber('0');

    }

    return {
        prevNumber,
        number,
        clean,
        positiveNegative,
        buildNumber,
        btnDelete,
        btnSum,
        btnSub,
        btnMul,
        btnDiv,
        calc
    }
}
