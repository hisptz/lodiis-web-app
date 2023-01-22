export function ErrorThrower({error}: { error: any }) {
    if (error) {
        throw error;
    }
    return null;
}
