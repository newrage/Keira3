import { Component, } from '@angular/core';

import { DTCFG } from '../../../../config/datatable.config';
import { SMARTAI_SOURCE_TYPES } from '../../../../types/smart-scripts.type';
import { WIKI_BASE_URL } from '../../../../constants/general';
import { SmartScriptsSearchService } from '../../../../services/search/smartai-search.service';
import { SmartScriptsHandlerService } from '../../../../services/handlers/smart-scripts-handler.service';

@Component({
  selector: 'app-select-creature',
  templateUrl: './select-conditions.component.html',
  styleUrls: ['./select-conditions.component.scss']
})
export class SmartaiSearchScriptComponent {
  public readonly DTCFG = DTCFG;
  public readonly WIKI_BASE_URL = WIKI_BASE_URL;
  public readonly SMARTAI_SOURCE_TYPES = SMARTAI_SOURCE_TYPES;

  constructor(
    public selectService: SmartScriptsSearchService,
    private handlerService: SmartScriptsHandlerService,
  ) {}

  onSelect(event) {
    this.handlerService.select(false, event.selected[0]);
    console.log(this.handlerService.selected);
  }

  onCreateNew() {
    this.handlerService.select(true, this.selectService.fields.getRawValue());
    console.log(this.handlerService.selected);
  }
}
