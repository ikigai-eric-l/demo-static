;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./pixi.js-vendor-legacy-DddHKyqC.js'], function (exports, module) {
    'use strict';

    var Filter, deprecation, GpuProgram, GlProgram, TexturePool, Color;
    return {
      setters: [module => {
        Filter = module.F;
        deprecation = module.d;
        GpuProgram = module.G;
        GlProgram = module.a;
        TexturePool = module.T;
        Color = module.C;
      }],
      execute: function () {
        var vertex = "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
        var wgslVertex = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}";
        var fragment$1 = "\nin vec2 vTextureCoord;\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    finalColor = color;\n}";
        var source$1 = "struct KawaseBlurUniforms {\n  uOffset:vec2<f32>,\n};\n\n@group(0) @binding(1) var uTexture: texture_2d<f32>; \n@group(0) @binding(2) var uSampler: sampler;\n@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;\n\n@fragment\nfn mainFragment(\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv : vec2<f32>\n) -> @location(0) vec4<f32> {\n  let uOffset = kawaseBlurUniforms.uOffset;\n  var color: vec4<f32> = vec4<f32>(0.0);\n\n  // Sample top left pixel\n  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));\n  // Sample top right pixel\n  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));\n  // Sample bottom right pixel\n  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));\n  // Sample bottom left pixel\n  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));\n  // Average\n  color *= 0.25;\n\n  return color;\n}";
        var fragmentClamp = "\nprecision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform vec2 uOffset;\n\nuniform vec4 uInputClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));\n\n    // Sample top right pixel\n    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    finalColor = color;\n}\n";
        var sourceClamp = "struct KawaseBlurUniforms {\n  uOffset:vec2<f32>,\n};\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n\n@group(0) @binding(1) var uTexture: texture_2d<f32>; \n@group(0) @binding(2) var uSampler: sampler;\n@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;\n\n@fragment\nfn mainFragment(\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv : vec2<f32>\n) -> @location(0) vec4<f32> {\n  let uOffset = kawaseBlurUniforms.uOffset;\n  var color: vec4<f32> = vec4(0.0);\n\n  // Sample top left pixel\n  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n  // Sample top right pixel\n  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n  // Sample bottom right pixel\n  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n  // Sample bottom left pixel\n  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n  // Average\n  color *= 0.25;\n    \n  return color;\n}";
        var __defProp$1 = Object.defineProperty;
        var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __publicField$1 = (obj, key, value) => {
          __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        const _KawaseBlurFilter = class _KawaseBlurFilter extends Filter {
          /** @ignore */
          constructor(...args) {
            var _args$, _options, _options2, _options$pixelSize;
            let options = (_args$ = args[0]) !== null && _args$ !== void 0 ? _args$ : {};
            if (typeof options === "number" || Array.isArray(options)) {
              deprecation("6.0.0", "KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }");
              options = {
                strength: options
              };
              if (args[1] !== void 0) options.quality = args[1];
              if (args[2] !== void 0) options.clamp = args[2];
            }
            options = _objectSpread(_objectSpread({}, _KawaseBlurFilter.DEFAULT_OPTIONS), options);
            const gpuProgram = GpuProgram.from({
              vertex: {
                source: wgslVertex,
                entryPoint: "mainVertex"
              },
              fragment: {
                source: (_options = options) !== null && _options !== void 0 && _options.clamp ? sourceClamp : source$1,
                entryPoint: "mainFragment"
              }
            });
            const glProgram = GlProgram.from({
              vertex,
              fragment: (_options2 = options) !== null && _options2 !== void 0 && _options2.clamp ? fragmentClamp : fragment$1,
              name: "kawase-blur-filter"
            });
            super({
              gpuProgram,
              glProgram,
              resources: {
                kawaseBlurUniforms: {
                  uOffset: {
                    value: new Float32Array(2),
                    type: "vec2<f32>"
                  }
                }
              }
            });
            __publicField$1(this, "uniforms");
            __publicField$1(this, "_pixelSize", {
              x: 0,
              y: 0
            });
            __publicField$1(this, "_clamp");
            __publicField$1(this, "_kernels", []);
            __publicField$1(this, "_blur");
            __publicField$1(this, "_quality");
            this.uniforms = this.resources.kawaseBlurUniforms.uniforms;
            this.pixelSize = (_options$pixelSize = options.pixelSize) !== null && _options$pixelSize !== void 0 ? _options$pixelSize : {
              x: 1,
              y: 1
            };
            if (Array.isArray(options.strength)) {
              this.kernels = options.strength;
            } else if (typeof options.strength === "number") {
              var _options$quality;
              this._blur = options.strength;
              this.quality = (_options$quality = options.quality) !== null && _options$quality !== void 0 ? _options$quality : 3;
            }
            this._clamp = !!options.clamp;
          }
          /**
           * Override existing apply method in `Filter`
           * @override
           * @ignore
           */
          apply(filterManager, input, output, clearMode) {
            const uvX = this.pixelSizeX / input.source.width;
            const uvY = this.pixelSizeY / input.source.height;
            let offset;
            if (this._quality === 1 || this._blur === 0) {
              offset = this._kernels[0] + 0.5;
              this.uniforms.uOffset[0] = offset * uvX;
              this.uniforms.uOffset[1] = offset * uvY;
              filterManager.applyFilter(this, input, output, clearMode);
            } else {
              const renderTarget = TexturePool.getSameSizeTexture(input);
              let source2 = input;
              let target = renderTarget;
              let tmp;
              const last = this._quality - 1;
              for (let i = 0; i < last; i++) {
                offset = this._kernels[i] + 0.5;
                this.uniforms.uOffset[0] = offset * uvX;
                this.uniforms.uOffset[1] = offset * uvY;
                filterManager.applyFilter(this, source2, target, true);
                tmp = source2;
                source2 = target;
                target = tmp;
              }
              offset = this._kernels[last] + 0.5;
              this.uniforms.uOffset[0] = offset * uvX;
              this.uniforms.uOffset[1] = offset * uvY;
              filterManager.applyFilter(this, source2, output, clearMode);
              TexturePool.returnTexture(renderTarget);
            }
          }
          /**
            * The amount of blur, value greater than `0`.
            * @default 4
            */
          get strength() {
            return this._blur;
          }
          set strength(value) {
            this._blur = value;
            this._generateKernels();
          }
          /**
            * The quality of the filter, integer greater than `1`.
            * @default 3
            */
          get quality() {
            return this._quality;
          }
          set quality(value) {
            this._quality = Math.max(1, Math.round(value));
            this._generateKernels();
          }
          /**
            * The kernel size of the blur filter, for advanced usage
            * @default [0]
            */
          get kernels() {
            return this._kernels;
          }
          set kernels(value) {
            if (Array.isArray(value) && value.length > 0) {
              this._kernels = value;
              this._quality = value.length;
              this._blur = Math.max(...value);
            } else {
              this._kernels = [0];
              this._quality = 1;
            }
          }
          /**
            * The size of the pixels. Large size is blurrier. For advanced usage.
            * @default {x:1,y:1}
            */
          get pixelSize() {
            return this._pixelSize;
          }
          set pixelSize(value) {
            if (typeof value === "number") {
              this.pixelSizeX = this.pixelSizeY = value;
              return;
            }
            if (Array.isArray(value)) {
              this.pixelSizeX = value[0];
              this.pixelSizeY = value[1];
              return;
            }
            this._pixelSize = value;
          }
          /**
            * The size of the pixels on the `x` axis. Large size is blurrier. For advanced usage.
            * @default 1
            */
          get pixelSizeX() {
            return this.pixelSize.x;
          }
          set pixelSizeX(value) {
            this.pixelSize.x = value;
          }
          /**
            * The size of the pixels on the `y` axis. Large size is blurrier. For advanced usage.
            * @default 1
            */
          get pixelSizeY() {
            return this.pixelSize.y;
          }
          set pixelSizeY(value) {
            this.pixelSize.y = value;
          }
          /**
            * Get the if the filter is clamped
            * @default false
            */
          get clamp() {
            return this._clamp;
          }
          /** Update padding based on kernel data */
          _updatePadding() {
            this.padding = Math.ceil(this._kernels.reduce((acc, v) => acc + v + 0.5, 0));
          }
          /** Auto generate kernels by blur & quality */
          _generateKernels() {
            const blur = this._blur;
            const quality = this._quality;
            const kernels = [blur];
            if (blur > 0) {
              let k = blur;
              const step = blur / quality;
              for (let i = 1; i < quality; i++) {
                k -= step;
                kernels.push(k);
              }
            }
            this._kernels = kernels;
            this._updatePadding();
          }
        };
        /** Default values for options. */
        __publicField$1(_KawaseBlurFilter, "DEFAULT_OPTIONS", {
          strength: 4,
          quality: 3,
          clamp: false,
          pixelSize: {
            x: 1,
            y: 1
          }
        });
        let KawaseBlurFilter = exports("K", _KawaseBlurFilter);
        var fragment = "precision highp float;\nin vec2 vTextureCoord;\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform vec2 uStrength;\nuniform vec3 uColor;\nuniform float uKnockout;\nuniform float uAlpha;\n\nuniform vec4 uInputSize;\nuniform vec4 uInputClamp;\n\nconst float PI = 3.14159265358979323846264;\n\n// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);\nconst float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;\n\nvoid main(void) {\n    vec2 px = vec2(1.) / uInputSize.xy;\n\n    float totalAlpha = 0.;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {\n      direction = vec2(cos(angle), sin(angle)) * px;\n\n      for (float curDistance = 0.; curDistance < DIST; curDistance++) {\n          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);\n          curColor = texture(uTexture, displaced);\n          totalAlpha += (DIST - curDistance) * curColor.a;\n      }\n    }\n    \n    curColor = texture(uTexture, vTextureCoord);\n\n    vec4 glowColor = vec4(uColor, uAlpha);\n    bool knockout = uKnockout > .5;\n    float innerStrength = uStrength[0];\n    float outerStrength = uStrength[1];\n\n    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;\n    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;\n    float innerGlowStrength = min(1., innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;\n    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n\n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      finalColor = innerColor + outerGlowColor;\n    }\n}\n";
        var source = "struct GlowUniforms {\n  uDistance: f32,\n  uStrength: vec2<f32>,\n  uColor: vec3<f32>,\n  uAlpha: f32,\n  uQuality: f32,\n  uKnockout: f32,\n};\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n\n@group(0) @binding(1) var uTexture: texture_2d<f32>; \n@group(0) @binding(2) var uSampler: sampler;\n@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;\n\n@fragment\nfn mainFragment(\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv : vec2<f32>\n) -> @location(0) vec4<f32> {\n  let quality = glowUniforms.uQuality;\n  let distance = glowUniforms.uDistance;\n\n  let dist: f32 = glowUniforms.uDistance;\n  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);\n  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);\n\n  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);\n\n  var totalAlpha: f32 = 0.0;\n\n  var direction: vec2<f32>;\n  var displaced: vec2<f32>;\n  var curColor: vec4<f32>;\n\n  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {\n    direction = vec2<f32>(cos(angle), sin(angle)) * px;\n    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {\n      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n      curColor = textureSample(uTexture, uSampler, displaced);\n      totalAlpha += (dist - curDistance) * curColor.a;\n    }\n  }\n    \n  curColor = textureSample(uTexture, uSampler, uv);\n\n  let glowColorRGB = glowUniforms.uColor;\n  let glowAlpha = glowUniforms.uAlpha;\n  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);\n  let knockout: bool = glowUniforms.uKnockout > 0.5;\n  let innerStrength = glowUniforms.uStrength[0];\n  let outerStrength = glowUniforms.uStrength[1];\n\n  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));\n  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;\n  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);\n  \n  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);\n  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;\n  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);\n  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;\n  \n  if (knockout) {\n    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;\n    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);\n  }\n  else {\n    return innerColor + outerGlowColor;\n  }\n}\n\nconst PI: f32 = 3.14159265358979323846264;";
        var __defProp = Object.defineProperty;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __publicField = (obj, key, value) => {
          __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        const _GlowFilter = class _GlowFilter extends Filter {
          /**
           * @param options - Options for the GlowFilter constructor.
           */
          constructor(options) {
            var _options$distance, _options$quality2, _options$knockout, _options3, _options$color;
            options = _objectSpread(_objectSpread({}, _GlowFilter.DEFAULT_OPTIONS), options);
            const distance = (_options$distance = options.distance) !== null && _options$distance !== void 0 ? _options$distance : 10;
            const quality = (_options$quality2 = options.quality) !== null && _options$quality2 !== void 0 ? _options$quality2 : 0.1;
            const gpuProgram = GpuProgram.from({
              vertex: {
                source: wgslVertex,
                entryPoint: "mainVertex"
              },
              fragment: {
                source,
                entryPoint: "mainFragment"
              }
            });
            const glProgram = GlProgram.from({
              vertex,
              fragment: fragment.replace(/__ANGLE_STEP_SIZE__/gi, `${(1 / quality / distance).toFixed(7)}`).replace(/__DIST__/gi, `${distance.toFixed(0)}.0`),
              name: "glow-filter"
            });
            super({
              gpuProgram,
              glProgram,
              resources: {
                glowUniforms: {
                  uDistance: {
                    value: distance,
                    type: "f32"
                  },
                  uStrength: {
                    value: [options.innerStrength, options.outerStrength],
                    type: "vec2<f32>"
                  },
                  uColor: {
                    value: new Float32Array(3),
                    type: "vec3<f32>"
                  },
                  uAlpha: {
                    value: options.alpha,
                    type: "f32"
                  },
                  uQuality: {
                    value: quality,
                    type: "f32"
                  },
                  uKnockout: {
                    value: ((_options$knockout = (_options3 = options) === null || _options3 === void 0 ? void 0 : _options3.knockout) !== null && _options$knockout !== void 0 ? _options$knockout : false) ? 1 : 0,
                    type: "f32"
                  }
                }
              },
              padding: distance
            });
            __publicField(this, "uniforms");
            __publicField(this, "_color");
            this.uniforms = this.resources.glowUniforms.uniforms;
            this._color = new Color();
            this.color = (_options$color = options.color) !== null && _options$color !== void 0 ? _options$color : 16777215;
          }
          /**
           * Only draw the glow, not the texture itself
           * @default false
           */
          get distance() {
            return this.uniforms.uDistance;
          }
          set distance(value) {
            this.uniforms.uDistance = this.padding = value;
          }
          /**
          * The strength of the glow inward from the edge of the sprite.
          * @default 0
          */
          get innerStrength() {
            return this.uniforms.uStrength[0];
          }
          set innerStrength(value) {
            this.uniforms.uStrength[0] = value;
          }
          /**
          * The strength of the glow outward from the edge of the sprite.
          * @default 4
          */
          get outerStrength() {
            return this.uniforms.uStrength[1];
          }
          set outerStrength(value) {
            this.uniforms.uStrength[1] = value;
          }
          /**
          * The color of the glow.
          * @default 0xFFFFFF
          */
          get color() {
            return this._color.value;
          }
          set color(value) {
            this._color.setValue(value);
            const [r, g, b] = this._color.toArray();
            this.uniforms.uColor[0] = r;
            this.uniforms.uColor[1] = g;
            this.uniforms.uColor[2] = b;
          }
          /**
          * The alpha of the glow
          * @default 1
          */
          get alpha() {
            return this.uniforms.uAlpha;
          }
          set alpha(value) {
            this.uniforms.uAlpha = value;
          }
          /**
          * A number between 0 and 1 that describes the quality of the glow. The higher the number the less performant
          * @default 0.1
          */
          get quality() {
            return this.uniforms.uQuality;
          }
          set quality(value) {
            this.uniforms.uQuality = value;
          }
          /**
          * Only draw the glow, not the texture itself
          * @default false
          */
          get knockout() {
            return this.uniforms.uKnockout === 1;
          }
          set knockout(value) {
            this.uniforms.uKnockout = value ? 1 : 0;
          }
        };
        /** Default values for options. */
        __publicField(_GlowFilter, "DEFAULT_OPTIONS", {
          distance: 10,
          outerStrength: 4,
          innerStrength: 0,
          color: 16777215,
          alpha: 1,
          quality: 0.1,
          knockout: false
        });
        let GlowFilter = exports("G", _GlowFilter);
      }
    };
  });
})();
//# sourceMappingURL=pixi-filters-vendor-legacy-x0m7DAsF.js.map
