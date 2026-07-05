var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i236 = root || request.c( 'UnityEngine.JointSpring' )
  var i237 = data
  i236.spring = i237[0]
  i236.damper = i237[1]
  i236.targetPosition = i237[2]
  return i236
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i238 = root || request.c( 'UnityEngine.JointMotor' )
  var i239 = data
  i238.m_TargetVelocity = i239[0]
  i238.m_Force = i239[1]
  i238.m_FreeSpin = i239[2]
  return i238
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i240 = root || request.c( 'UnityEngine.JointLimits' )
  var i241 = data
  i240.m_Min = i241[0]
  i240.m_Max = i241[1]
  i240.m_Bounciness = i241[2]
  i240.m_BounceMinVelocity = i241[3]
  i240.m_ContactDistance = i241[4]
  i240.minBounce = i241[5]
  i240.maxBounce = i241[6]
  return i240
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.JointDrive' )
  var i243 = data
  i242.m_PositionSpring = i243[0]
  i242.m_PositionDamper = i243[1]
  i242.m_MaximumForce = i243[2]
  i242.m_UseAcceleration = i243[3]
  return i242
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i245 = data
  i244.m_Spring = i245[0]
  i244.m_Damper = i245[1]
  return i244
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i247 = data
  i246.m_Limit = i247[0]
  i246.m_Bounciness = i247[1]
  i246.m_ContactDistance = i247[2]
  return i246
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i249 = data
  i248.m_ExtremumSlip = i249[0]
  i248.m_ExtremumValue = i249[1]
  i248.m_AsymptoteSlip = i249[2]
  i248.m_AsymptoteValue = i249[3]
  i248.m_Stiffness = i249[4]
  return i248
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i251 = data
  i250.m_LowerAngle = i251[0]
  i250.m_UpperAngle = i251[1]
  return i250
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i253 = data
  i252.m_MotorSpeed = i253[0]
  i252.m_MaximumMotorTorque = i253[1]
  return i252
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i255 = data
  i254.m_DampingRatio = i255[0]
  i254.m_Frequency = i255[1]
  i254.m_Angle = i255[2]
  return i254
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i257 = data
  i256.m_LowerTranslation = i257[0]
  i256.m_UpperTranslation = i257[1]
  return i256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i259 = data
  i258.name = i259[0]
  i258.width = i259[1]
  i258.height = i259[2]
  i258.mipmapCount = i259[3]
  i258.anisoLevel = i259[4]
  i258.filterMode = i259[5]
  i258.hdr = !!i259[6]
  i258.format = i259[7]
  i258.wrapMode = i259[8]
  i258.alphaIsTransparency = !!i259[9]
  i258.alphaSource = i259[10]
  i258.graphicsFormat = i259[11]
  i258.sRGBTexture = !!i259[12]
  i258.desiredColorSpace = i259[13]
  i258.wrapU = i259[14]
  i258.wrapV = i259[15]
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i260 = root || new pc.UnityMaterial()
  var i261 = data
  i260.name = i261[0]
  request.r(i261[1], i261[2], 0, i260, 'shader')
  i260.renderQueue = i261[3]
  i260.enableInstancing = !!i261[4]
  var i263 = i261[5]
  var i262 = []
  for(var i = 0; i < i263.length; i += 1) {
    i262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i263[i + 0]) );
  }
  i260.floatParameters = i262
  var i265 = i261[6]
  var i264 = []
  for(var i = 0; i < i265.length; i += 1) {
    i264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i265[i + 0]) );
  }
  i260.colorParameters = i264
  var i267 = i261[7]
  var i266 = []
  for(var i = 0; i < i267.length; i += 1) {
    i266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i267[i + 0]) );
  }
  i260.vectorParameters = i266
  var i269 = i261[8]
  var i268 = []
  for(var i = 0; i < i269.length; i += 1) {
    i268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i269[i + 0]) );
  }
  i260.textureParameters = i268
  var i271 = i261[9]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i271[i + 0]) );
  }
  i260.materialFlags = i270
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i275 = data
  i274.name = i275[0]
  i274.value = i275[1]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i279 = data
  i278.name = i279[0]
  i278.value = new pc.Color(i279[1], i279[2], i279[3], i279[4])
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = new pc.Vec4( i283[1], i283[2], i283[3], i283[4] )
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i287 = data
  i286.name = i287[0]
  request.r(i287[1], i287[2], 0, i286, 'value')
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i291 = data
  i290.name = i291[0]
  i290.enabled = !!i291[1]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i293 = data
  i292.position = new pc.Vec3( i293[0], i293[1], i293[2] )
  i292.scale = new pc.Vec3( i293[3], i293[4], i293[5] )
  i292.rotation = new pc.Quat(i293[6], i293[7], i293[8], i293[9])
  return i292
}

