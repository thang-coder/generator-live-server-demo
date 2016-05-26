'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('live-server demo') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'shouldLaunchLiveServer',
      message: 'Would you like to launch live-server at the end?',
      default: true
    }];
    
    var skipLaunch = this.log.bind(this, 'Skipping live-server');
    var launch = this.spawnCommand.bind(this, 'live-server');

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.on('end',props.shouldLaunchLiveServer ? launch : skipLaunch);
      
    }.bind(this));
  },

  writing: function () {
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
    this.bulkDirectory('writing-tutorial', 'tutorial');
  },

  install: function () {
    this.installDependencies();
  }
});
