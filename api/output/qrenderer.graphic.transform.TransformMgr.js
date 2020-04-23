Ext.data.JsonP.qrenderer_graphic_transform_TransformMgr({"tagname":"class","name":"qrenderer.graphic.transform.TransformMgr","autodetected":{},"files":[{"filename":"TransformMgr.js","href":"TransformMgr.html#qrenderer-graphic-transform-TransformMgr"}],"members":[{"name":"getTransformedBoundingRect","tagname":"method","owner":"qrenderer.graphic.transform.TransformMgr","id":"method-getTransformedBoundingRect","meta":{"private":true}},{"name":"transformMousePoint","tagname":"method","owner":"qrenderer.graphic.transform.TransformMgr","id":"method-transformMousePoint","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-qrenderer.graphic.transform.TransformMgr","short_doc":"Global transform manager. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TransformMgr.html#qrenderer-graphic-transform-TransformMgr' target='_blank'>TransformMgr.js</a></div></pre><div class='doc-contents'><p>Global transform manager. When user drag the transform control and begin dragging, this manager will handle the events\nand transform parameters for the selected element.</p>\n\n<p>全局变换管理器。当用户选中元素，开始拖动变换控制器时，此管理器负责处理事件、重新计算选中元素上的各项参数。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getTransformedBoundingRect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.transform.TransformMgr'>qrenderer.graphic.transform.TransformMgr</span><br/><a href='source/TransformMgr.html#qrenderer-graphic-transform-TransformMgr-method-getTransformedBoundingRect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.transform.TransformMgr-method-getTransformedBoundingRect' class='name expandable'>getTransformedBoundingRect</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Get transformed bouding rect of selected element, including four corner points, center point of original bounding rec...</div><div class='long'><p>Get transformed bouding rect of selected element, including four corner points, center point of original bounding rect,\nand rotate control point. The coordinates returned by this method are in global space, the coordinate is based on the\ncenter of bounding rect.</p>\n\n<p>获取变换之后的边界矩形坐标，包括：4个角落上的坐标点、中心坐标点、旋转控制器的坐标点。此方法返回的坐标位于全局空间中，计算的\n坐标原点在边界矩形的中心点上。</p>\n</div></div></div><div id='method-transformMousePoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.transform.TransformMgr'>qrenderer.graphic.transform.TransformMgr</span><br/><a href='source/TransformMgr.html#qrenderer-graphic-transform-TransformMgr-method-transformMousePoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.transform.TransformMgr-method-transformMousePoint' class='name expandable'>transformMousePoint</a>( <span class='pre'>x, y</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Transform the cursor origin to the center point of bounding rect, then rotate the same angel as the element does. ...</div><div class='long'><p>Transform the cursor origin to the center point of bounding rect, then rotate the same angel as the element does.</p>\n\n<p>把光标的原点变换到边界矩形的中心点，并与元素保持相同的旋转角。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});