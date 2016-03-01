var pf = function() {
  return {
    titleCase: function(str) {
      return str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
    },
    emailFirstPart: function(str) {
      return str.split("@")[0];
    },
    spaceFromPeriods: function(str) {
      return str.split(".").join(' ');
    }, 
    splitNumbers: function(str) {
      return str.split(/([0-9])/g).join(' ');
    }
  };
}();
String.prototype.humanizeJabbername = function() {
  var chain = [
    pf.emailFirstPart,
    pf.spaceFromPeriods,
    pf.titleCase,
    pf.splitNumbers
  ];
  var pipeline = function(acc, fn) {
    return fn.call(null, acc);
  };
  return chain.reduce(pipeline, this).trim();
};

String.prototype.removeSnapEngage = function() {
  return this.replace(/(more details)\b.*/gi, '');
};

// console.log("gary.sdnsoidf@sdsfjsdf.csisdf.sdfwe".humanizeJabbername());
// console.log("visitor1@sdsfjsdf.csisdf.sdfwe".humanizeJabbername());