Deserializers["HexaTest.App.TutorialController"] = function (request, data, root) {
  var i294 = root || request.c( 'HexaTest.App.TutorialController' )
  var i295 = data
  request.r(i295[0], i295[1], 0, i294, 'baseSprite')
  request.r(i295[2], i295[3], 0, i294, 'pressSprite')
  i294.idleDelay = i295[4]
  i294.handWorldHeight = i295[5]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i297 = data
  i296.name = i297[0]
  i296.tagId = i297[1]
  i296.enabled = !!i297[2]
  i296.isStatic = !!i297[3]
  i296.layer = i297[4]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i299 = data
  i298.name = i299[0]
  i298.atlasId = i299[1]
  i298.mipmapCount = i299[2]
  i298.hdr = !!i299[3]
  i298.size = i299[4]
  i298.anisoLevel = i299[5]
  i298.filterMode = i299[6]
  var i301 = i299[7]
  var i300 = []
  for(var i = 0; i < i301.length; i += 4) {
    i300.push( UnityEngine.Rect.MinMaxRect(i301[i + 0], i301[i + 1], i301[i + 2], i301[i + 3]) );
  }
  i298.rects = i300
  i298.wrapU = i299[8]
  i298.wrapV = i299[9]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i305 = data
  i304.name = i305[0]
  i304.index = i305[1]
  i304.startup = !!i305[2]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i307 = data
  i306.aspect = i307[0]
  i306.orthographic = !!i307[1]
  i306.orthographicSize = i307[2]
  i306.backgroundColor = new pc.Color(i307[3], i307[4], i307[5], i307[6])
  i306.nearClipPlane = i307[7]
  i306.farClipPlane = i307[8]
  i306.fieldOfView = i307[9]
  i306.depth = i307[10]
  i306.clearFlags = i307[11]
  i306.cullingMask = i307[12]
  i306.rect = i307[13]
  request.r(i307[14], i307[15], 0, i306, 'targetTexture')
  i306.usePhysicalProperties = !!i307[16]
  i306.focalLength = i307[17]
  i306.sensorSize = new pc.Vec2( i307[18], i307[19] )
  i306.lensShift = new pc.Vec2( i307[20], i307[21] )
  i306.gateFit = i307[22]
  i306.commandBufferCount = i307[23]
  i306.cameraType = i307[24]
  i306.enabled = !!i307[25]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i309 = data
  i308.type = i309[0]
  i308.color = new pc.Color(i309[1], i309[2], i309[3], i309[4])
  i308.cullingMask = i309[5]
  i308.intensity = i309[6]
  i308.range = i309[7]
  i308.spotAngle = i309[8]
  i308.shadows = i309[9]
  i308.shadowNormalBias = i309[10]
  i308.shadowBias = i309[11]
  i308.shadowStrength = i309[12]
  i308.shadowResolution = i309[13]
  i308.lightmapBakeType = i309[14]
  i308.renderMode = i309[15]
  request.r(i309[16], i309[17], 0, i308, 'cookie')
  i308.cookieSize = i309[18]
  i308.shadowNearPlane = i309[19]
  i308.occlusionMaskChannel = i309[20]
  i308.isBaked = !!i309[21]
  i308.mixedLightingMode = i309[22]
  i308.enabled = !!i309[23]
  return i308
}

Deserializers["HexaTest.App.GameBootstrap"] = function (request, data, root) {
  var i310 = root || request.c( 'HexaTest.App.GameBootstrap' )
  var i311 = data
  i310.config = request.d('HexaTest.Config.GameConfig', i311[0], i310.config)
  i310.setUpCamera = !!i311[1]
  i310.seededCells = i311[2]
  i310.cameraFitMargin = i311[3]
  request.r(i311[4], i311[5], 0, i310, 'hud')
  request.r(i311[6], i311[7], 0, i310, 'tutorial')
  request.r(i311[8], i311[9], 0, i310, 'hexBaseMaterial')
  request.r(i311[10], i311[11], 0, i310, 'packshot')
  return i310
}

