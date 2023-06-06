export function uuid() {
    const letters: string =
        'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allowedChars: string = '0123456789' + letters;
    const NUMBER_OF_CODEPOINTS = allowedChars.length;
    const CODESIZE = 11;
    let uid: any;
    uid = letters.charAt(Math.random() * letters.length);
    for (
        let codeSIZEPosition: number = 1;
        codeSIZEPosition < CODESIZE;
        codeSIZEPosition++
    ) {
        uid += allowedChars.charAt(Math.random() * NUMBER_OF_CODEPOINTS);
    }
    return uid;
}
