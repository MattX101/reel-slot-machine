import ReelSpinButton from './ReelSpinButton'

const ReelSlotMachine = ({ }) => {
    return (
        <>
            <div className='text-6xl font-extrabold '>
                <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-slate-400 p-2.5p rounded-t-xl">
                    {/* Left Column */}
                    <div className='grid h-24 col-start-1 row-start-1 rounded-sm text-zinc-500 bg-slate-300 place-items-center'>1</div>
                    <div className="grid col-start-1 row-start-2 rounded-sm text-zinc-700 bg-slate-200 place-items-center">2</div>
                    <div className="grid col-start-1 row-start-3 rounded-sm text-zinc-500 bg-slate-300 place-items-center">3</div>

                    {/* Middle Column */}
                    <div className="grid col-start-2 row-start-1 rounded-sm text-zinc-500 bg-slate-300 place-items-center">1</div>
                    <div className="grid col-start-2 row-start-2 rounded-sm text-zinc-700 bg-slate-200 place-items-center">2</div>
                    <div className="grid col-start-2 row-start-3 rounded-sm text-zinc-500 bg-slate-300 place-items-center">3</div>

                    {/* Right Column */}
                    <div className="grid col-start-3 row-start-1 rounded-sm text-zinc-500 bg-slate-300 place-items-center">1 </div>
                    <div className="grid col-start-3 row-start-2 rounded-sm text-zinc-700 bg-slate-200 place-items-center">2</div>
                    <div className="grid col-start-3 row-start-3 rounded-sm text-zinc-500 bg-slate-300 place-items-center">3</div>
                </div>
            </div>

            <ReelSpinButton />
        </>
    )
}

export default ReelSlotMachine;