Deserializers["HexaTest.Config.GameConfig"] = function (request, data, root) {
  var i312 = root || request.c( 'HexaTest.Config.GameConfig' )
  var i313 = data
  i312.boardRadius = i313[0]
  i312.cellSize = i313[1]
  i312.discFill = i313[2]
  i312.discThickness = i313[3]
  i312.discSpacing = i313[4]
  i312.discSeparatorThickness = i313[5]
  i312.discSeparatorDarken = i313[6]
  i312.discRound = i313[7]
  i312.cornerSegments = i313[8]
  i312.clearCount = i313[9]
  i312.tileInset = i313[10]
  i312.tileThickness = i313[11]
  i312.tileRound = i313[12]
  i312.tileRaise = i313[13]
  i312.baseRound = i313[14]
  i312.baseLayerThickness = i313[15]
  i312.edgeRim = i313[16]
  var i315 = i313[17]
  var i314 = []
  for(var i = 0; i < i315.length; i += 4) {
    i314.push( new pc.Color(i315[i + 0], i315[i + 1], i315[i + 2], i315[i + 3]) );
  }
  i312.baseLayerColors = i314
  i312.snapDistance = i313[18]
  i312.dragLift = i313[19]
  i312.trayDistance = i313[20]
  i312.traySpacing = i313[21]
  i312.flipDuration = i313[22]
  i312.flipStagger = i313[23]
  i312.maxConcurrentFlips = i313[24]
  i312.clearDuration = i313[25]
  i312.discInterval = i313[26]
  i312.speedRamp = i313[27]
  i312.maxSpeed = i313[28]
  i312.tileColor = new pc.Color(i313[29], i313[30], i313[31], i313[32])
  var i317 = i313[33]
  var i316 = []
  for(var i = 0; i < i317.length; i += 4) {
    i316.push( new pc.Color(i317[i + 0], i317[i + 1], i317[i + 2], i317[i + 3]) );
  }
  i312.palette = i316
  return i312
}

Deserializers["HexaTest.UI.PackshotView"] = function (request, data, root) {
  var i320 = root || request.c( 'HexaTest.UI.PackshotView' )
  var i321 = data
  request.r(i321[0], i321[1], 0, i320, 'background')
  request.r(i321[2], i321[3], 0, i320, 'logo')
  request.r(i321[4], i321[5], 0, i320, 'playNow')
  i320.revealStartSize = i321[6]
  i320.revealEndPadding = i321[7]
  i320.revealDuration = i321[8]
  i320.logoAnchoredPosition = new pc.Vec2( i321[9], i321[10] )
  i320.logoSize = new pc.Vec2( i321[11], i321[12] )
  i320.playNowAnchoredPosition = new pc.Vec2( i321[13], i321[14] )
  i320.playNowSize = new pc.Vec2( i321[15], i321[16] )
  return i320
}

