/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5526, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(0); or sym.play("myLabel");
         sym.play(2318);

      });
      //Edge binding end



	  // scroll 觸發 + 若動態要循環replay 值為 "false", 反之為"true"
        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
            //$.scrolledIntoView(sym,targetSectionId);
            $.scrolledIntoView(sym, "#section_4", true);

        });



   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "features_wall_setup");