import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {BsErrorDialogsService} from './services/bs-error-dialogs.service';

@Injectable()

export class BlogInterceptor implements  HttpInterceptor {
  constructor(private bsErrorDialogsSvc: BsErrorDialogsService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '';
    const clonedReq = req.clone({});
    return next.handle(clonedReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Event', event);
        }
        return event;
      }),
      catchError((err: any) => {
        if (err instanceof  HttpErrorResponse) {
          console.log('Error => ', err);
          this.bsErrorDialogsSvc.openErrorDialog({
            open: true,
            errorMessage: err.message
          });
        }
        return of(err);
      })
    );
  }
}
