angular = require('angular')
require('angular-ui-router')
require('angular-messages')
app = angular.module('app',['ui.router','ngMessages'])

require('./useComponents.js')

require('./directive/iprogress/progress.scss')
require('./directive/iprogress/progressDirective.js')
progressTempl = require('./directive/iprogress/progress.html')



