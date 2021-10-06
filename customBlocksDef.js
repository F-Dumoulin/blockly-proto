Blockly.Blocks['selector_findbyselector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find By Selector")
        .appendField(new Blockly.FieldTextInput("#####"), "fbs_selector");
    this.setInputsInline(false);
    this.setOutput(true, "Selector");
    this.setColour(230);
 this.setTooltip("Test");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition_comparetovalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compare To Value");
    this.appendValueInput("property")
        .setCheck("Property")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Property");
    this.appendValueInput("operator")
        .setCheck("Operator")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Operator");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput("###"), "cpt_value");
    this.setInputsInline(false);
    this.setOutput(true, "Condition");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['property_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Width");
    this.setOutput(true, "Property");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['operator_greatherthan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(">");
    this.setOutput(true, "Operator");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['quantifier_forall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For All");
    this.appendValueInput("fa_selector")
        .setCheck("Selector")
        .appendField("Selector");
    this.appendValueInput("fa_condition")
        .setCheck("Condition")
        .appendField("Condition");
    this.setPreviousStatement(true, "Quantifier");
    this.setNextStatement(true, "Quantifier");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['evaluation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Evaluation");
    this.appendStatementInput("eval")
        .setCheck(["Quantifier", "Action"]);
    this.appendDummyInput()
        .appendField("Description")
        .appendField(new Blockly.FieldTextInput(""), "description");
    this.setPreviousStatement(true, ["Evaluation", "Action"]);
    this.setNextStatement(true, "Evaluation");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['action_scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scroll");
    this.appendDummyInput()
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("0"), "x_scroll")
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("0"), "y_scroll");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Action", "Evaluation"]);
    this.setNextStatement(true, "Action");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['quantifier_forallpairs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For All Pairs");
    this.appendValueInput("fa_selector1")
        .setCheck("Selector")
        .appendField("Selector 1");
    this.appendValueInput("fa_selector2")
        .setCheck("Selector")
        .appendField("Selector 2");
    this.appendValueInput("fa_condition")
        .setCheck("Condition")
        .appendField("Condition");
    this.setPreviousStatement(true, "Quantifier");
    this.setNextStatement(true, "Quantifier");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['condition_sameoffsettop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Same offset top");
    this.setInputsInline(false);
    this.setOutput(true, "Condition");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};