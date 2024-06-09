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
    // An array of images used for the slot machine values
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

    /** Returns an integer number between 0 and max, used to set the src of the slot images*/
    function generateRadomNumber() {
        // An integer number between 0 and max is needed for...
        // a valid index to be used in the logos array, however...
        // Math.random only generates a linear decimal number (0 to 1).

        // On number generation the value is multiplied by max to return a number between 0 and max,...
        // Math.ceil is used to set the decimal number to an integer.

        // The reason for the +/- 1 is due to ceil function never returning a 0...
        // due to the Math.random never generating a number smaller then 0

        return Math.ceil(Math.random() * (max + 1)) - 1;
    }

    /** Returns image logo for slot image */
    function pickLogo(index: number) {
        // If index outside of valid range, a blank logo is returned
        if (index < 0 || index > logos.length)
            return BlankLogo;

        // Returns a valid logo
        return logos[index];
    }

    /** Sets image element through id */
    function setImage(id: string, index: number) {
        let image = document.getElementById(id) as HTMLImageElement;
        image.src = pickLogo(index);
    }

    /** Sets display column */
    function setColumn(id: string) {
        // RNG number used to set the image logos
        const index = generateRadomNumber();

        setImage(id + 1, index === min ? max : index - 1);
        setImage(id + 2, index);
        setImage(id + 3, index === max ? min : index + 1);
    }

    /** Plays reel slot machine */
    function spin() {
        setColumn(ids[0]);
        setColumn(ids[1]);
        setColumn(ids[2]);
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