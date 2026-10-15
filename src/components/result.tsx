import { KEYS, type SwitchKey } from './labeled-switch';

interface ResultProps {
    state: Record<SwitchKey, boolean>;
}
export default function Result({ state }: ResultProps) {
    const trues = KEYS.filter((key) => state[key]);
    const falses = KEYS.filter((key) => !state[key]);
    if (trues.length !== 2) return <p className="opacity-75">Pick two...</p>;

    return (
        <p className="*:font-semibold *:italic">
            It will be <em>{trues[0]}</em> and <em>{trues[1]}</em>, but it will
            not be <em>{falses[0]}</em>.
        </p>
    );
}
