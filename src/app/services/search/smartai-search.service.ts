import { SearchService } from './search.service';
import { SmartScripts, SMART_SCRIPTS_SEARCH_FIELDS, SMART_SCRIPTS_TABLE } from '../../types/smart-scripts.type';
import { QueryService } from '../query.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartScriptsSearchService extends SearchService<SmartScripts> {
  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    protected queryService: QueryService,
  ) {
    super(queryService, SMART_SCRIPTS_TABLE, SMART_SCRIPTS_SEARCH_FIELDS);
  }
}
