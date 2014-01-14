# # Side Menu

###
## Table of Contents

Schema:
```javascript
var File, Folder, Headline, index;
Headline = {
  type: "heading",
  depth: Number,
  data: {
    level: Number,
    title: String,
    slug: String,
    isFileHeader: Boolean
  },
  children: [Headline]
};
File = {
  type: "file",
  depth: Number,
  data: {
    title: String,
    pageTitle: String,
    sourcePath: String,
    projectPath: String,
    targetPath: String,
    language: {
      nameMatchers: [String],
      commentsOnly: Boolean,
      name: String
    },
    firstHeader: Headline
  },
  outline: [Headline],
  children: [(File||Folder)]
};
Folder = {
  type: "folder",
  data: {
    path: String,
    title: String
  },
  depth: Number,
  children: [(File||Folder)]
};
index = [(File||Folder)];
```
###
globalFileTree = <%= JSON.stringify(tableOfContents) %>

$ = Zepto or jQuery

###
@method Build File Tree Recursively
@param {Array} tree List of file or folder Objects
@param {jQuery} ul DOM node of list to append this tree to
@param {Object} metaInfo Project information
@return {jQuery} The ul element
###
buildFileTree = (tree, ul, metaInfo) ->
  ul = $(ul)
  unless tree?.length
    console.warn 'no tree', tree
    return ul

  $.each tree, (index, node) ->
    $node = $("""<li class="#{node.type}"/>""")
    if node.type is 'file'
      currentFile = metaInfo.documentPath is node.data.targetPath
      if currentFile
        console.warn 'duplicate currentFile' if metaInfo.currentFileNode
        metaInfo.currentFileNode = node

      $node.append """<a class="label#{if currentFile then ' selected' else ''}" href="#{metaInfo.relativeRoot}#{node.data.targetPath}.html" title="#{node.data.projectPath}"><span class="text">#{node.data.title}</span></a>"""
    else
      $node.append """<a class="label" data-path="#{node.data.path}" href="#"><span class="text">#{node.data.title}</span></a>"""

    if node.children?.length > 0
      $children = $('<ol class="children"/>')
      $node.append buildFileTree node.children, $children, metaInfo

    ul.append $node
    return

  return ul


###
@method Build Headlines Tree Recursively
@param {Object} tree Tree of headlines
@param {jQuery} ul DOM node of list to append this tree to
@param {Object} metaInfo Project information
@return {jQuery} The ul element
###
buildHeadlinesTree = (tree, ul, metaInfo) ->
  ul = $(ul)
  unless tree?.length
    console.warn 'no tree', tree
    return ul

  $.each tree, (index, node) ->
    $node = $("""<li class="#{node.type}"/>""")
    $node.append """<a class="label" href="##{node.data.slug}"><span class="text">#{node.data.title}</span></a>"""

    if node.children?.length > 0
      $children = $('<ol class="children"/>')
      $node.append buildHeadlinesTree node.children, $children, metaInfo

    ul.append $node
    return

  return ul

###
@method Create Navigation Element
@param {Object} metaInfo Project information
@return {jQuery} Navigation element
###
createNav = (metaInfo) ->
  $nav = $ """
    <div id="side-menu">
      <nav id="files">
        <ul class="tools">
          <li class="toggle">Files</li>
          <li class="search">
            <input id="search-files" type="search" autocomplete="off"/>
          </li>
        </ul>
        <ol id="file-tree"/>
      </nav>
      <nav id="headlines">
        <ul class="tools">
          <li class="toggle">Headlines</li>
          <li class="search">
            <input id="search-headlines" type="search" autocomplete="off"/>
          </li>
        </ul>
        <ol id="headline-tree"/>
      </nav>
    </div>
  """

  return $nav

###
@method Search Tree
@param {jQuery} $tree The tree element to be searched
@param {jQuery} $search The search input field
###
searchTree = ($tree, $search) ->
  ###
  @method throttle
  @param {Function} fn Callback
  @param {Number} timeout
  ###
  throttle = do ->
    timer: null
    (fn, timeout=100) ->
      window.clearTimeout timer if timer
      timer = window.setTimeout (->
        timer = null
        fn?()
      ), timeout

  ###
  @method search
  @param {jQuery} tree
  @param {String} value Search query
  ###
  search = ($tree, value) ->
    value = value.trim().toLowerCase()
    $tree.find('.matched').removeClass 'matched'

    if value is ""
      console.log 'stop searching'
      $tree.removeClass 'searching'
      return

    $tree.addClass 'searching'
    matched = 0
    $tree.find('a').each (index, item) ->
      $item = $(item)
      if $item.text().toLowerCase().indexOf(value) > -1
        matched += 1
        $item.addClass 'matched'
      return
    console.log 'searched for', value, 'matched:', matched

  value = null
  $search.on 'keyup search', (event) ->
    newVal = event.target.value
    return if newVal is value
    return if newVal < 2 and newVal isnt ""
    value = newVal
    throttle ->
      search($tree, value)

  # ESC
  $search.on 'keydown', (event) ->
    if event.keyCode == 27 # Esc
      if $search.val().trim() is ''
        $search.blur()
      else
        $search.val ''

###
@method Build Navigation
@param {Array} fileTree List of Files
@param {Object} metaInfo Project information
@return {jQuery} The nav element
###
buildNav = (fileTree, metaInfo) ->
  $nav = createNav(metaInfo)

  # file tree
  buildFileTree fileTree, $nav.find('#file-tree'), metaInfo
  searchTree $nav.find('#file-tree'), $nav.find('#search-files')

  # headlines tree
  if file = metaInfo.currentFileNode
    headlineTree = null
    if file.data.firstHeader
      headlineTree = [file.data.firstHeader]
    else
      headlineTree = file.outline

    buildHeadlinesTree headlineTree, $nav.find('#headline-tree'), metaInfo
    searchTree $nav.find('#headline-tree'), $nav.find('#search-headlines')
  return $nav

$ ->
  metaInfo =
    relativeRoot: $('meta[name="groc-relative-root"]').attr('content')
    githubURL:    $('meta[name="groc-github-url"]').attr('content')
    documentPath: $('meta[name="groc-document-path"]').attr('content')
    projectPath:  $('meta[name="groc-project-path"]').attr('content')

  $nav = buildNav globalFileTree, metaInfo
  $nav.prependTo $('body')

