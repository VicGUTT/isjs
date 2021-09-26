export default class IsBaseException extends Error {
    protected static thow(message: string): IsBaseException {
        return new IsBaseException(`[is.js]: ${message}`);
    }

    static unknown(message?: string): IsBaseException {
        return IsBaseException.thow(message || 'An unknown error occured.');
    }
}