Deserializers["HexaTest.UI.TimerHudView"] = function (request, data, root) {
  var i322 = root || request.c( 'HexaTest.UI.TimerHudView' )
  var i323 = data
  i322.duration = i323[0]
  i322.alarmThreshold = i323[1]
  i322.alarmPulseScaleUpDuration = i323[2]
  i322.alarmPulseScaleDownDuration = i323[3]
  i322.alarmPulseInterval = i323[4]
  i322.alarmPulseScale = i323[5]
  i322.alarmPulseScaleStep = i323[6]
  i322.alarmPulseMaxScale = i323[7]
  i322.endThrowDuration = i323[8]
  i322.endThrowSettleDuration = i323[9]
  i322.endThrowVerticalAmplitude = i323[10]
  i322.endThrowHorizontalAmplitude = i323[11]
  i322.endThrowFrequency = i323[12]
  i322.fillGradient = i323[13] ? new pc.ColorGradient(i323[13][0], i323[13][1], i323[13][2]) : null
  i322.trackAlarmColor = new pc.Color(i323[14], i323[15], i323[16], i323[17])
  request.r(i323[18], i323[19], 0, i322, 'alphaTintMaterial')
  request.r(i323[20], i323[21], 0, i322, 'fillImage')
  request.r(i323[22], i323[23], 0, i322, 'trackImage')
  request.r(i323[24], i323[25], 0, i322, 'timerBgImage')
  request.r(i323[26], i323[27], 0, i322, 'timerNippleImage')
  request.r(i323[28], i323[29], 0, i322, 'watchRect')
  request.r(i323[30], i323[31], 0, i322, 'timerRootRect')
  request.r(i323[32], i323[33], 0, i322, 'watchImage')
  request.r(i323[34], i323[35], 0, i322, 'needleRect')
  request.r(i323[36], i323[37], 0, i322, 'radialImage')
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i325 = data
  i324.pivot = new pc.Vec2( i325[0], i325[1] )
  i324.anchorMin = new pc.Vec2( i325[2], i325[3] )
  i324.anchorMax = new pc.Vec2( i325[4], i325[5] )
  i324.sizeDelta = new pc.Vec2( i325[6], i325[7] )
  i324.anchoredPosition3D = new pc.Vec3( i325[8], i325[9], i325[10] )
  i324.rotation = new pc.Quat(i325[11], i325[12], i325[13], i325[14])
  i324.scale = new pc.Vec3( i325[15], i325[16], i325[17] )
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i327 = data
  i326.planeDistance = i327[0]
  i326.referencePixelsPerUnit = i327[1]
  i326.isFallbackOverlay = !!i327[2]
  i326.renderMode = i327[3]
  i326.renderOrder = i327[4]
  i326.sortingLayerName = i327[5]
  i326.sortingOrder = i327[6]
  i326.scaleFactor = i327[7]
  request.r(i327[8], i327[9], 0, i326, 'worldCamera')
  i326.overrideSorting = !!i327[10]
  i326.pixelPerfect = !!i327[11]
  i326.targetDisplay = i327[12]
  i326.overridePixelPerfect = !!i327[13]
  i326.enabled = !!i327[14]
  return i326
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i329 = data
  i328.m_UiScaleMode = i329[0]
  i328.m_ReferencePixelsPerUnit = i329[1]
  i328.m_ScaleFactor = i329[2]
  i328.m_ReferenceResolution = new pc.Vec2( i329[3], i329[4] )
  i328.m_ScreenMatchMode = i329[5]
  i328.m_MatchWidthOrHeight = i329[6]
  i328.m_PhysicalUnit = i329[7]
  i328.m_FallbackScreenDPI = i329[8]
  i328.m_DefaultSpriteDPI = i329[9]
  i328.m_DynamicPixelsPerUnit = i329[10]
  i328.m_PresetInfoIsWorld = !!i329[11]
  return i328
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i331 = data
  i330.m_IgnoreReversedGraphics = !!i331[0]
  i330.m_BlockingObjects = i331[1]
  i330.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i331[2] )
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i333 = data
  i332.cullTransparentMesh = !!i333[0]
  return i332
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.UI.Image' )
  var i335 = data
  request.r(i335[0], i335[1], 0, i334, 'm_Sprite')
  i334.m_Type = i335[2]
  i334.m_PreserveAspect = !!i335[3]
  i334.m_FillCenter = !!i335[4]
  i334.m_FillMethod = i335[5]
  i334.m_FillAmount = i335[6]
  i334.m_FillClockwise = !!i335[7]
  i334.m_FillOrigin = i335[8]
  i334.m_UseSpriteMesh = !!i335[9]
  i334.m_PixelsPerUnitMultiplier = i335[10]
  request.r(i335[11], i335[12], 0, i334, 'm_Material')
  i334.m_Maskable = !!i335[13]
  i334.m_Color = new pc.Color(i335[14], i335[15], i335[16], i335[17])
  i334.m_RaycastTarget = !!i335[18]
  i334.m_RaycastPadding = new pc.Vec4( i335[19], i335[20], i335[21], i335[22] )
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i337 = data
  i336.ambientIntensity = i337[0]
  i336.reflectionIntensity = i337[1]
  i336.ambientMode = i337[2]
  i336.ambientLight = new pc.Color(i337[3], i337[4], i337[5], i337[6])
  i336.ambientSkyColor = new pc.Color(i337[7], i337[8], i337[9], i337[10])
  i336.ambientGroundColor = new pc.Color(i337[11], i337[12], i337[13], i337[14])
  i336.ambientEquatorColor = new pc.Color(i337[15], i337[16], i337[17], i337[18])
  i336.fogColor = new pc.Color(i337[19], i337[20], i337[21], i337[22])
  i336.fogEndDistance = i337[23]
  i336.fogStartDistance = i337[24]
  i336.fogDensity = i337[25]
  i336.fog = !!i337[26]
  request.r(i337[27], i337[28], 0, i336, 'skybox')
  i336.fogMode = i337[29]
  var i339 = i337[30]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i339[i + 0]) );
  }
  i336.lightmaps = i338
  i336.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i337[31], i336.lightProbes)
  i336.lightmapsMode = i337[32]
  i336.mixedBakeMode = i337[33]
  i336.environmentLightingMode = i337[34]
  i336.ambientProbe = new pc.SphericalHarmonicsL2(i337[35])
  request.r(i337[36], i337[37], 0, i336, 'customReflection')
  request.r(i337[38], i337[39], 0, i336, 'defaultReflection')
  i336.defaultReflectionMode = i337[40]
  i336.defaultReflectionResolution = i337[41]
  i336.sunLightObjectId = i337[42]
  i336.pixelLightCount = i337[43]
  i336.defaultReflectionHDR = !!i337[44]
  i336.hasLightDataAsset = !!i337[45]
  i336.hasManualGenerate = !!i337[46]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i343 = data
  request.r(i343[0], i343[1], 0, i342, 'lightmapColor')
  request.r(i343[2], i343[3], 0, i342, 'lightmapDirection')
  request.r(i343[4], i343[5], 0, i342, 'shadowMask')
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i344 = root || new UnityEngine.LightProbes()
  var i345 = data
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i353 = data
  var i355 = i353[0]
  var i354 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i355.length; i += 1) {
    i354.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i355[i + 0]));
  }
  i352.ShaderCompilationErrors = i354
  i352.name = i353[1]
  i352.guid = i353[2]
  var i357 = i353[3]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( i357[i + 0] );
  }
  i352.shaderDefinedKeywords = i356
  var i359 = i353[4]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i359[i + 0]) );
  }
  i352.passes = i358
  var i361 = i353[5]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i361[i + 0]) );
  }
  i352.usePasses = i360
  var i363 = i353[6]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i363[i + 0]) );
  }
  i352.defaultParameterValues = i362
  request.r(i353[7], i353[8], 0, i352, 'unityFallbackShader')
  i352.readDepth = !!i353[9]
  i352.hasDepthOnlyPass = !!i353[10]
  i352.isCreatedByShaderGraph = !!i353[11]
  i352.disableBatching = !!i353[12]
  i352.compiled = !!i353[13]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i367 = data
  i366.shaderName = i367[0]
  i366.errorMessage = i367[1]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i372 = root || new pc.UnityShaderPass()
  var i373 = data
  i372.id = i373[0]
  i372.subShaderIndex = i373[1]
  i372.name = i373[2]
  i372.passType = i373[3]
  i372.grabPassTextureName = i373[4]
  i372.usePass = !!i373[5]
  i372.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[6], i372.zTest)
  i372.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[7], i372.zWrite)
  i372.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[8], i372.culling)
  i372.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i373[9], i372.blending)
  i372.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i373[10], i372.alphaBlending)
  i372.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[11], i372.colorWriteMask)
  i372.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[12], i372.offsetUnits)
  i372.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[13], i372.offsetFactor)
  i372.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[14], i372.stencilRef)
  i372.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[15], i372.stencilReadMask)
  i372.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i373[16], i372.stencilWriteMask)
  i372.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i373[17], i372.stencilOp)
  i372.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i373[18], i372.stencilOpFront)
  i372.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i373[19], i372.stencilOpBack)
  var i375 = i373[20]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i375[i + 0]) );
  }
  i372.tags = i374
  var i377 = i373[21]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( i377[i + 0] );
  }
  i372.passDefinedKeywords = i376
  var i379 = i373[22]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i379[i + 0]) );
  }
  i372.passDefinedKeywordGroups = i378
  var i381 = i373[23]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i381[i + 0]) );
  }
  i372.variants = i380
  var i383 = i373[24]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i383[i + 0]) );
  }
  i372.excludedVariants = i382
  i372.hasDepthReader = !!i373[25]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i385 = data
  i384.val = i385[0]
  i384.name = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i387 = data
  i386.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[0], i386.src)
  i386.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[1], i386.dst)
  i386.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[2], i386.op)
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i389 = data
  i388.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i389[0], i388.pass)
  i388.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i389[1], i388.fail)
  i388.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i389[2], i388.zFail)
  i388.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i389[3], i388.comp)
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i393 = data
  i392.name = i393[0]
  i392.value = i393[1]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i397 = data
  var i399 = i397[0]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( i399[i + 0] );
  }
  i396.keywords = i398
  i396.hasDiscard = !!i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i403 = data
  i402.passId = i403[0]
  i402.subShaderIndex = i403[1]
  var i405 = i403[2]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( i405[i + 0] );
  }
  i402.keywords = i404
  i402.vertexProgram = i403[3]
  i402.fragmentProgram = i403[4]
  i402.exportedForWebGl2 = !!i403[5]
  i402.readDepth = !!i403[6]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'shader')
  i408.pass = i409[2]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i413 = data
  i412.name = i413[0]
  i412.type = i413[1]
  i412.value = new pc.Vec4( i413[2], i413[3], i413[4], i413[5] )
  i412.textureValue = i413[6]
  i412.shaderPropertyFlag = i413[7]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i415 = data
  i414.name = i415[0]
  request.r(i415[1], i415[2], 0, i414, 'texture')
  i414.aabb = i415[3]
  i414.vertices = i415[4]
  i414.triangles = i415[5]
  i414.textureRect = UnityEngine.Rect.MinMaxRect(i415[6], i415[7], i415[8], i415[9])
  i414.packedRect = UnityEngine.Rect.MinMaxRect(i415[10], i415[11], i415[12], i415[13])
  i414.border = new pc.Vec4( i415[14], i415[15], i415[16], i415[17] )
  i414.transparency = i415[18]
  i414.bounds = i415[19]
  i414.pixelsPerUnit = i415[20]
  i414.textureWidth = i415[21]
  i414.textureHeight = i415[22]
  i414.nativeSize = new pc.Vec2( i415[23], i415[24] )
  i414.pivot = new pc.Vec2( i415[25], i415[26] )
  i414.textureRectOffset = new pc.Vec2( i415[27], i415[28] )
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i417 = data
  var i419 = i417[0]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i419[i + 0]) );
  }
  i416.files = i418
  i416.componentToPrefabIds = i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i423 = data
  i422.path = i423[0]
  request.r(i423[1], i423[2], 0, i422, 'unityObject')
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i425 = data
  var i427 = i425[0]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i427[i + 0]) );
  }
  i424.scriptsExecutionOrder = i426
  var i429 = i425[1]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i429[i + 0]) );
  }
  i424.sortingLayers = i428
  var i431 = i425[2]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i431[i + 0]) );
  }
  i424.cullingLayers = i430
  i424.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i425[3], i424.timeSettings)
  i424.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i425[4], i424.physicsSettings)
  i424.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i425[5], i424.physics2DSettings)
  i424.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i425[6], i424.qualitySettings)
  i424.enableRealtimeShadows = !!i425[7]
  i424.enableAutoInstancing = !!i425[8]
  i424.enableStaticBatching = !!i425[9]
  i424.enableDynamicBatching = !!i425[10]
  i424.usePreservativeDynamicBatching = !!i425[11]
  i424.lightmapEncodingQuality = i425[12]
  i424.desiredColorSpace = i425[13]
  var i433 = i425[14]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( i433[i + 0] );
  }
  i424.allTags = i432
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i437 = data
  i436.name = i437[0]
  i436.value = i437[1]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i441 = data
  i440.id = i441[0]
  i440.name = i441[1]
  i440.value = i441[2]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i445 = data
  i444.id = i445[0]
  i444.name = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i447 = data
  i446.fixedDeltaTime = i447[0]
  i446.maximumDeltaTime = i447[1]
  i446.timeScale = i447[2]
  i446.maximumParticleTimestep = i447[3]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i449 = data
  i448.gravity = new pc.Vec3( i449[0], i449[1], i449[2] )
  i448.defaultSolverIterations = i449[3]
  i448.bounceThreshold = i449[4]
  i448.autoSyncTransforms = !!i449[5]
  i448.autoSimulation = !!i449[6]
  var i451 = i449[7]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i451[i + 0]) );
  }
  i448.collisionMatrix = i450
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i455 = data
  i454.enabled = !!i455[0]
  i454.layerId = i455[1]
  i454.otherLayerId = i455[2]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'material')
  i456.gravity = new pc.Vec2( i457[2], i457[3] )
  i456.positionIterations = i457[4]
  i456.velocityIterations = i457[5]
  i456.velocityThreshold = i457[6]
  i456.maxLinearCorrection = i457[7]
  i456.maxAngularCorrection = i457[8]
  i456.maxTranslationSpeed = i457[9]
  i456.maxRotationSpeed = i457[10]
  i456.baumgarteScale = i457[11]
  i456.baumgarteTOIScale = i457[12]
  i456.timeToSleep = i457[13]
  i456.linearSleepTolerance = i457[14]
  i456.angularSleepTolerance = i457[15]
  i456.defaultContactOffset = i457[16]
  i456.autoSimulation = !!i457[17]
  i456.queriesHitTriggers = !!i457[18]
  i456.queriesStartInColliders = !!i457[19]
  i456.callbacksOnDisable = !!i457[20]
  i456.reuseCollisionCallbacks = !!i457[21]
  i456.autoSyncTransforms = !!i457[22]
  var i459 = i457[23]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i459[i + 0]) );
  }
  i456.collisionMatrix = i458
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i463 = data
  i462.enabled = !!i463[0]
  i462.layerId = i463[1]
  i462.otherLayerId = i463[2]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i465 = data
  var i467 = i465[0]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i467[i + 0]) );
  }
  i464.qualityLevels = i466
  var i469 = i465[1]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( i469[i + 0] );
  }
  i464.names = i468
  i464.shadows = i465[2]
  i464.anisotropicFiltering = i465[3]
  i464.antiAliasing = i465[4]
  i464.lodBias = i465[5]
  i464.shadowCascades = i465[6]
  i464.shadowDistance = i465[7]
  i464.shadowmaskMode = i465[8]
  i464.shadowProjection = i465[9]
  i464.shadowResolution = i465[10]
  i464.softParticles = !!i465[11]
  i464.softVegetation = !!i465[12]
  i464.activeColorSpace = i465[13]
  i464.desiredColorSpace = i465[14]
  i464.masterTextureLimit = i465[15]
  i464.maxQueuedFrames = i465[16]
  i464.particleRaycastBudget = i465[17]
  i464.pixelLightCount = i465[18]
  i464.realtimeReflectionProbes = !!i465[19]
  i464.shadowCascade2Split = i465[20]
  i464.shadowCascade4Split = new pc.Vec3( i465[21], i465[22], i465[23] )
  i464.streamingMipmapsActive = !!i465[24]
  i464.vSyncCount = i465[25]
  i464.asyncUploadBufferSize = i465[26]
  i464.asyncUploadTimeSlice = i465[27]
  i464.billboardsFaceCameraPosition = !!i465[28]
  i464.shadowNearPlaneOffset = i465[29]
  i464.streamingMipmapsMemoryBudget = i465[30]
  i464.maximumLODLevel = i465[31]
  i464.streamingMipmapsAddAllCameras = !!i465[32]
  i464.streamingMipmapsMaxLevelReduction = i465[33]
  i464.streamingMipmapsRenderersPerFrame = i465[34]
  i464.resolutionScalingFixedDPIFactor = i465[35]
  i464.streamingMipmapsMaxFileIORequests = i465[36]
  i464.currentQualityLevel = i465[37]
  return i464
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"21":[22],"23":[22],"24":[22],"25":[22],"26":[22],"27":[22],"28":[29],"30":[5],"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[32],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[40],"48":[40],"49":[40],"50":[40],"51":[40],"52":[40],"53":[5],"54":[55],"56":[57],"58":[57],"14":[13],"59":[60],"61":[13],"62":[13],"17":[14],"12":[18,13],"63":[13],"16":[14],"64":[13],"65":[13],"66":[13],"67":[13],"68":[13],"69":[13],"70":[13],"71":[13],"72":[13],"73":[18,13],"74":[13],"75":[13],"76":[13],"77":[13],"78":[18,13],"79":[13],"80":[81],"82":[81],"83":[81],"84":[81],"85":[5],"86":[5],"87":[60],"88":[89],"90":[13],"91":[55,13],"92":[13,18],"93":[13],"94":[18,13],"95":[55],"96":[18,13],"97":[13],"98":[60]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexaTest.App.TutorialController","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","HexaTest.App.GameBootstrap","HexaTest.UI.TimerHudView","UnityEngine.Material","HexaTest.UI.PackshotView","UnityEngine.UI.Image","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Hexa_test";

Deserializers.lunaInitializationTime = "07/05/2026 15:51:26";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "ad627051dadef2449a943a8328274164";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1723";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4218";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Hexa-test";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "2ec88405-a8bd-47ba-b475-c7f820806f03";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

