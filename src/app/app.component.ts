import { Component, ViewChild } from '@angular/core';
import { TreeComponent, TreeNode } from 'ng-devui/tree';

@Component({
  selector: 'd-basic',
  templateUrl: './app.component.html',
})
export class BasicComponent {
  @ViewChild('basicTree', { static: true }) basicTree: TreeComponent;
  data = [
    {
      title: '协议列表',
      open: true,
      items: [
        {
          title: 'Modbus',
        },
        {
          title: 'OPC UA',
        },
        {
          title: 'OPC DA',
        },
        {
          title: 'Ethernet/IP',
        },
        {
          title: 'IEC104',
        },
        {
          title: 'IPX/SPX',
        },
        {
          title: 'NB-IoT',
        },
        {
          title: 'MQTT',
        },
        {
          title: '定制协议1',
        },
        {
          title: '定制协议2',
        },
        {
          title: '专用协议1',
        },
        {
          title: '专用协议2',
        },
        {
          title: '专用协议3',
        },
        {
          title: '专用协议4',
        },
        {
          title: '专用协议5',
        },
      ],
    },
  ];

  onNodeSelected(treeNode: TreeNode) {
    console.log('selected', treeNode);
  }

  onNodeToggled(treeNode: TreeNode) {
    console.log('Toggled', treeNode);
  }
}
