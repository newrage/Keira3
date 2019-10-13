import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SmartScripts, SMART_SCRIPTS_ID_FIELDS } from '../../types/smart-scripts.type';
import { HandlerService } from './handler.service';
import { getPartial } from '../../utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class SmartScriptsHandlerService extends HandlerService<SmartScripts> {
  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    protected router: Router,
  ) {
    super(
      'smart-scripts/smartai-search-script',
      router,
    );
  }

  select(isNew: boolean, id: Partial<SmartScripts>) {
    super.select(isNew, this.getIdObject(id));
  }

  private getIdObject(input: Partial<SmartScripts> | SmartScripts): Partial<SmartScripts> {
    return getPartial<SmartScripts>(input, SMART_SCRIPTS_ID_FIELDS);
  }
}
