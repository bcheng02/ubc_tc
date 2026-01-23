import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../models/team-member';
import { TEAM } from '../../data/team';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  ngOnInit() {
    // Ready for actual team data - uncomment and replace when you have real data
    this.teamMembers = TEAM;
  }
}
