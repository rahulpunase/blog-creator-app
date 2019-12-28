import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/data-interfaces/categories.interface';
import { BasicHttpService } from 'src/app/services/basic-http.service';

@Injectable()
export class FetchStartData implements Resolve<ICategories> {
    constructor(private httpService: BasicHttpService) {
      // changes
    }

    resolve(route: ActivatedRouteSnapshot, rState: RouterStateSnapshot): Promise<ICategories> {
        return this.httpService.getCategories().toPromise().then(data => data);
    }
    create() {
      console.log('create')
    }
}
