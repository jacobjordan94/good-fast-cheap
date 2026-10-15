import { Switch } from './ui/switch';

export const KEYS = ['fast', 'good', 'cheap'] as const;
export type SwitchKey = (typeof KEYS)[number]; // 'fast' | 'good' | 'cheap'

interface LabeledSwitchProps {
    label: SwitchKey;
    onChange: (switchIdentifier: SwitchKey, value: boolean) => void;
    value: boolean;
}
export default function LabeledSwitch({
    label,
    onChange,
    value,
}: LabeledSwitchProps) {
    const id = `${label}-switch`;
    return (
        <div className="switch-container flex items-center justify-between">
            <label
                htmlFor={id}
                className={`text-lg transition-[text-shadow] ${
                    value
                        ? '[text-shadow:0.25px_0_currentColor,-0.25px_0_currentColor]'
                        : '[text-shadow:0.25px_0_transparent,-0.25px_0_transparent]'
                }`}
            >
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </label>
            <Switch
                id={id}
                checked={value}
                onCheckedChange={(val) => onChange(label, val)}
                className="cursor-pointer"
            />
        </div>
    );
}
