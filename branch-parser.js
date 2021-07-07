'use strict';


let splitSentences = function (text) {
  if(text)
    return text.split(',');
};


module.exports = {
  splitSentences: splitSentences,
};
