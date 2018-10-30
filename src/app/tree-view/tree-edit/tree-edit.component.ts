import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RulesServiceService} from '../../rules-service.service';

@Component({
  selector: 'app-tree-edit',
  templateUrl: './tree-edit.component.html',
  styleUrls: ['./tree-edit.component.css']
})
export class TreeEditComponent implements OnInit {

  @Input() display;
  @Input() data;

  constructor(private rulesService: RulesServiceService) { }

  ngOnInit() {
  }

  onAdd(from: NgForm) {
    const value = from.value;
    console.log(value.name);
    console.log(value.amount);
    this.display = false;

    let newNode = {
      name: value.name,
      amount: value.amount
    };

    this.rulesService.addChildNode(newNode, this.data);
  }
}
