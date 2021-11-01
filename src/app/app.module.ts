import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";

import { HttpClientModule } from "@angular/common/http";
import { PokemonService } from "./services/pokemon.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PokemonHeaderComponent } from "./pokemon-header/pokemon-header.component";
import { PokemonFooterComponent } from "./pokemon-footer/pokemon-footer.component";
import { PokemonNavComponent } from "./pokemon-nav/pokemon-nav.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonFooterComponent,
    PokemonHeaderComponent,
    PokemonNavComponent
  ],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, NgxPaginationModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
