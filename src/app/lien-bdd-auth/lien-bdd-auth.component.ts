import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lien-bdd-auth',
  templateUrl: './lien-bdd-auth.component.html',
  styleUrls: ['./lien-bdd-auth.component.scss'],
})
export class LienBddAuthComponent implements OnInit {
  mail!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('mail');
    if (mail) {
      this.mail = mail;
    }
  }
}
