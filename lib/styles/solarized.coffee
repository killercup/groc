fs   = require 'fs'
path = require 'path'

_            = require 'underscore'
coffeeScript = require 'coffee-script'
fsTools      = require 'fs-tools'
jade         = require 'jade'
uglifyJs     = require 'uglify-js'
humanize     = require '../utils/humanize'

Default = require './default'

module.exports = class Solarized extends Default
  STATIC_ASSETS: ['style.css']

  constructor: (args...) ->
    super(args...)
    @sourceAssets = path.join __dirname, 'solarized'
    @targetAssets = path.resolve @project.outPath, 'assets'

    templateData  = fs.readFileSync path.join(@sourceAssets, 'docPage.jade'), 'utf-8'
    @templateFunc = jade.compile templateData

  writeTOC: ->
    filename = path.join(@targetAssets, 'toc.json')
    fs.writeFileSync filename, JSON.stringify(@tableOfContents), 'utf8'
