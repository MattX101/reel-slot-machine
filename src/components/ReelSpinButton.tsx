import React from "react";

import BlankLogo from '../images/blank.png';
import ZeroLogo from '../images/zero.png';
import OneLogo from '../images/one.png';
import TwoLogo from '../images/two.png';
import ThreeLogo from '../images/three.png';
import FourLogo from '../images/four.png';
import FiveLogo from '../images/five.png';
import SixLogo from '../images/six.png';
import SevenLogo from '../images/seven.png';
import EightLogo from '../images/eight.png';
import NineLogo from '../images/nine.png';

type Props = {
    ids: Array<string>;
}

const ReelSpinButton: React.FC<Props> = ({ ids }) => {
    const logos = [
        ZeroLogo,
        OneLogo,
        TwoLogo,
        ThreeLogo,
        FourLogo,
        FiveLogo,
        SixLogo,
        SevenLogo,
        EightLogo,
        NineLogo
    ];

    const min = 0;
    const max = logos.length - 1;

    function generateRadomNumber() {
        return Math.ceil(Math.random() * max);
    }

    function pickLogo(image: HTMLImageElement, value: number) {
        if (value < 0 || value > logos.length) {
            image.src = BlankLogo;
            return;
        }

        image.src = logos[value];
    }

    function setImage(id: string, value: number) {
        pickLogo(
            document.getElementById(id) as HTMLImageElement,
            value
        );
    }

    function setReel(id: string) {
        const value = generateRadomNumber();

        setImage(id + 1, value === min ? max : value - 1);
        setImage(id + 2, value);
        setImage(id + 3, value === max ? min : value + 1);
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