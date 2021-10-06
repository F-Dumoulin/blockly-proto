Blockly.Blocks['evaluation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Evaluation");
    this.appendStatementInput("eval")
        .setCheck("Quantifier");
    this.setPreviousStatement(true, ["Evaluation", "Action"]);
    this.setNextStatement(true, "Evaluation");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['testcase'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test Case");
    this.appendDummyInput()
        .appendField("Description")
        .appendField(new Blockly.FieldTextInput("Testing ..."), "tc_description");
    this.appendStatementInput("actions")
        .setCheck(["Evaluation", "Action"]);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['evaluation'] = function(block) {
  var statements_eval = Blockly.JavaScript.statementToCode(block, 'eval');

  var code = 'var result = await mb3dPage.evaluate(function() {\n'
  + 'let body = document.querySelector("body");\n'
  + 'var f;\n'
  + statements_eval
  + '});\n';
  return code;
};

Blockly.JavaScript['testcase'] = function(block) {
  var text_tc_description = block.getFieldValue('tc_description');
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');

  var code = 'it("' + text_tc_description + '", async() => {\n'
  + statements_actions
  + '});\n';
  return code;
};