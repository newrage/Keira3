import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from '@keira-config/toastr.config';

import { TopBarModule } from '@keira-shared/modules/top-bar/top-bar.module';
import { QueryOutputModule } from '@keira-shared/modules/query-output/query-output.module';
import { CreatureQuestitemComponent } from './creature-questitem.component';
import { ItemSelectorModule } from '@keira-shared/modules/selectors/item-selector/item-selector.module';
import { CreatureQuestitemService } from './creature-questitem.service';

@NgModule({
  declarations: [
    CreatureQuestitemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TopBarModule,
    QueryOutputModule,
    NgxDatatableModule,
    ItemSelectorModule,
    ToastrModule.forRoot(toastrConfig),
  ],
  exports: [
    CreatureQuestitemComponent,
  ],
  providers: [
    CreatureQuestitemService,
  ],
})
export class CreatureQuestitemModule {}
