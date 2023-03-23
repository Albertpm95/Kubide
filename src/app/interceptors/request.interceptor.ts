import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'environments/environments';
import { Md5 } from 'ts-md5';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let ts = Date.now()
    let hash = Md5.hashStr(ts + environments.PRIVKEY + environments.PUBKEY)
    const requestCloned = request.clone({
      params: request.params.set('ts', ts).set('apikey', environments.PUBKEY).set('hash', hash)

    })
    return next.handle(requestCloned);
  }
}
