import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from '@keira-config/toastr.config';

import { TopBarModule } from '@keira-shared/modules/top-bar/top-bar.module';
import { QueryOutputModule } from '@keira-shared/modules/query-output/query-output.module';
import { ItemEnchantmentTemplateComponent } from './item-enchantment-template.component';
import { ItemEnchantmentTemplateService } from './item-enchantment-template.service';

@NgModule({
  declarations: [
    ItemEnchantmentTemplateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TopBarModule,
    QueryOutputModule,
    NgxDatatableModule,
    ToastrModule.forRoot(toastrConfig),
  ],
  exports: [
    ItemEnchantmentTemplateComponent,
  ],
  providers: [
    ItemEnchantmentTemplateService,
  ],
})
export class ItemEnchantmentTemplateModule {}
