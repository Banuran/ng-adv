import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DemoService } from '../../demo-base/demo.service';

@Component({
  selector: 'app-action-streams',
  templateUrl: './action-streams.component.html',
  styleUrls: ['./action-streams.component.scss'],
})
export class ActionStreamsComponent {
  constructor(private ds: DemoService) {}

  demosData$ = this.ds.getItems();
  filter$ = new UntypedFormControl('');

  demos$ = combineLatest([
    this.demosData$,
    this.filter$.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([demos, filter]) => {
      return filter != ''
        ? demos.filter((d) =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );
}
