import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@athenaeum-nx/auth';
import { ExampleLibModule } from '@athenaeum-nx/example-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AuthModule,
    ExampleLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
