const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('appname', { type: String, required: false })
  }

  method1 () {
    this.log('SUBDEMO: method1')
  }
  //cola 1
  async initializing () {
    this.log('- SUBDEMO initializing');
  }

  //cola 2
  async prompting () {
    this.log('-- SUBDEMO prompting');
  }

  //cola 3
  async configuring () {
    this.log('--- SUBDEMO configuring');
    //this.env.error("Error en el proceso SUBDEMO:configuring");
  }

  //cola 4
  async default () {
    this.log('---- SUBDEMO default');
  }

  //cola 5
  async writing () {
    this.log('----- SUBDEMO writing');
  }

  //cola 6
  async conflicts () {
    this.log('------ SUBDEMO conflicts');
  }

  //cola 7
  async install () {
    this.log('------- SUBDEMO install');
  }

  //cola 8
  async end () {
    this.log('-------- SUBDEMO end');
  }
}
