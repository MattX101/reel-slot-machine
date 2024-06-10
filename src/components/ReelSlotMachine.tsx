import { Component } from 'react';
import ReelSpinButton from './ReelSpinButton';

import BlankLogo from '../images/blank.png';

class ReelSlotMachine extends Component {
    render() {
        // Column ids, set individually on img elements creation
        const leftColId = "leftCol";
        const middleColId = "middleCol";
        const rightColId = "rightCol";

        return (
            <>

                {/* Slot Display */}
                <div className="grid grid-cols-3 grid-rows-3 gap-x-2 p-2.5p rounded-t-xl bg-slate-400">

                    {/* Left Column */}
                    <div className='grid col-start-1 row-start-1 rounded-t-full bg-slate-200'>
                        <img id={leftColId + 1} className='h-24 p-15p' src={BlankLogo} alt='number' />
                    </div>
                    <div className="grid col-start-1 row-start-2 bg-slate-200">
                        <img id={leftColId + 2} className='h-24 p-5p' src={BlankLogo} alt='number' />
                    </div>
                    <div className="grid col-start-1 row-start-3 rounded-b-full bg-slate-200">
                        <img id={leftColId + 3} className='h-24 p-15p' src={BlankLogo} alt='number' />
                    </div>

                    {/* Middle Column */}
                    <div className="grid col-start-2 row-start-1 rounded-t-full bg-slate-200">
                        <img id={middleColId + 1} className='h-24 p-15p' src={BlankLogo} alt='number' />
                    </div>
                    <div className="grid col-start-2 row-start-2 bg-slate-200">
                        <img id={middleColId + 2} className='h-24 p-5p' src={BlankLogo} alt='number' />
                    </div>
                    <div className="grid col-start-2 row-start-3 rounded-b-full bg-slate-200">
                        <img id={middleColId + 3} className='h-24 p-15p' src={BlankLogo} alt='number' />
                    </div>

                    {/* Right Column */}
                    <div className="grid col-start-3 row-start-1 rounded-t-full bg-slate-200">
                        <img id={rightColId + 1} className='h-24 p-15p' src={BlankLogo} alt='number' />
                    </div>
                    <div className="grid col-start-3 row-start-2 bg-slate-200">
                        <img id={rightColId + 2} className='h-24 p-5p' src={BlankLogo} alt='number' />
                    </div>
                    <div className="grid col-start-3 row-start-3 rounded-b-full bg-slate-200">
                        <img id={rightColId + 3} className='h-24 p-15p' src={BlankLogo} alt='number' />
                    </div>

                </div>

                <ReelSpinButton ids={[leftColId, middleColId, rightColId]} />

            </>
        )
    }
}

export default ReelSlotMachine;