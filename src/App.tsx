import { useState } from 'react';
import LabeledSwitch, {
    KEYS,
    type SwitchKey,
} from './components/labeled-switch';
import Result from './components/result';

export function App() {
    const [state, setState] = useState<Record<SwitchKey, boolean>>({
        fast: false,
        good: false,
        cheap: false,
    });

    const onChange = (key: SwitchKey, val: boolean) => {
        setState((prev) => {
            const next = { ...prev, [key]: val };
            if (val && KEYS.every((k) => next[k])) {
                // all three on, switch off one of the others
                const others = KEYS.filter((k) => k !== key);
                next[others[Math.floor(Math.random() * others.length)]] = false;
            }
            return next;
        });
    };

    return (
        <main className="grid min-h-svh grid-rows-3 p-8 font-serif *:flex *:items-center *:justify-center 2xl:*:zoom-200">
            <div className="instructions-container flex-col gap-2">
                <h1 className="text-3xl font-bold italic">Unfortunately...</h1>
                <p className="font-semibold">You may only pick two.</p>
            </div>
            <div className="switches-container">
                <div className="inner-switch-container flex w-32 scale-150 flex-col gap-6 sm:landscape:scale-90">
                    {KEYS.map((key) => (
                        <LabeledSwitch
                            key={key}
                            value={state[key]}
                            label={key}
                            onChange={onChange}
                        />
                    ))}
                </div>
            </div>
            <div
                className="result-container *:text-center *:text-xl"
                aria-live="polite"
            >
                <Result state={state} />
            </div>
        </main>
    );
}

export default App;
