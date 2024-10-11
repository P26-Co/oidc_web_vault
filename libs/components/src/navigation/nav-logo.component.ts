import { Component, Input } from "@angular/core";

import { Icon } from "../icon";

import { SideNavService } from "./side-nav.service";

@Component({
  selector: "bit-nav-logo",
  templateUrl: "./nav-logo.component.html",
})
export class NavLogoComponent {
  /** Icon that is displayed when the side nav is closed */
  @Input({ required: true }) closedIcon: string;

  /** Icon that is displayed when the side nav is open */
  @Input({ required: true }) openIcon: Icon;

  /**
   * Route to be passed to internal `routerLink`
   */
  @Input({ required: true }) route: string | any[];

  /** Passed to `attr.aria-label` and `attr.title` */
  @Input({ required: true }) label: string;

  constructor(protected sideNavService: SideNavService) {}
}
