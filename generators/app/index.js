'use strict' // declaring strict mode in js
var Generator = require('yeoman-generator') //yeoman environment

//siempre se extiende de la clase base Generator
//y se exporta para que esté disponible en nuestro ecosistema
module.exports = class extends Generator {
  //a los args y opts solo se tiene acceso si sobreescribimos el constructor
  constructor (args, opts) {
    super(args, opts);
    //la forma recomendada para hacer log es usando el this.log, puesto que así no te limitas al terminal y éstas
    //usando el contexto
    //this.log(this.args['appname']);
    //this.argument('appname', { type: String, required: false });
    //this.option('debug');
  }


  //metodo que se ejecutará siempre dentro de la cola de default
  method1() {
    //this.env.error("something bad is happened");
    //this.log(this.args['appname']);
    this.log('method 1 just ran');
  }

    //metodo privado que se solo se ejecutará si se le llama explicitamente
  _privateMethod1() {
      this.log('method private just ran');
  }

  //cola 1
  async initializing () {
    this.log('+ main initializing');
    //se recomienda usar siempre dependencies ( las que instalan en local) que peerDependencies
    //por eso no se necesita realizar ningún path resolver del generador
    
    
       
    this.composeWith('travis')
  }


  //cola 2
  async prompting () {
    this.log('++ main prompting');
  }

  //cola 3
  async configuring () {
    this.log('+++ main configuring');
  }

  //cola 4
  async default () {
    this.log('++++ main default');
  }

  //cola 5
  async writing () {
    this.log('+++++ main writing');
  }

  //cola 6
  async conflicts () {
    this.log('++++++ main conflicts');
  }

  //cola 7
  async install () {
    this.log('+++++++ main install');
    //this.composeWith('demo:subdemo')
    this.composeWith('demo:subdemo');
  }

  //cola 8
  async end () {
    this.log('++++++++ main end');
    //this._privateMethod1();
  }
}
