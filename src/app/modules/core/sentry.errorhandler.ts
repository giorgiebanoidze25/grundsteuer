import * as Sentry from '@sentry/browser';
import { ErrorHandler, Injectable } from '@angular/core';
import { AppConfig } from '~app/configs/app.config';

Sentry.init({
  dsn: AppConfig.sentryDSN,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
