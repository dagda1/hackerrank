'use strict';

// delete require.cache['/Users/paul/projects/js-scratch/brackets.js']; require('./brackets')
function isComplete(current) {
  function Stack(s) {
    this.stack = new Array();

    this.pop = () => this.stack.pop();
    this.push = item => this.stack.push(item);
  }

  const isMatch = (opening, potential) => {
    if(opening === '{' && potential === '}') {
      return true;
    }

    if(opening === '(' && potential === ')') {
      return true;
    }

    if(opening === '[' && potential === ']') {
      return true;
    }

    return false;
  };

  const allMatched = current.split("").reduce((acc, symbol) => {
    if(!acc.result) {
      return acc;
    }

    if(['{', '(', '['].indexOf(symbol) !== -1) {
      acc.openings.push(symbol);
      return acc;
    }

    const opening = acc.openings.pop();

    acc.result = isMatch(opening, symbol);

    return acc;
  },
  { result: true, openings: new Stack() }
  );

  return allMatched.result  && !allMatched.openings.stack.length ? 'YES' : 'NO';
}

//var input = '1\n()({}){}{()}[]{}(()([]))()()()(){{}}()({[{}][]}[[{{}({({({})})})}]])';


var input = '1\n{{}(';
//var input = '79\n[()][{}()]{}([{}(())([[{}]])][])(){}{{}{{}}}()[{}{{}([{}][])}]\n[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}\n(])[{{{][)[)])(]){(}))[{(})][{)(}){[(]})[[{}(])}({)(}[[()}{}}]{}{}}()}{({}{})}}]{}}}})}{]{](]][{))])(}]}))(}}{{)}{[}[]\n}(]}){\n(((){}}[}({[{])(]{()[]}}{)}}]]{({)}{(\n{}{({{}})}[][{{}}]{}{}(){{}[]}{}([[][{}])\n(){}[()[][]]{}(())()[[([])][()]{}{}(({}))()[()[{()}]][]]\n()({}){}{()}[]{}(()([]))()()()(){{}}()({[{}][]}[[{{}({({({})})})}]])\n(])}()(}[}(})}])}))])[])(}}[{]{}[(][])}({]{}[[))[[}[}{(]})()){{(]]){]\n{()({}[[{}](){{{}{[[{}]{}((({[]}{}()[])))()))}(()[[[]]])((()[()}))[]]))}]})}\n()(){{}}[()()]{}{}\n{}()([[]])({}){({[][[][[()]]{{}[]}]})})((())[{{}}])\n{}(((){}){[]{{()()}}()})[]{{()}{(){()(){}}}}{()}({()(()({}{}()((()((([])){[][{()}{}]})))))})\n][[{)())))}[)}}}}{){}(){{{{{[)}]]{([{)()][({}){})()})[[][][]]}){}}))){}}]}{}{({((){{}[][]{}[][]{}}[{}])(())}[][])}\n()[[][()[]]](){()[])}]]]))\n()(()){{{}}()()}({}()){}(({()}[{}[{({{}}){({}){({})((({()})))}}}]]))\n}{){({}({)})[(}){[]])([]]}(]]]]{][\n[{]{[{(){[}{}(([(]}])(){[[}(]){(})))}}{{)}}{}][({(}))]}({)\n)})[(]{][())]{[]{{}}[)[)}[]){}](}({]]\n[[[({[]}({[][[[[][[{(()[][])}()[][]][]{}]]]]}))](()){}]][{}([]{}){}{{}}]\n({}())[][{}[{{(({{{([{}])}}}))}}]]\n([((()))()])[][][]{}()(([])){}[]){}(){{}[]}[[{[]}]]\n[(((({}{[]{}()}){}{{}}){({[]{[{}]{(){}(((){()}))}()}}[[]()[()])[{}{}]}))]]{}[]{}({({{}})})\n(]{()}((\n[][(())[({{{()[]}}{[[][[][[[]{{{[()]{{{{}{[]}[][]}}}}}}]]]]}})]]\n}[})})}[)]{}{)\n({(}{})))}(}[)[}{)}}[)[{]{(}{{}[{[({{[}{(]]})}\n]}})[]))]{][])}(])\n[{{}{[{{[}[[}([]\n[([]){}][({})({[(([])[][])][{}{([{{}{(()){{{({}{{}}())}}[]}}()[()[{{{(){[[[]]]})}}}]]}])}]]})]\n]{}{(}))}{]]()(}{{{]([][()){{})[{({{{}{}{(}[][)(}[}][)({[[{]}[(()[}}){}{)([)]}(()))]{)(}}}][\n(]{}{(}}}[)[\n[]{}{[[]]}([{}]{}[]){{(())}}\n[)([{(][(){)[)}{)]]}}([((][[}}(]{}]]}]][(({{{))[[){}{]][))[]{]][)[{{}{()]){)])))){{{[(]}[}}{}]\n{({(){[[[][]{}[[([]{})]{}]][()]]}})}[{}{{}}]\n)}][(})){))[{}[}\n{[]{({]}[}}[{([([)([){{}{(}}[]}}[[{[}[[()(])[}[]\n()()()[]\n((){}])][]][}{]{)]]}][{]}[)(])}[({(\n)[((])(]]]{{{{())]}]}(}{([}(({}]])[[{){[}]{{}})[){(\n}][[{[((}{[]){}}[[[)({[)}]]}(]]{[)[]}{}(){}}][{()]))})]][(((}}\n([]){}{{}{}}()([([{}{[([(())()[[]]])]}])])\n[()[[]{{[]}()([])}[]][][]][]{}{}[][]{}{}[()(){}]\n{{){]({(((({({{([])[}(){(])[){})}))[{})))[\n{}[()[]][]{}{}[[{{[({})[[()]]]}}]]\n{[{}[][]]}[((()))][]{}{()}\n(){[{({})}]}\n([]])]{)]))})[}]))][}{(}}})){]}]{[)}(][})[[\n((({{}(([{}(())]))[()]{[[]]}})))\n}()))}(}]]{{})}]{({([))[[(]}])}}(([{)[)][]){]}{])(\n{}{}{}{[[()]]]}\n)]}[[[{]{{{}}][))]{{\n))){({}])}])}}]{)()(}(]}([\n([[]][])[](([[]]{[()[]{[][{}]}[()]]{}{[]}}{{}()}(()[([][]{})[[{}][]]{}[]])))\n(]{({}[){)))}]{[{}][({[({[]))}[}]}{()(([]{}})}[]{)([]}}]){)(([]]}[[}[\n([[]])({}(([(){{}[{}]}]){[{}]}))[]{}{}{}\n[][][][][][([])][]{({()}[[()()]{([(){[]{}}{(())}{{}()({}())}[({}[])][]])}])}\n}[{{(}})}}(((())()({]{([({[]]}[])}]{][{{}]{)][}(])}}}))}}}\n()[]{}{}[]{([])()[()][{()({})[{}{[[()]{}[]][]}(({{[]{()()()}{}}[]}){{}{}})]}]}\n{{(([{)]{}({]{{({([[[][)}[)})(\n[{}]{[()({[{}]})]}\n[[{}]]\n]{{({[{]}[)]]}{}))}{){({]]}{({{[]){)]{}){){}()})(]]{{])(])[]}][[()()}\n{[([}[[{{(]]][}()())]{){(){)]]){})}]{][][(})[}[)})})[][{[)[})()][]))}[}\n])}[}}}{]]{)[}(}]]])])}{(}{({]}])(})[{}[)]])]}[]{{)){}{()}]}((}}{({])[}])[]}\n(]}[{}{{][}))){{{([)([[])([]{[\n{(()[]){}}(){[]}({{}(()())})([]){}{}(())()[()]{}()\n{{}[{}[{}[]]]}{}({{[]}})[[(){}][]]{}(([]{[]()}{{{()()}{[]}({}[]{()})}{()}[[]][()]}))\n{[][]}[{}{}]{{}{[][{}]}}\n()(){}(){((){}[])([])}\n{}[{[((}[(}[[]{{}]{}}([{}[]}[][][]})])])]\n{(])[]]})()]){[({]}{{{)({}(][{{[}}(]{\n[][]{{})}{}({[()]}())[][[][({}([{}]))]]\n((()))[]{[(()({[()({[]}{})]}))]}{[]}{{({}{})[{}{}]{()([()])[{()}()[[]{}()]{}{}]}[[]{[]}([])]}}'

input.split('\n').slice(1).forEach((curr) => {
  console.log(isComplete(curr))
});


/*
YES
YES
NO
NO
NO
NO
YES
YES
YES
NO 
YES YES YES YES NO NO YES YES YES NO NO NO YES YES YES YES NO YES NO NO NO NO YES NO NO NO YES NO YES NO NO YES NO NO NO YES YES NO YES YES YES NO YES NO YES NO NO YES NO YES YES NO YES NO YES YES NO NO NO NO YES YES YES YES NO YES NO YES YES
*/
// var input = '3\n{[()]}\n{[(])}\n{{[[(())]]}}';
//var input = '5\n}][}}(}][))]\n{()}\n()\n({}([][]))\n{))}(())(';
// NO YES YES YES NO



// for(var i = 0;i < (arr.length / 2); i++) { 
//   var open = arr[i];
//   var close = arr[arr.length - i -1];
//   if(open === '{' && ) 
// }