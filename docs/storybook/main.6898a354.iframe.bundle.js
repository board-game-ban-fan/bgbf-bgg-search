(self.webpackChunkbgbf_bgg_search=self.webpackChunkbgbf_bgg_search||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/BggSearchInput/BggSearchInput.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},default:function(){return BggSearchInput_stories}});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),regenerator=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),debounce=__webpack_require__("./node_modules/lodash/debounce.js"),debounce_default=__webpack_require__.n(debounce),throttle=__webpack_require__("./node_modules/lodash/throttle.js"),throttle_default=__webpack_require__.n(throttle),react_select_esm=__webpack_require__("./node_modules/react-select/async/dist/react-select.esm.js"),lib_module=__webpack_require__("./node_modules/bgg-xml-api-client/lib/module/index.js"),BggSearchInput_module={},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onChangeInput","onChangeSelect","placeholder"],BggSearchInput=function BggSearchInput(_ref){var onChangeInput=_ref.onChangeInput,_ref$onChangeSelect=_ref.onChangeSelect,onChangeSelect=void 0===_ref$onChangeSelect?function(val){console.log("select: ".concat(val," (you should pass onChange prop)"))}:_ref$onChangeSelect,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"Search by BGG...":_ref$placeholder,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),getBggGame=(0,react.useCallback)(function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(name){var _yield$bggXmlApiClien,data,item,total,res;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,lib_module.ZP.get("search",{query:name,type:"boardgame"});case 2:if(_yield$bggXmlApiClien=_context.sent,data=_yield$bggXmlApiClien.data,item=data.item,"0"!==(total=data.total)){_context.next=7;break}return _context.abrupt("return");case 7:return res=("1"===total?[item]:item).map((function(_ref3){var id=_ref3.id,name=_ref3.name.value,yearpublished=_ref3.yearpublished,year=null==yearpublished?void 0:yearpublished.value;return{label:"".concat(name).concat(year?" ("+year+")":""),value:id,year:year}})),_context.abrupt("return",res);case 10:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}(),[]),throttleRequest=(0,react.useCallback)(throttle_default()(function(){var _ref4=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(val,callback){var data;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!val){_context2.next=7;break}return _context2.next=3,getBggGame(val);case 3:data=_context2.sent,callback(data),_context2.next=8;break;case 7:callback([]);case 8:case"end":return _context2.stop()}}),_callee2)})));return function(_x2,_x3){return _ref4.apply(this,arguments)}}(),5100),[]),debounceGet=(0,react.useCallback)(debounce_default()((function(val,callback){throttleRequest(val,callback)}),1500),[]),loadOptions=(0,react.useCallback)((function(val,callback){debounceGet(val,callback)}),[]);return(0,jsx_runtime.jsx)(react_select_esm.Z,(0,objectSpread2.Z)({className:BggSearchInput_module.BggSearchInput,cacheOptions:!0,loadOptions:loadOptions,defaultOptions:!0,onInputChange:onChangeInput,onChange:onChangeSelect,placeholder:placeholder},restProps))};BggSearchInput.__docgenInfo={description:"",methods:[],displayName:"BggSearchInput",props:{onChangeSelect:{defaultValue:{value:"(val) => {\n  console.log(`select: ${val} (you should pass onChange prop)`);\n}",computed:!1},type:{name:"func"},required:!1,description:""},placeholder:{defaultValue:{value:'"Search by BGG..."',computed:!1},type:{name:"string"},required:!1,description:""},onChangeInput:{type:{name:"func"},required:!1,description:""}}};var BggSearchInput_BggSearchInput=BggSearchInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/BggSearchInput/BggSearchInput.jsx"]={name:"BggSearchInput",docgenInfo:BggSearchInput.__docgenInfo,path:"src/BggSearchInput/BggSearchInput.jsx"});var BggSearchInput_stories={parameters:{storySource:{source:'import React from "react";\n\nimport BggSearchInput from "./BggSearchInput.jsx";\n\nexport default {\n  title: "BggSearchInput",\n  component: BggSearchInput,\n  argTypes: {\n    // backgroundColor: { control: "color" },\n  },\n};\n\nconst Template = (args) => <BggSearchInput {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {};\n',locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:55,line:13},startBody:{col:17,line:13},endBody:{col:55,line:13}}}}},title:"BggSearchInput",component:BggSearchInput_BggSearchInput,argTypes:{}},Primary=function Template(args){return(0,jsx_runtime.jsx)(BggSearchInput_BggSearchInput,(0,objectSpread2.Z)({},args))}.bind({});Primary.args={},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <BggSearchInput {...args} />"}},Primary.parameters)},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./BggSearchInput/BggSearchInput.stories.js":"./src/BggSearchInput/BggSearchInput.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[280],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);