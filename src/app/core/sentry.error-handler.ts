import * as Sentry from '@sentry/browser';
import { Injectable, ErrorHandler } from '@angular/core';

Sentry.init({
    dsn: 'https://9fb5aa017e3e433182eabc8fce75aba0@sentry.io/2205492'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error) {
        const eventId = Sentry.captureException(error.originalError || error);
        Sentry.showReportDialog({ eventId });
    }
}
