window.__EC_DOC_api_echartsInstance = {
  "group": {
    "desc": "<p>Group name to be used in chart <a href=\"#echarts.connect\">connection</a>.</p>\n"
  },
  "setOption": {
    "desc": "<pre><code class=\"lang-js\">(option: Object, notMerge?: boolean, lazyUpdate?: boolean)\nor\n(option: Object, opts?: Object)\n</code></pre>\n<p>Configuration item, data, universal interface, all parameters and data can all be modified through <code class=\"codespan\">setOption</code>. ECharts will merge new parameters and data, and then refresh chart. If <a href=\"option.html#animation\" target=\"_blank\">animation</a> is enabled, ECharts will find the difference between two groups of data and present data changes through proper animation.</p>\n<p><strong>For example: </strong></p>\n<iframe data-src=\"https://echarts.apache.org/next/examples/en/view.html?c=dynamic-data&reset=1&edit=1\" width=\"500\" height=\"400\" ></iframe>\n\n\n<p><strong>Attention: </strong> Setting configuration item using <code class=\"codespan\">addData</code> and <code class=\"codespan\">setSeries</code> of ECharts 2.x are no longer supported. <code class=\"codespan\">setOption</code> is used for all these cases in ECharts 3. Please refer to the above example.</p>\n<p><strong>Parameters</strong></p>\n<p>Invoke approaches:</p>\n<pre><code class=\"lang-js\">chart.setOption(option, notMerge, lazyUpdate);\n</code></pre>\n<p>or</p>\n<pre><code class=\"lang-js\">chart.setOption(option, {\n    notMerge: ...,\n    lazyUpdate: ...,\n    silent: ...\n});\n</code></pre>\n<ul>\n<li><p><code class=\"codespan\">option</code></p>\n<p>  Configuration item and data. Please refer to <a href=\"option.html\" target=\"_blank\">configuration item manual</a> for more information.</p>\n</li>\n<li><p><code class=\"codespan\">notMerge</code></p>\n<p>  Optional; states whether not to merge with previous <code class=\"codespan\">option</code>; <code class=\"codespan\">false</code> by default, stating merging.</p>\n</li>\n<li><p><code class=\"codespan\">lazyUpdate</code></p>\n<p>  Optional; states whether not to update chart immediately; <code class=\"codespan\">false</code> by default, stating update immediately.</p>\n</li>\n<li><p><code class=\"codespan\">silent</code></p>\n<p>  Optional; states whether not to prevent triggering events when calling <code class=\"codespan\">setOption</code>; <code class=\"codespan\">false</code> by default, stating trigger events.</p>\n</li>\n</ul>\n"
  },
  "getWidth": {
    "desc": "<pre><code class=\"lang-js\">() =&gt; number\n</code></pre>\n<p>Gets width of ECharts instance container.</p>\n"
  },
  "getHeight": {
    "desc": "<pre><code class=\"lang-js\">() =&gt; number\n</code></pre>\n<p>Gets height of ECharts instance container.</p>\n"
  },
  "getDom": {
    "desc": "<pre><code class=\"lang-js\">() =&gt; HTMLCanvasElement|HTMLDivElement\n</code></pre>\n<p>Gets DOM element of ECharts instance container.</p>\n"
  },
  "getOption": {
    "desc": "<pre><code class=\"lang-js\">() =&gt; Object\n</code></pre>\n<p>Gets <code class=\"codespan\">option</code> object maintained in current instance, which contains configuration item and data merged from previous <code class=\"codespan\">setOption</code> operations by users, along with user interaction states. For example, switching of legend, zooming area of data zoom, and so on. Therefore, a new instance that is exactly the same can be recovered from this option.</p>\n<p><strong>Attention: </strong>Attribute values in each component of the returned option are all in the form of an array, no matter it&#39;s single object or array of object when passed by <code class=\"codespan\">setOption</code>.\nFor example:</p>\n<pre><code class=\"lang-js\">{\n    title: [{...}],\n    legend: [{...}],\n    grid: [{...}]\n}\n</code></pre>\n<p>Besides, the following style is <strong>not recommended</strong>:</p>\n<pre><code class=\"lang-js\">var option = myChart.getOption();\noption.visualMap[0].inRange.color = ...;\nmyChart.setOption(option);\n</code></pre>\n<p>This is because <code class=\"codespan\">getOption</code> contains merged values which could be default values, and may overlaps future values. So, we <strong>recommend</strong> the following style when update part of configuration.</p>\n<pre><code class=\"lang-js\">myChart.setOption({\n    visualMap: {\n        inRange: {\n            color: ...\n        }\n    }\n})\n</code></pre>\n"
  },
  "resize": {
    "desc": "<pre><code class=\"lang-js\">(opts?: {\n    width?: number|string,\n    height?: number|string,\n    silent?: boolean\n}) =&gt; ECharts\n</code></pre>\n<p>Resizes chart, which should be called manually when container size changes.</p>\n<p><strong>Parameters</strong></p>\n<ul>\n<li><p><code class=\"codespan\">opts</code></p>\n<p>  Optional; which may contain:</p>\n<ul>\n<li><p><code class=\"codespan\">width</code></p>\n<p>  Specify width explicitly, in pixel. If setting to <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code>/<code class=\"codespan\">&#39;auto&#39;</code>, width of <code class=\"codespan\">dom</code> (instance container) will be used.</p>\n</li>\n<li><p><code class=\"codespan\">height</code></p>\n<p>  Specify height explicitly, in pixel. If setting to <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code>/<code class=\"codespan\">&#39;auto&#39;</code>, height of <code class=\"codespan\">dom</code> (instance container) will be used.</p>\n</li>\n<li><p><code class=\"codespan\">silent</code></p>\n<p>  Specify whether or not to prevent triggering events.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p><strong>Tip:</strong> Sometimes charts may be placed in multiple tabs. Those in hidden labels may fail to initialize due to the ignorance of container width and height. So <code class=\"codespan\">resize</code> should be called manually to get the correct width and height when switching to the corresponding tabs, or specify width/heigth in <code class=\"codespan\">opts</code> explicitly.</p>\n"
  },
  "dispatchAction": {
    "desc": "<pre><code class=\"lang-js\">(payload: Object)\n</code></pre>\n<p>Triggers chart action, like chart switch <code class=\"codespan\">legendToggleSelect</code>,zoom data area <code class=\"codespan\">dataZoom</code>, show tooltip <code class=\"codespan\">showTip</code> and so on. See <a href=\"#action\">action</a> and <a href=\"#events\">events</a> for more information.</p>\n<p><code class=\"codespan\">payload</code> parameter can trigger multiple actions through <code class=\"codespan\">batch</code> attribute.</p>\n<p><strong>Attention: </strong>In ECharts 2.x, triggering chart actions has a long operation path like <code class=\"codespan\">myChart.component.tooltip.showTip</code>, which may also involve with internal component organization. So, <code class=\"codespan\">dispatchAction</code> is used in this case in ECharts 3.</p>\n<p><strong>For example</strong></p>\n<pre><code class=\"lang-js\">myChart.dispatchAction({\n    type: &#39;dataZoom&#39;,\n    start: 20,\n    end: 30\n});\n// Multiply actions can be dispatched through batch parameter\nmyChart.dispatchAction({\n    type: &#39;dataZoom&#39;,\n    batch: [{\n        // first dataZoom component\n        start: 20,\n        end: 30\n    }, {\n        // second dataZoom component\n        dataZoomIndex: 1,\n        start: 10,\n        end: 20\n    }]\n})\n</code></pre>\n"
  },
  "on": {
    "desc": "<pre><code class=\"lang-js\">(\n    eventName: string,\n    handler: Function,\n    context?: Object\n)\n(\n    eventName: string,\n    query: string|Object,\n    handler: Function,\n    context?: Object\n)\n</code></pre>\n<p>Binds event-handling function.</p>\n<p>There are two kinds of events in ECharts, one of which is mouse events, which will be triggered when the mouse clicks certain element in the chart, the other kind will be triggered after <a href=\"#echartsInstance.dispatchAction\">dispatchAction</a> is called. Every action has a corresponding event. Please refer to <a href=\"#action\">action</a> and <a href=\"#events\">events</a> for more information.</p>\n<p>If event is triggered externally by <a href=\"#echartsInstance.dispatchAction\">dispatchAction</a>, and there is batch attribute in action to trigger batch action, then the corresponding response event parameters be in batch.</p>\n<p><strong>Parameters</strong></p>\n<ul>\n<li><p><code class=\"codespan\">eventName</code></p>\n<p>  Event names are all in lower-cases, for example, <code class=\"codespan\">&#39;click&#39;</code>, <code class=\"codespan\">&#39;mousemove&#39;</code>, <code class=\"codespan\">&#39;legendselected&#39;</code></p>\n<p>  <strong>Attention: </strong> ECharts 2.x uses attributes like <code class=\"codespan\">CLICK</code> in <code class=\"codespan\">config</code> object as event name. In ECharts 3, lower-case strings are used as event name to align with DOM events.</p>\n</li>\n<li><p><code class=\"codespan\">query</code></p>\n<p>  Condition for filtering, optional. <code class=\"codespan\">query</code> enables only call handlers on graphic elements of specified components. Can be <code class=\"codespan\">string</code> or <code class=\"codespan\">Object</code>.</p>\n<p>  If <code class=\"codespan\">string</code>, the formatter can be &#39;mainType&#39; or &#39;mainType.subType&#39;. For example:</p>\n<pre><code class=\"lang-js\">  chart.on(&#39;click&#39;, &#39;series&#39;, function () {...});\n  chart.on(&#39;click&#39;, &#39;series.line&#39;, function () {...});\n  chart.on(&#39;click&#39;, &#39;dataZoom&#39;, function () {...});\n  chart.on(&#39;click&#39;, &#39;xAxis.category&#39;, function () {...});\n</code></pre>\n<p>  If <code class=\"codespan\">Object</code>, one or more properties below can be included, and any of them is optional.</p>\n<pre><code class=\"lang-js\">  {\n      &lt;mainType&gt;Index: number // component index\n      &lt;mainType&gt;Name: string // component name\n      &lt;mainType&gt;Id: string // component id\n      dataIndex: number // data item index\n      name: string // data item name\n      dataType: string // data item type, e.g.,\n                       // &#39;node&#39; and &#39;edge&#39; in graph.\n      element: string // element name in custom series\n  }\n</code></pre>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  chart.setOption({\n      // ...\n      series: [{\n          name: &#39;uuu&#39;\n          // ...\n      }]\n  });\n  chart.on(&#39;mouseover&#39;, {seriesName: &#39;uuu&#39;}, function () {\n      // When the graphic elements in the series with name &#39;uuu&#39; mouse overed, this method is called.\n  });\n</code></pre>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  chart.setOption({\n      // ...\n      series: [{\n          // ...\n      }, {\n          // ...\n          data: [\n              {name: &#39;xx&#39;, value: 121},\n              {name: &#39;yy&#39;, value: 33}\n          ]\n      }]\n  });\n  chart.on(&#39;mouseover&#39;, {seriesIndex: 1, name: &#39;xx&#39;}, function () {\n      // When the graphic elements of the data item with name &#39;xx&#39; in the series with index 1 mouse overed, this method is called.\n  });\n</code></pre>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  chart.setOption({\n      // ...\n      series: [{\n          type: &#39;graph&#39;,\n          nodes: [{name: &#39;a&#39;, value: 10}, {name: &#39;b&#39;, value: 20}],\n          edges: [{source: 0, target: 1}]\n      }]\n  });\n  chart.on(&#39;click&#39;, {dataType: &#39;node&#39;}, function () {\n      // When the nodes of the graph clicked, this method is called.\n  });\n  chart.on(&#39;click&#39;, {dataType: &#39;edge&#39;}, function () {\n      // When the edges of the graph clicked, this method is called.\n  });\n</code></pre>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  chart.setOption({\n      // ...\n      series: {\n          // ...\n          type: &#39;custom&#39;,\n          renderItem: function (params, api) {\n              return {\n                  type: &#39;group&#39;,\n                  children: [{\n                      type: &#39;circle&#39;,\n                      name: &#39;my_el&#39;,\n                      // ...\n                  }, {\n                      // ...\n                  }]\n              }\n          },\n          data: [[12, 33]]\n      }\n  })\n  chart.on(&#39;click&#39;, {targetName: &#39;my_el&#39;}, function () {\n      // When the element with name &#39;my_el&#39; clicked, this method is called.\n  });\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">handler</code></p>\n<p>  Event-handling function, whose format is as following:</p>\n<pre><code class=\"lang-js\">(event: Object)\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">context</code></p>\n<p>  Optional; context of callback function, what <code class=\"codespan\">this</code> refers to.</p>\n</li>\n</ul>\n"
  },
  "off": {
    "desc": "<pre><code class=\"lang-js\">(eventName: string, handler?: Function)\n</code></pre>\n<p>Unbind event-handler function.</p>\n<p><strong>parameter: </strong></p>\n<ul>\n<li><p><code class=\"codespan\">eventName</code></p>\n<p>  Event name.</p>\n</li>\n<li><p><code class=\"codespan\">handler</code></p>\n<p>  Optional. The function to be unbound could be passed. Otherwise, all event functions of this type will be unbound.</p>\n</li>\n</ul>\n"
  },
  "convertToPixel": {
    "desc": "<pre><code class=\"lang-js\">(\n    // finder is used to indicate in which coordinate system conversion is performed.\n    // Generally, index or id or name can be used to specify coordinate system.\n    finder: {\n        seriesIndex?: number,\n        seriesId?: string,\n        seriesName?: string,\n        geoIndex?: number,\n        geoId?: string,\n        geoName?: string,\n        xAxisIndex?: number,\n        xAxisId?: string,\n        xAxisName?: string,\n        yAxisIndex?: number,\n        yAxisId?: string,\n        yAxisName?: string,\n        gridIndex?: number,\n        gridId?: string,\n        gridName?: string\n    },\n    // The value to be converted.\n    value: Array|string\n    // Conversion result, in pixel coordinate system, where the origin ([0, 0])\n    // is on the left-top of the main dom of echarts instance.\n) =&gt; Array|string\n</code></pre>\n<p>Convert a point from logical coordinate (e.g., in geo, cartesian, graph, ...) to pixel coordinate.</p>\n<p>For example:</p>\n<p>In <a href=\"option.html#geo\" target=\"_blank\">geo</a> coordinate system, convert a point from latlong to pixel coordinate:</p>\n<pre><code class=\"lang-js\">// [128.3324, 89.5344] represents [longitude, latitude].\n// Perform conversion in the first geo coordinate system:\nchart.convertToPixel(&#39;geo&#39;, [128.3324, 89.5344]); // The parameter &#39;geo&#39; means {geoIndex: 0}.\n// Perform conversion in the second geo coordinate system:\nchart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);\n// Perform conversion in the geo coordinate system with id &#39;bb&#39;:\nchart.convertToPixel({geoId: &#39;bb&#39;}, [128.3324, 89.5344]);\n</code></pre>\n<p>In cartesian (see <a href=\"option.html#grid\" target=\"_blank\">grid</a>), convert a point to pixel coordinate:</p>\n<pre><code class=\"lang-js\">// [300, 900] means [value on xAxis, value on yAxis].\n// Notice, there might be more than one xAxis or yAxis in a grid, and each a pair of\n// xAxis-yAxis constitudes a cartesian.\n// Perform conversion in the cartesian consist of the third xAxis and the yAxis with id &#39;y1&#39;.\nchart.convertToPixel({xAxisIndex: 2, yAxisId: &#39;y1&#39;}, [300, 900]);\n// 使用 id 为 &#39;g1&#39; 的 grid 的第一个 cartesian 进行转换：\n// Perform conversion in the first cartesian of the grid with id &#39;g1&#39;.\nchart.convertToPixel({gridId: &#39;g1&#39;}, [300, 900]);\n</code></pre>\n<p>Convert a axis value to pixel value:</p>\n<pre><code class=\"lang-js\">// In the xAxis with id &#39;x0&#39;, convert value 3000 to the horizontal pixel coordinate:\nchart.convertToPixel({xAxisId: &#39;x0&#39;}, 3000); // A number will be returned.\n// In the second yAxis, convert value 600 to the vertical pixel coordinate:\nchart.convertToPixel({yAxisIndex: 1}, 600); // A number will be returned.\n</code></pre>\n<p>In <a href=\"option.html#series-graph\" target=\"_blank\">graph</a>, convert a point to pixel coordinate:</p>\n<pre><code class=\"lang-js\">// Since every graph series maintains a coordinate system for itself, we\n// specify the graph series in finder.\nchart.convertToPixel({seriesIndex: 0}, [2000, 3500]);\nchart.convertToPixel({seriesId: &#39;k2&#39;}, [100, 500]);\n</code></pre>\n<p>In a cooridinate system (cartesian, geo, graph, ...) that contains the given series, convert a point to pixel coordinate:</p>\n<pre><code class=\"lang-js\">// Perform convert in the coordinate system that contains the first series.\nchart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);\n// Perform convert in the coordinate system that contains the series with id &#39;k2&#39;.\nchart.convertToPixel({seriesId: &#39;k2&#39;}, [128.3324, 89.5344]);\n</code></pre>\n"
  },
  "convertFromPixel": {
    "desc": "<pre><code class=\"lang-js\">(\n    // finder is used to indicate in which coordinate system conversion is performed.\n    // Generally, index or id or name can be used to specify coordinate system.\n    finder: {\n        seriesIndex?: number,\n        seriesId?: string,\n        seriesName?: string,\n        geoIndex?: number,\n        geoId?: string,\n        geoName?: string,\n        xAxisIndex?: number,\n        xAxisId?: string,\n        xAxisName?: string,\n        yAxisIndex?: number,\n        yAxisId?: string,\n        yAxisName?: string,\n        gridIndex?: number,\n        gridId?: string,\n        gridName?: string\n    },\n    // The value to be converted, in pixel coordinate system, where the origin ([0, 0])\n    // is on the left-top of the main dom of echarts instance.\n    value: Array|string\n    // Conversion result\n) =&gt; Array|string\n</code></pre>\n<p>Convert a point from pixel coordinate to logical coordinate (e.g., in geo, cartesian, graph, ...). This method is the inverse operation of <a href=\"#echartsInstance.convertToPixel\">convertToPixel</a>, where the examples can be referred.</p>\n"
  },
  "containPixel": {
    "desc": "<pre><code class=\"lang-js\">(\n    // finder is used to specify coordinate systems or series on which the judgement performed.\n    // Generally, index or id or name can be used to specify coordinate system.\n    finder: {\n        seriesIndex?: number,\n        seriesId?: string,\n        seriesName?: string,\n        geoIndex?: number,\n        geoId?: string,\n        geoName?: string,\n        xAxisIndex?: number,\n        xAxisId?: string,\n        xAxisName?: string,\n        yAxisIndex?: number,\n        yAxisId?: string,\n        yAxisName?: string,\n        gridIndex?: number,\n        gridId?: string,\n        gridName?: string\n    },\n    // The value to be judged, in pixel coordinate system, where the origin ([0, 0])\n    // is on the left-top of the main dom of echarts instance.\n    value: Array\n) =&gt; boolean\n</code></pre>\n<p>Determine whether the given point is in the given coordinate systems or series.</p>\n<p>These coordinate systems or series are supported currently: <a href=\"option.html#grid\" target=\"_blank\">grid</a>, <a href=\"option.html#polar\" target=\"_blank\">polar</a>, <a href=\"option.html#geo\" target=\"_blank\">geo</a>, <a href=\"option.html#series-map\" target=\"_blank\">series-map</a>, <a href=\"option.html#series-graph\" target=\"_blank\">series-graph</a>, <a href=\"option.html#series-pie\" target=\"_blank\">series-pie</a>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">// Determine whether point [23, 44] is in the geo whose geoIndex 0.\nchart.containPixel(&#39;geo&#39;, [23, 44]); // Parameter &#39;geo&#39; means {geoIndex: 0}\n// Determine whether point [23, 44] is in the grid whose gridId is &#39;z&#39;.\nchart.containPixel({gridId: &#39;z&#39;}, [23, 44]);\n// Determine whether point [23, 44] is in series whose index are 1, 4 or 5.\nchart.containPixel({seriesIndex: [1, 4, 5]}, [23, 44]);\n// Determine whether point [23, 44] is in series whose index are 1, 4 or 5,\n// or is in grid whose name is &#39;a&#39;.\nchart.containPixel({seriesIndex: [1, 4, 5], gridName: &#39;a&#39;}, [23, 44]);\n</code></pre>\n"
  },
  "showLoading": {
    "desc": "<pre><code class=\"lang-js\">(type?: string, opts?: Object)\n</code></pre>\n<p>Shows loading animation. You can call this interface manually before data is loaded, and call <a href=\"#echartsInstance.hideLoading\">hideLoading</a> to hide loading animation after data is loaded.</p>\n<p><strong>parameter: </strong></p>\n<ul>\n<li><p><code class=\"codespan\">type</code></p>\n<p>  Optional; type of loading animation; only <code class=\"codespan\">&#39;default&#39;</code> is supported by far.</p>\n</li>\n<li><p><code class=\"codespan\">opts</code></p>\n<p>  Optional; configuration item of loading animation, which is related to <code class=\"codespan\">type</code>. Following shows the available configuration items and their default values:</p>\n<pre><code class=\"lang-js\">default: {\n  text: &#39;loading&#39;,\n  color: &#39;#c23531&#39;,\n  textColor: &#39;#000&#39;,\n  maskColor: &#39;rgba(255, 255, 255, 0.8)&#39;,\n  zlevel: 0,\n\n  // Font size. Available since `v4.8.0`.\n  fontSize: 12,\n  // Show an animated &quot;spinner&quot; or not. Available since `v4.8.0`.\n  showSpinner: true,\n  // Radius of the &quot;spinner&quot;. Available since `v4.8.0`.\n  spinnerRadius: 10,\n  // Line width of the &quot;spinner&quot;. Available since `v4.8.0`.\n  lineWidth: 5\n}\n</code></pre>\n</li>\n</ul>\n"
  },
  "hideLoading": {
    "desc": "<p>Hides animation loading effect.</p>\n"
  },
  "getDataURL": {
    "desc": "<pre><code class=\"lang-js\">(opts: {\n    // Exporting format, can be either png, or jpeg\n    type?: string,\n    // Resolution ratio of exporting image, 1 by default.\n    pixelRatio?: number,\n    // Background color of exporting image, use backgroundColor in option by default.\n    backgroundColor?: string,\n    // Excluded components list. e.g. [&#39;toolbox&#39;]\n    excludeComponents?: Array.&lt;string&gt;\n}) =&gt; string\n</code></pre>\n<p>Exports chart image; returns a base64 URL; can be set to <code class=\"codespan\">src</code> of <code class=\"codespan\">Image</code>.</p>\n<p><strong>For example: </strong></p>\n<pre><code class=\"lang-js\">var img = new Image();\nimg.src = myChart.getDataURL({\n    pixelRatio: 2,\n    backgroundColor: &#39;#fff&#39;\n});\n</code></pre>\n"
  },
  "getConnectedDataURL": {
    "desc": "<pre><code class=\"lang-js\">(opts: {\n    // Exporting format, can be either png, or jpeg\n    type?: string,\n    // Resolution ratio of exporting image, 1 by default.\n    pixelRatio?: number,\n    // Background color of exporting image, use backgroundColor in option by default.\n    backgroundColor?: string,\n    // Excluded components list. e.g. [&#39;toolbox&#39;]\n    excludeComponents?: Array.&lt;string&gt;\n}) =&gt; string\n</code></pre>\n<p>Exports connected chart image; returns a base64 url; can be set to <code class=\"codespan\">src</code> of <code class=\"codespan\">Image</code>. Position of charts in exported image are related to that of the container.</p>\n"
  },
  "appendData": {
    "desc": "<pre><code class=\"lang-js\">(opts: {\n    // Specify which series the data will be appended to.\n    seriesIndex?: string,\n    // The data to be appended.\n    data?: Array|TypedArray\n}) =&gt; string\n</code></pre>\n<p>The method is used in rendering millions of data (e.g. rendering geo data). In these scenarios, the entire size of data is probably up to 10 or 100 MB, even using binary format. So chunked load data and rendering is required. When using <code class=\"codespan\">appendData</code>, the graphic elements that have been rendered will not be cleared, but keep rendering new graphic elements.</p>\n<p>Notice:</p>\n<ul>\n<li>Currently, when a series is using <code class=\"codespan\">dataset</code>, it is not supported to use <code class=\"codespan\">appendData</code>.</li>\n<li>Currently, not all types of series support incremental rendering when using <code class=\"codespan\">appendData</code>. Only these types of series support it: scatter and lines of pure echarts, and scatterGL, linesGL and polygons3D of echarts-gl.</li>\n</ul>\n"
  },
  "clear": {
    "desc": "<p>Clears current instance; removes all components and series in current instance.</p>\n"
  },
  "isDisposed": {
    "desc": "<pre><code class=\"lang-js\">() =&gt; boolean\n</code></pre>\n<p>Returns whether current instance has been disposed.</p>\n"
  },
  "dispose": {
    "desc": "<p>Disposes instance. Once disposed, the instance can not be used again.</p>\n"
  }
}