import { NumberTicker } from "./Numbertickercore";

export function NumberTickerDemo() {
return (
    <NumberTicker
        value={50000}
        className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    />
);
}
