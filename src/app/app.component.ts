import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { AboutModalConfig } from 'patternfly-ng';
import { AboutModalEvent } from 'patternfly-ng/modal/about-modal-event';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  aboutConfig: AboutModalConfig;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.aboutConfig = {
      additionalInfo: 'Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum ' +
      'laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. ' +
      'Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.',
      copyright: 'Trademark and Copyright Information',
      logoImageAlt: 'Patternfly Symbol',
      logoImageSrc: '//www.patternfly.org/assets/img/logo-alt.svg',
      title: 'Product Title',
      productInfo: [
        { name: 'Version', value: '1.0.0.0.20160819142038_51be77c' },
        { name: 'Server Name', value: 'Localhost' },
        { name: 'User Name', value: 'admin' },
        { name: 'User Role', value: 'Administrator' }]
    } as AboutModalConfig;
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  closeModal($event: AboutModalEvent): void {
    this.modalRef.hide();
  }
}

