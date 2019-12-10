import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";
import { ReferencesComponent } from "./references/references.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    TutorialsComponent,
    ReferencesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
