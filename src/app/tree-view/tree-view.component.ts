import { Component, OnInit } from '@angular/core';
import {TreeNode, MenuItem} from 'primeng/api';
import {Node} from './node.model';
import {TreeDragDropService} from 'primeng/api';
import {Tree} from 'primeng/tree';


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  providers: [TreeDragDropService]
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  files: TreeNode[];

  selectedNode: TreeNode;

  hierarchy: any;

  buttonEnabed = false;

  items: MenuItem[];

  ngOnInit() {
    this.hierarchy = {
      'data': [
              {
                'label': 'Documents',
                'data': 'Documents Folder',
                'expandedIcon': 'fa fa-circle-o',
                'collapsedIcon': 'fa fa-circle',
                'children': [{
                  'label': 'Work',
                  'data': 'Work Folder',
                  'expandedIcon': 'fa fa-circle-o',
                  'collapsedIcon': 'fa fa-circle',
                  'children': [
                    {'label': 'Expenses.doc',
                    'icon': 'fa fa-file-word-o',
                    'data': 'Expenses Document'
                    },
                    {'label': 'Resume.doc',
                      'icon': 'fa fa-file-word-o',
                      'data': 'Resume Document'
                    }
                    ]
                },
                  {
                    'label': 'Home',
                    'data': 'Home Folder',
                    'expandedIcon': 'fa fa-circle-o',
                    'collapsedIcon': 'fa fa-circle',
                    'children': [{'label': 'Invoices.txt', 'icon': 'fa fa-file-word-o', 'data': 'Invoices for this month'}]
                  }]
              },
              {
                'label': 'Pictures',
                'data': 'Pictures Folder',
                'expandedIcon': 'fa fa-circle-o',
                'collapsedIcon': 'fa fa-circle',
                'children': [
                  {'label': 'barcelona.jpg', 'icon': 'fa fa-file-image-o', 'data': 'Barcelona Photo'},
                  {'label': 'logo.jpg', 'icon': 'fa fa-file-image-o', 'data': 'PrimeFaces Logo'},
                  {'label': 'primeui.png', 'icon': 'fa fa-file-image-o', 'data': 'PrimeUI Logo'}]
              },
              {
                'label': 'Movies',
                'data': 'Movies Folder',
                'expandedIcon': 'fa fa-circle-o',
                'collapsedIcon': 'fa fa-circle',
                'children': [{
                  'label': 'Al Pacino',
                  'data': 'Pacino Movies',
                  'children': [{'label': 'Scarface', 'icon': 'fa fa-file-video-o', 'data': 'Scarface Movie'}, {'label': 'Serpico', 'icon': 'fa fa-file-video-o', 'data': 'Serpico Movie'}]
                },
                  {
                    'label': 'Robert De Niro',
                    'data': 'De Niro Movies',
                    'children': [{'label': 'Goodfellas', 'icon': 'fa fa-file-video-o', 'data': 'Goodfellas Movie'}, {'label': 'Untouchables', 'icon': 'fa fa-file-video-o', 'data': 'Untouchables Movie'}]
                  }]
              }
            ]
    };

    const data1 = {
      rule : 'x=1',
      type : 'ExtDes',
      children : [{
        rule : 'x=2',
        type : 'ParamFix',
        children: [{
          rule : 'x=3',
          type : 'ParamFlag'
        }, {
          rule : 'x=4',
          type : 'ParamFlag'
        }]
      }]
    };

    let data2: TreeNode;
    data2 = this.continentToTreeNode(data1);
    console.log(data2);

    this.files = [{
      label: 'Root',
      expandedIcon: 'fa fa-circle-o',
      collapsedIcon: 'fa fa-circle',
      children: [data2]
    }];

    this.items = [
      {label: 'Add Child', icon: 'fa fa-plus', command: (event) => this.addChildNode(this.selectedNode)},
      {label: 'Edit', icon: 'fa fa-pencil-square-o', command: (event) => console.log(this.selectedNode)}
    ];
    console.log(this.files);
  }

  private continentToTreeNode(cont: any): TreeNode {

    let treeData : TreeNode = {};
    treeData.label = cont.rule;
    treeData.expandedIcon = 'fa fa-circle-o';
    treeData.collapsedIcon = 'fa fa-circle';
    treeData.data = {
      rule: cont.rule,
      type : cont.type
    }
    treeData.children = [];
    if (cont.children && cont.children.length) {
      for ( let i = 0; i < cont.children.length; ++i ) {
        treeData.children.push(this.continentToTreeNode(cont.children[i]));
      }
    }

    return treeData;
  }


  nodeSelect(event) {
    console.log(this.selectedNode);
    this.buttonEnabed = true;

  }

  addChildNode(selectedNode: TreeNode) {
    console.log(selectedNode);
    selectedNode.children.push({
      'label': 'New Node',
      'data': 'De Niro Movies',
      'icon': 'fa fa-file-video-o'
    });
  }

  edit() {
    console.log('edit');
  }

}
