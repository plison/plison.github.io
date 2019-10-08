var Handlebars = require("handlebars/dist/handlebars.runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['xmi.states.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "    <subvertex xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias5(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" xmi:type=\""
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.kind : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.statemachine : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </subvertex>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " kind=\""
    + container.escapeExpression(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"kind","hash":{},"data":data}) : helper)))
    + "\"";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <"
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data}) : helper)))
    + " xmi:id=\""
    + alias5(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "_"
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data}) : helper)))
    + "_"
    + alias5(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"body","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias5(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"body","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" isReentrant=\"true\" xmi:type=\"uml:OpaqueBehavior\"/>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["xmi.states.template.hbs"],depth0,{"name":"xmi.states.template.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "    <transition xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_"
    + alias5(((helper = (helper = helpers.condId || (depth0 != null ? depth0.condId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"condId","hash":{},"data":data}) : helper)))
    + alias5(((helper = (helper = helpers.eventId || (depth0 != null ? depth0.eventId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"eventId","hash":{},"data":data}) : helper)))
    + alias5(((helper = (helper = helpers.actionId || (depth0 != null ? depth0.actionId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"actionId","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" xmi:type=\"uml:Transition\" source=\""
    + alias5(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"from","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + alias5(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"to","hash":{},"data":data}) : helper)))
    + "\" kind=\"external\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.cond : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.event : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.action : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </transition>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <guard xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_guard_"
    + alias5(((helper = (helper = helpers.condId || (depth0 != null ? depth0.condId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"condId","hash":{},"data":data}) : helper)))
    + "\" xmi:type=\"uml:Constraint\" specification=\""
    + alias5(((helper = (helper = helpers.cond || (depth0 != null ? depth0.cond : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"cond","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <ownedMember xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_event_"
    + alias5(((helper = (helper = helpers.eventId || (depth0 != null ? depth0.eventId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"eventId","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias5(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"event","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" xmi:type=\"uml:AnyReceiveEvent\"/>\n        <trigger xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_event\" xmi:type=\"uml:Trigger\" name=\""
    + alias5(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"event","hash":{},"data":data}) : helper)))
    + "\" event=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_event_"
    + alias5(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"event","hash":{},"data":data}) : helper)))
    + "\"/>\n        <trigger xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_event_"
    + alias5(((helper = (helper = helpers.eventId || (depth0 != null ? depth0.eventId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"eventId","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias5(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"event","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" xmi:type=\"uml:AnyReceiveEvent\"/>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <effect xmi:id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "_effect_"
    + alias5(((helper = (helper = helpers.actionId || (depth0 != null ? depth0.actionId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"actionId","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias5(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"action","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" isReentrant=\"true\" xmi:type=\"uml:Activity\"/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<region xmi:id=\"region_"
    + container.escapeExpression(((helper = (helper = helpers.regionCount || (depth0 != null ? depth0.regionCount : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"regionCount","hash":{},"data":data}) : helper)))
    + "\" visibility=\"public\" xmi:type=\"uml:Region\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.states : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.transitions : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</region>";
},"usePartial":true,"useData":true,"useDepths":true});
