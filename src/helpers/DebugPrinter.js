import devTools from '../../devTools.json';

export function debugLog(input) {
    if (devTools.displayText) {
        console.log(input);
    }
}