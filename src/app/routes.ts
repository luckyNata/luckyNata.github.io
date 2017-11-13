import {Routes} from "@angular/router";
import {AllSpeechesComponent} from "./all-speeches/all-speeches.component";
import {MySpeechesComponent} from "./my-speeches/my-speeches.component";
import {NewSpeechComponent} from "./new-speech/new-speech.component";
import {SpeechComponent} from "./speech/speech.component";

export class RoutesConfig {
  public static config: Routes = [
    {
      path: '',
      redirectTo: '/all-speeches',
      pathMatch: 'full'
    },
    {
      path: 'all-speeches',
      component: AllSpeechesComponent
    },
    {
      path: 'my-speeches',
      component: MySpeechesComponent
    },
    {
      path: 'new',
      component: NewSpeechComponent
    },
    {
      path: 'speech/:id',
      component: SpeechComponent
    }
  ]
}
