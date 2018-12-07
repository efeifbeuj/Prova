import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoDetailComponent } from './veiculo-detail/veiculo-detail.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    VeiculoDetailComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
