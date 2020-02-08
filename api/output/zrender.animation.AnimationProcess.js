Ext.data.JsonP.zrender_animation_AnimationProcess({"tagname":"class","name":"zrender.animation.AnimationProcess","autodetected":{},"files":[{"filename":"AnimationProcess.js","href":"AnimationProcess.html#zrender-animation-AnimationProcess"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋 damoqiongqiu@126.com","email":null}],"members":[{"name":"constructor","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-constructor","meta":{}},{"name":"_doneCallback","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-_doneCallback","meta":{"private":true}},{"name":"delay","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-delay","meta":{"chainable":true}},{"name":"done","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-done","meta":{"chainable":true}},{"name":"during","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-during","meta":{"chainable":true}},{"name":"isFinished","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-isFinished","meta":{}},{"name":"isPaused","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-isPaused","meta":{}},{"name":"nextFrame","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-nextFrame","meta":{}},{"name":"pause","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-pause","meta":{}},{"name":"resume","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-resume","meta":{}},{"name":"start","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-start","meta":{"chainable":true}},{"name":"stop","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-stop","meta":{}},{"name":"when","tagname":"method","owner":"zrender.animation.AnimationProcess","id":"method-when","meta":{"chainable":true}}],"alternateClassNames":[],"aliases":{},"id":"class-zrender.animation.AnimationProcess","short_doc":"AnimationProcess 表示一次完整的动画过程，每一个图元（Element）中都有一个列表，用来存储本实例上的动画过程。 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess' target='_blank'>AnimationProcess.js</a></div></pre><div class='doc-contents'><p>AnimationProcess 表示一次完整的动画过程，每一个图元（Element）中都有一个列表，用来存储本实例上的动画过程。\nGlobalAnimationMgr 负责维护和调度所有 AnimationProcess 实例。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/zrender.animation.AnimationProcess-method-constructor' class='name expandable'>zrender.animation.AnimationProcess</a>( <span class='pre'>target, loop, getter, setter</span> ) : <a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a><span class=\"signature\"></span></div><div class='description'><div class='short'>AnimationProcess ...</div><div class='long'><p>AnimationProcess</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'><p>需要进行动画的图元</p>\n</div></li><li><span class='pre'>loop</span> : Boolean<div class='sub-desc'><p>动画是否循环播放</p>\n</div></li><li><span class='pre'>getter</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>setter</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_doneCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-_doneCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-_doneCallback' class='name expandable'>_doneCallback</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>动画过程整体结束的时候回调此函数 ...</div><div class='long'><p>动画过程整体结束的时候回调此函数</p>\n</div></div></div><div id='method-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-delay' class='name expandable'>delay</a>( <span class='pre'>time</span> ) : <a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>设置动画延迟开始的时间 ...</div><div class='long'><p>设置动画延迟开始的时间</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Number<div class='sub-desc'><p>单位ms</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-done' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-done' class='name expandable'>done</a>( <span class='pre'>cb</span> ) : <a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>添加动画结束的回调 ...</div><div class='long'><p>添加动画结束的回调</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-during' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-during' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-during' class='name expandable'>during</a>( <span class='pre'>callback</span> ) : <a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>添加动画每一帧的回调函数 ...</div><div class='long'><p>添加动画每一帧的回调函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isFinished' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-isFinished' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-isFinished' class='name expandable'>isFinished</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>判断整个动画过程是否已经完成，所有 Track 上的动画都完成则整个动画过程完成 ...</div><div class='long'><p>判断整个动画过程是否已经完成，所有 Track 上的动画都完成则整个动画过程完成</p>\n</div></div></div><div id='method-isPaused' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-isPaused' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-isPaused' class='name expandable'>isPaused</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>是否暂停 ...</div><div class='long'><p>是否暂停</p>\n</div></div></div><div id='method-nextFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-nextFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-nextFrame' class='name expandable'>nextFrame</a>( <span class='pre'>time, delta</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>进入下一帧 ...</div><div class='long'><p>进入下一帧</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Number<div class='sub-desc'><p>当前时间</p>\n</div></li><li><span class='pre'>delta</span> : Number<div class='sub-desc'><p>时间偏移量</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>暂停动画 ...</div><div class='long'><p>暂停动画</p>\n</div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>恢复动画 ...</div><div class='long'><p>恢复动画</p>\n</div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-start' class='name expandable'>start</a>( <span class='pre'>[easing], forceAnimate</span> ) : <a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>开始执行动画 ...</div><div class='long'><p>开始执行动画</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>easing</span> : String|Function (optional)<div class='sub-desc'><p>缓动函数名称，详见缓动引擎</p>\n</div></li><li><span class='pre'>forceAnimate</span> : Boolean<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-stop' class='name expandable'>stop</a>( <span class='pre'>forwardToLast</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>停止动画 ...</div><div class='long'><p>停止动画</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>forwardToLast</span> : Boolean<div class='sub-desc'><p>If move to last frame before stop</p>\n</div></li></ul></div></div></div><div id='method-when' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.animation.AnimationProcess'>zrender.animation.AnimationProcess</span><br/><a href='source/AnimationProcess.html#zrender-animation-AnimationProcess-method-when' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.animation.AnimationProcess-method-when' class='name expandable'>when</a>( <span class='pre'>time, props</span> ) : <a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>为每一种需要进行动画的属性创建一条轨道 ...</div><div class='long'><p>为每一种需要进行动画的属性创建一条轨道</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Number<div class='sub-desc'><p>关键帧时间，单位ms</p>\n</div></li><li><span class='pre'>props</span> : Object<div class='sub-desc'><p>关键帧的属性值，key-value表示</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.animation.AnimationProcess\" rel=\"zrender.animation.AnimationProcess\" class=\"docClass\">zrender.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});