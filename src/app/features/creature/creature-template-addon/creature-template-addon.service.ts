import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CreatureHandlerService } from '../creature-handler.service';
import { QueryService } from '@keira-shared/services/query.service';
import { SingleRowEditorService } from '@keira-abstract/service/editors/single-row-editor.service';
import {
  CREATURE_TEMPLATE_ADDON_ID, CREATURE_TEMPLATE_ADDON_TABLE,
  CreatureTemplateAddon
} from '@keira-types/creature-template-addon.type';

@Injectable()
export class CreatureTemplateAddonService extends SingleRowEditorService<CreatureTemplateAddon> {

  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    protected handlerService: CreatureHandlerService,
    protected queryService: QueryService,
    protected toastrService: ToastrService,
  ) {
    super(
      CreatureTemplateAddon,
      CREATURE_TEMPLATE_ADDON_TABLE,
      CREATURE_TEMPLATE_ADDON_ID,
      null,
      false,
      handlerService,
      queryService,
      toastrService,
    );
  }
}
