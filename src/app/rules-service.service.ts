import { Injectable } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {childOfKind} from 'tslint';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RulesServiceService {

  constructor() { }

  addChildNode(newNode: any, parent: TreeNode) {
    const childNode: TreeNode = {};
    childNode.label = newNode.name;
    childNode.data = newNode;
    parent.children.push(childNode);
  }
}
