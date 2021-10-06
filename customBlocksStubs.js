Blockly.JavaScript['selector_findbyselector'] = function(block) {
  var text_fbs_selector = block.getFieldValue('fbs_selector');
  var code = 'new dompp.FindBySelector("' + text_fbs_selector  + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['condition_comparetovalue'] = function(block) {
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_NONE) || 'erreur';
  var value_operator = Blockly.JavaScript.valueToCode(block, 'operator', Blockly.JavaScript.ORDER_NONE) || 'erreur';
  var text_cpt_value = block.getFieldValue('cpt_value');

  var code = 'new dompp.ComposedFunction(\n' 
    + value_operator + ',\n' 
    + 'new dompp.ComposedFunction(' + value_property + ', "$x"),\n' 
    + 'new dompp.ConstantFunction(' + text_cpt_value + ')\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['property_width'] = function(block) {
  var code = 'new dompp.DimensionWidth()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['operator_greatherthan'] = function(block) {
  var code = 'new dompp.GreaterThan()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['quantifier_forall'] = function(block) {
  var value_fa_selector = Blockly.JavaScript.valueToCode(block, 'fa_selector', Blockly.JavaScript.ORDER_NONE);
  var value_fa_condition = Blockly.JavaScript.valueToCode(block, 'fa_condition', Blockly.JavaScript.ORDER_NONE);

  var code = 'dompp.ForAll(\n'
  + '"$x",\n'
  + value_fa_selector + ',\n'
  + value_fa_condition + '\n'
  + ')';
  return code;
};

Blockly.JavaScript['evaluation'] = function(block) {
  var statements_eval = Blockly.JavaScript.statementToCode(block, 'eval');
  var text_description = block.getFieldValue('description');

  var code = 'var result = mb3dPage.evaluate(function() {\n'
  + 'let body = document.querySelector("body");\n'
  + 'var f =' + statements_eval + ';\n'
  + 'let cond = new dompp.TestCondition("' + text_description  + '", f);\n'
  + 'let result = cond.evaluate(body).getValue();\n'
  + 'return result;\n'
  + '});\n' ;
  return code;
};

Blockly.JavaScript['action_scroll'] = function(block) {
  var text_x_scroll = block.getFieldValue('x_scroll');
  var text_y_scroll = block.getFieldValue('y_scroll');
  
  var code = 'mb3dPage.evaluate(function() {window.scroll(' + text_x_scroll + ', ' + text_y_scroll + '); });\n';
  return code;
};

Blockly.JavaScript['quantifier_forallpairs'] = function(block) {
  var value_fa_selector1 = Blockly.JavaScript.valueToCode(block, 'fa_selector1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fa_selector2 = Blockly.JavaScript.valueToCode(block, 'fa_selector2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fa_condition = Blockly.JavaScript.valueToCode(block, 'fa_condition', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'dompp.ForAll(\n'
  + '"$x",\n'
  + value_fa_selector1 + ',\n'
  + 'dompp.ForAll(\n'
  + '"$y",\n'
  + value_fa_selector2 + ',\n'
  + value_fa_condition + '\n'
  + ')'
  + ')';
  return code;
};

Blockly.JavaScript['condition_sameoffsettop'] = function(block) {
  var code = 'new dompp.ComposedFunction(\n'
  + 'new dompp.IsEqualTo(),\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetTop(), "$x"),\n'
  + 'new dompp.ComposedFunction(new dompp.PageOffsetTop(), "$y")\n'
  + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};