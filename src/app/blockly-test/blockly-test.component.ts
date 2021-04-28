import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly';
import { NgxBlocklyConfig } from 'ngx-blockly';

@Component({
  selector: 'app-blockly-test',
  templateUrl: './blockly-test.component.html',
  styleUrls: ['./blockly-test.component.scss']
})
export class BlocklyTestComponent implements OnInit {

  public config: NgxBlocklyConfig = {
    toolbox: '<xml id="toolbox" style="display: none">' +
                '<block type="controls_if"></block>' +
                '<block type="controls_repeat_ext"></block>' +
                '<block type="logic_compare"></block>' +
                '<block type="math_number"></block>' +
                '<block type="math_arithmetic"></block>' +
                '<block type="text"></block>' +
                '<block type="text_print"></block>' +
             '</xml>',
    scrollbars: true,
    trashcan: true
};


  constructor() { }

  ngOnInit(): void {
  }


}
