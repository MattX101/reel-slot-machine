import React from "react";

type Props = {
    ids: Array<string>;
}

const ReelSpinButton: React.FC<Props> = ({ ids }) => {
    const min = 0;
    const max = 9;

    function generateRadomNumber() {
        return Math.ceil(Math.random() * max);
    }

    function setElement(id: string, value: number) {
        let display = document.getElementById(id) as HTMLElement;
        display.innerText = value.toString();
    }

    function setReel(id: string) {
        const value = generateRadomNumber();

        setElement(id + 1, value === min ? max : value - 1);
        setElement(id + 2, value);
        setElement(id + 3, value === max ? min : value + 1);
    }

    function spin() {
        setReel(ids[0]);
        setReel(ids[1]);
        setReel(ids[2]);
    }

    return (
        <div className='bg-slate-400 p-2.5p grid place-items-center rounded-b-xl'>
            <button onClick={() => spin()} className="text-2xl font-bold bg-red-600 rounded-md text-slate-800 p-1p px-5p hover:bg-red-300">
                Spin
            </button>
        </div>
    )
}

export default ReelSpinButton