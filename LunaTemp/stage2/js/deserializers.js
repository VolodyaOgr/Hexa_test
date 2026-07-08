var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i240 = root || request.c( 'UnityEngine.JointSpring' )
  var i241 = data
  i240.spring = i241[0]
  i240.damper = i241[1]
  i240.targetPosition = i241[2]
  return i240
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.JointMotor' )
  var i243 = data
  i242.m_TargetVelocity = i243[0]
  i242.m_Force = i243[1]
  i242.m_FreeSpin = i243[2]
  return i242
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.JointLimits' )
  var i245 = data
  i244.m_Min = i245[0]
  i244.m_Max = i245[1]
  i244.m_Bounciness = i245[2]
  i244.m_BounceMinVelocity = i245[3]
  i244.m_ContactDistance = i245[4]
  i244.minBounce = i245[5]
  i244.maxBounce = i245[6]
  return i244
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointDrive' )
  var i247 = data
  i246.m_PositionSpring = i247[0]
  i246.m_PositionDamper = i247[1]
  i246.m_MaximumForce = i247[2]
  i246.m_UseAcceleration = i247[3]
  return i246
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i249 = data
  i248.m_Spring = i249[0]
  i248.m_Damper = i249[1]
  return i248
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i251 = data
  i250.m_Limit = i251[0]
  i250.m_Bounciness = i251[1]
  i250.m_ContactDistance = i251[2]
  return i250
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i253 = data
  i252.m_ExtremumSlip = i253[0]
  i252.m_ExtremumValue = i253[1]
  i252.m_AsymptoteSlip = i253[2]
  i252.m_AsymptoteValue = i253[3]
  i252.m_Stiffness = i253[4]
  return i252
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i255 = data
  i254.m_LowerAngle = i255[0]
  i254.m_UpperAngle = i255[1]
  return i254
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i257 = data
  i256.m_MotorSpeed = i257[0]
  i256.m_MaximumMotorTorque = i257[1]
  return i256
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i259 = data
  i258.m_DampingRatio = i259[0]
  i258.m_Frequency = i259[1]
  i258.m_Angle = i259[2]
  return i258
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i261 = data
  i260.m_LowerTranslation = i261[0]
  i260.m_UpperTranslation = i261[1]
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i263 = data
  i262.name = i263[0]
  i262.width = i263[1]
  i262.height = i263[2]
  i262.mipmapCount = i263[3]
  i262.anisoLevel = i263[4]
  i262.filterMode = i263[5]
  i262.hdr = !!i263[6]
  i262.format = i263[7]
  i262.wrapMode = i263[8]
  i262.alphaIsTransparency = !!i263[9]
  i262.alphaSource = i263[10]
  i262.graphicsFormat = i263[11]
  i262.sRGBTexture = !!i263[12]
  i262.desiredColorSpace = i263[13]
  i262.wrapU = i263[14]
  i262.wrapV = i263[15]
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i264 = root || new pc.UnityMaterial()
  var i265 = data
  i264.name = i265[0]
  request.r(i265[1], i265[2], 0, i264, 'shader')
  i264.renderQueue = i265[3]
  i264.enableInstancing = !!i265[4]
  var i267 = i265[5]
  var i266 = []
  for(var i = 0; i < i267.length; i += 1) {
    i266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i267[i + 0]) );
  }
  i264.floatParameters = i266
  var i269 = i265[6]
  var i268 = []
  for(var i = 0; i < i269.length; i += 1) {
    i268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i269[i + 0]) );
  }
  i264.colorParameters = i268
  var i271 = i265[7]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i271[i + 0]) );
  }
  i264.vectorParameters = i270
  var i273 = i265[8]
  var i272 = []
  for(var i = 0; i < i273.length; i += 1) {
    i272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i273[i + 0]) );
  }
  i264.textureParameters = i272
  var i275 = i265[9]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i275[i + 0]) );
  }
  i264.materialFlags = i274
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i279 = data
  i278.name = i279[0]
  i278.value = i279[1]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = new pc.Color(i283[1], i283[2], i283[3], i283[4])
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i287 = data
  i286.name = i287[0]
  i286.value = new pc.Vec4( i287[1], i287[2], i287[3], i287[4] )
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i291 = data
  i290.name = i291[0]
  request.r(i291[1], i291[2], 0, i290, 'value')
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i295 = data
  i294.name = i295[0]
  i294.enabled = !!i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i297 = data
  i296.position = new pc.Vec3( i297[0], i297[1], i297[2] )
  i296.scale = new pc.Vec3( i297[3], i297[4], i297[5] )
  i296.rotation = new pc.Quat(i297[6], i297[7], i297[8], i297[9])
  return i296
}

Deserializers["HexaTest.App.TutorialController"] = function (request, data, root) {
  var i298 = root || request.c( 'HexaTest.App.TutorialController' )
  var i299 = data
  request.r(i299[0], i299[1], 0, i298, 'baseSprite')
  request.r(i299[2], i299[3], 0, i298, 'pressSprite')
  i298.idleDelay = i299[4]
  i298.handWorldHeight = i299[5]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i301 = data
  i300.name = i301[0]
  i300.tagId = i301[1]
  i300.enabled = !!i301[2]
  i300.isStatic = !!i301[3]
  i300.layer = i301[4]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i303 = data
  i302.name = i303[0]
  i302.atlasId = i303[1]
  i302.mipmapCount = i303[2]
  i302.hdr = !!i303[3]
  i302.size = i303[4]
  i302.anisoLevel = i303[5]
  i302.filterMode = i303[6]
  var i305 = i303[7]
  var i304 = []
  for(var i = 0; i < i305.length; i += 4) {
    i304.push( UnityEngine.Rect.MinMaxRect(i305[i + 0], i305[i + 1], i305[i + 2], i305[i + 3]) );
  }
  i302.rects = i304
  i302.wrapU = i303[8]
  i302.wrapV = i303[9]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i309 = data
  i308.name = i309[0]
  i308.index = i309[1]
  i308.startup = !!i309[2]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i311 = data
  i310.aspect = i311[0]
  i310.orthographic = !!i311[1]
  i310.orthographicSize = i311[2]
  i310.backgroundColor = new pc.Color(i311[3], i311[4], i311[5], i311[6])
  i310.nearClipPlane = i311[7]
  i310.farClipPlane = i311[8]
  i310.fieldOfView = i311[9]
  i310.depth = i311[10]
  i310.clearFlags = i311[11]
  i310.cullingMask = i311[12]
  i310.rect = i311[13]
  request.r(i311[14], i311[15], 0, i310, 'targetTexture')
  i310.usePhysicalProperties = !!i311[16]
  i310.focalLength = i311[17]
  i310.sensorSize = new pc.Vec2( i311[18], i311[19] )
  i310.lensShift = new pc.Vec2( i311[20], i311[21] )
  i310.gateFit = i311[22]
  i310.commandBufferCount = i311[23]
  i310.cameraType = i311[24]
  i310.enabled = !!i311[25]
  return i310
}

Deserializers["HexaTest.View.CameraAspectFitter"] = function (request, data, root) {
  var i312 = root || request.c( 'HexaTest.View.CameraAspectFitter' )
  var i313 = data
  i312.referenceAspect = i313[0]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i315 = data
  i314.type = i315[0]
  i314.color = new pc.Color(i315[1], i315[2], i315[3], i315[4])
  i314.cullingMask = i315[5]
  i314.intensity = i315[6]
  i314.range = i315[7]
  i314.spotAngle = i315[8]
  i314.shadows = i315[9]
  i314.shadowNormalBias = i315[10]
  i314.shadowBias = i315[11]
  i314.shadowStrength = i315[12]
  i314.shadowResolution = i315[13]
  i314.lightmapBakeType = i315[14]
  i314.renderMode = i315[15]
  request.r(i315[16], i315[17], 0, i314, 'cookie')
  i314.cookieSize = i315[18]
  i314.shadowNearPlane = i315[19]
  i314.occlusionMaskChannel = i315[20]
  i314.isBaked = !!i315[21]
  i314.mixedLightingMode = i315[22]
  i314.enabled = !!i315[23]
  return i314
}

Deserializers["HexaTest.App.GameBootstrap"] = function (request, data, root) {
  var i316 = root || request.c( 'HexaTest.App.GameBootstrap' )
  var i317 = data
  i316.config = request.d('HexaTest.Config.GameConfig', i317[0], i316.config)
  i316.seededCells = i317[1]
  request.r(i317[2], i317[3], 0, i316, 'hud')
  request.r(i317[4], i317[5], 0, i316, 'tutorial')
  request.r(i317[6], i317[7], 0, i316, 'hexBaseMaterial')
  request.r(i317[8], i317[9], 0, i316, 'packshot')
  request.r(i317[10], i317[11], 0, i316, 'backgroundSprite')
  request.r(i317[12], i317[13], 0, i316, 'backgroundMaterial')
  request.r(i317[14], i317[15], 0, i316, 'shadowGroundMaterial')
  return i316
}

Deserializers["HexaTest.Config.GameConfig"] = function (request, data, root) {
  var i318 = root || request.c( 'HexaTest.Config.GameConfig' )
  var i319 = data
  i318.boardRadius = i319[0]
  i318.cellSize = i319[1]
  i318.discFill = i319[2]
  i318.discThickness = i319[3]
  i318.discSpacing = i319[4]
  i318.discSeparatorThickness = i319[5]
  i318.discSeparatorDarken = i319[6]
  i318.discRound = i319[7]
  i318.cornerSegments = i319[8]
  i318.clearCount = i319[9]
  i318.tileInset = i319[10]
  i318.tileThickness = i319[11]
  i318.tileRound = i319[12]
  i318.tileRaise = i319[13]
  i318.baseRound = i319[14]
  i318.baseLayerThickness = i319[15]
  i318.edgeRim = i319[16]
  var i321 = i319[17]
  var i320 = []
  for(var i = 0; i < i321.length; i += 4) {
    i320.push( new pc.Color(i321[i + 0], i321[i + 1], i321[i + 2], i321[i + 3]) );
  }
  i318.baseLayerColors = i320
  i318.snapDistance = i319[18]
  i318.dragLift = i319[19]
  i318.magnetSpeed = i319[20]
  i318.trayDistance = i319[21]
  i318.traySpacing = i319[22]
  i318.flipDuration = i319[23]
  i318.flipStagger = i319[24]
  i318.maxConcurrentFlips = i319[25]
  i318.clearDuration = i319[26]
  i318.discInterval = i319[27]
  i318.speedRamp = i319[28]
  i318.maxSpeed = i319[29]
  i318.tileColor = new pc.Color(i319[30], i319[31], i319[32], i319[33])
  var i323 = i319[34]
  var i322 = []
  for(var i = 0; i < i323.length; i += 4) {
    i322.push( new pc.Color(i323[i + 0], i323[i + 1], i323[i + 2], i323[i + 3]) );
  }
  i318.palette = i322
  return i318
}

Deserializers["HexaTest.UI.PackshotView"] = function (request, data, root) {
  var i326 = root || request.c( 'HexaTest.UI.PackshotView' )
  var i327 = data
  request.r(i327[0], i327[1], 0, i326, 'background')
  request.r(i327[2], i327[3], 0, i326, 'logo')
  request.r(i327[4], i327[5], 0, i326, 'playNow')
  i326.revealStartSize = i327[6]
  i326.revealEndPadding = i327[7]
  i326.revealDuration = i327[8]
  i326.logoAnchoredPosition = new pc.Vec2( i327[9], i327[10] )
  i326.logoSize = new pc.Vec2( i327[11], i327[12] )
  i326.playNowAnchoredPosition = new pc.Vec2( i327[13], i327[14] )
  i326.playNowSize = new pc.Vec2( i327[15], i327[16] )
  return i326
}

Deserializers["HexaTest.UI.TimerHudView"] = function (request, data, root) {
  var i328 = root || request.c( 'HexaTest.UI.TimerHudView' )
  var i329 = data
  i328.duration = i329[0]
  i328.alarmThreshold = i329[1]
  i328.alarmPulseScaleUpDuration = i329[2]
  i328.alarmPulseScaleDownDuration = i329[3]
  i328.alarmPulseInterval = i329[4]
  i328.alarmPulseScale = i329[5]
  i328.alarmPulseScaleStep = i329[6]
  i328.alarmPulseMaxScale = i329[7]
  i328.endThrowDuration = i329[8]
  i328.endThrowSettleDuration = i329[9]
  i328.endThrowVerticalAmplitude = i329[10]
  i328.endThrowHorizontalAmplitude = i329[11]
  i328.endThrowFrequency = i329[12]
  i328.fillGradient = i329[13] ? new pc.ColorGradient(i329[13][0], i329[13][1], i329[13][2]) : null
  i328.trackAlarmColor = new pc.Color(i329[14], i329[15], i329[16], i329[17])
  request.r(i329[18], i329[19], 0, i328, 'alphaTintMaterial')
  request.r(i329[20], i329[21], 0, i328, 'fillImage')
  request.r(i329[22], i329[23], 0, i328, 'fillMaskRect')
  request.r(i329[24], i329[25], 0, i328, 'trackImage')
  request.r(i329[26], i329[27], 0, i328, 'timerBgImage')
  request.r(i329[28], i329[29], 0, i328, 'timerNippleImage')
  request.r(i329[30], i329[31], 0, i328, 'watchRect')
  request.r(i329[32], i329[33], 0, i328, 'timerRootRect')
  request.r(i329[34], i329[35], 0, i328, 'watchImage')
  request.r(i329[36], i329[37], 0, i328, 'needleRect')
  request.r(i329[38], i329[39], 0, i328, 'radialImage')
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i331 = data
  i330.pivot = new pc.Vec2( i331[0], i331[1] )
  i330.anchorMin = new pc.Vec2( i331[2], i331[3] )
  i330.anchorMax = new pc.Vec2( i331[4], i331[5] )
  i330.sizeDelta = new pc.Vec2( i331[6], i331[7] )
  i330.anchoredPosition3D = new pc.Vec3( i331[8], i331[9], i331[10] )
  i330.rotation = new pc.Quat(i331[11], i331[12], i331[13], i331[14])
  i330.scale = new pc.Vec3( i331[15], i331[16], i331[17] )
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i333 = data
  i332.planeDistance = i333[0]
  i332.referencePixelsPerUnit = i333[1]
  i332.isFallbackOverlay = !!i333[2]
  i332.renderMode = i333[3]
  i332.renderOrder = i333[4]
  i332.sortingLayerName = i333[5]
  i332.sortingOrder = i333[6]
  i332.scaleFactor = i333[7]
  request.r(i333[8], i333[9], 0, i332, 'worldCamera')
  i332.overrideSorting = !!i333[10]
  i332.pixelPerfect = !!i333[11]
  i332.targetDisplay = i333[12]
  i332.overridePixelPerfect = !!i333[13]
  i332.enabled = !!i333[14]
  return i332
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i335 = data
  i334.m_UiScaleMode = i335[0]
  i334.m_ReferencePixelsPerUnit = i335[1]
  i334.m_ScaleFactor = i335[2]
  i334.m_ReferenceResolution = new pc.Vec2( i335[3], i335[4] )
  i334.m_ScreenMatchMode = i335[5]
  i334.m_MatchWidthOrHeight = i335[6]
  i334.m_PhysicalUnit = i335[7]
  i334.m_FallbackScreenDPI = i335[8]
  i334.m_DefaultSpriteDPI = i335[9]
  i334.m_DynamicPixelsPerUnit = i335[10]
  i334.m_PresetInfoIsWorld = !!i335[11]
  return i334
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i337 = data
  i336.m_IgnoreReversedGraphics = !!i337[0]
  i336.m_BlockingObjects = i337[1]
  i336.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i337[2] )
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i339 = data
  i338.cullTransparentMesh = !!i339[0]
  return i338
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.UI.Image' )
  var i341 = data
  request.r(i341[0], i341[1], 0, i340, 'm_Sprite')
  i340.m_Type = i341[2]
  i340.m_PreserveAspect = !!i341[3]
  i340.m_FillCenter = !!i341[4]
  i340.m_FillMethod = i341[5]
  i340.m_FillAmount = i341[6]
  i340.m_FillClockwise = !!i341[7]
  i340.m_FillOrigin = i341[8]
  i340.m_UseSpriteMesh = !!i341[9]
  i340.m_PixelsPerUnitMultiplier = i341[10]
  request.r(i341[11], i341[12], 0, i340, 'm_Material')
  i340.m_Maskable = !!i341[13]
  i340.m_Color = new pc.Color(i341[14], i341[15], i341[16], i341[17])
  i340.m_RaycastTarget = !!i341[18]
  i340.m_RaycastPadding = new pc.Vec4( i341[19], i341[20], i341[21], i341[22] )
  return i340
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i343 = data
  i342.m_Padding = new pc.Vec4( i343[0], i343[1], i343[2], i343[3] )
  i342.m_Softness = new pc.Vec2( i343[4], i343[5] )
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i345 = data
  i344.ambientIntensity = i345[0]
  i344.reflectionIntensity = i345[1]
  i344.ambientMode = i345[2]
  i344.ambientLight = new pc.Color(i345[3], i345[4], i345[5], i345[6])
  i344.ambientSkyColor = new pc.Color(i345[7], i345[8], i345[9], i345[10])
  i344.ambientGroundColor = new pc.Color(i345[11], i345[12], i345[13], i345[14])
  i344.ambientEquatorColor = new pc.Color(i345[15], i345[16], i345[17], i345[18])
  i344.fogColor = new pc.Color(i345[19], i345[20], i345[21], i345[22])
  i344.fogEndDistance = i345[23]
  i344.fogStartDistance = i345[24]
  i344.fogDensity = i345[25]
  i344.fog = !!i345[26]
  request.r(i345[27], i345[28], 0, i344, 'skybox')
  i344.fogMode = i345[29]
  var i347 = i345[30]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i347[i + 0]) );
  }
  i344.lightmaps = i346
  i344.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i345[31], i344.lightProbes)
  i344.lightmapsMode = i345[32]
  i344.mixedBakeMode = i345[33]
  i344.environmentLightingMode = i345[34]
  i344.ambientProbe = new pc.SphericalHarmonicsL2(i345[35])
  request.r(i345[36], i345[37], 0, i344, 'customReflection')
  request.r(i345[38], i345[39], 0, i344, 'defaultReflection')
  i344.defaultReflectionMode = i345[40]
  i344.defaultReflectionResolution = i345[41]
  i344.sunLightObjectId = i345[42]
  i344.pixelLightCount = i345[43]
  i344.defaultReflectionHDR = !!i345[44]
  i344.hasLightDataAsset = !!i345[45]
  i344.hasManualGenerate = !!i345[46]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'lightmapColor')
  request.r(i351[2], i351[3], 0, i350, 'lightmapDirection')
  request.r(i351[4], i351[5], 0, i350, 'shadowMask')
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i352 = root || new UnityEngine.LightProbes()
  var i353 = data
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i361 = data
  var i363 = i361[0]
  var i362 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i363.length; i += 1) {
    i362.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i363[i + 0]));
  }
  i360.ShaderCompilationErrors = i362
  i360.name = i361[1]
  i360.guid = i361[2]
  var i365 = i361[3]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( i365[i + 0] );
  }
  i360.shaderDefinedKeywords = i364
  var i367 = i361[4]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i367[i + 0]) );
  }
  i360.passes = i366
  var i369 = i361[5]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i369[i + 0]) );
  }
  i360.usePasses = i368
  var i371 = i361[6]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i371[i + 0]) );
  }
  i360.defaultParameterValues = i370
  request.r(i361[7], i361[8], 0, i360, 'unityFallbackShader')
  i360.readDepth = !!i361[9]
  i360.hasDepthOnlyPass = !!i361[10]
  i360.isCreatedByShaderGraph = !!i361[11]
  i360.disableBatching = !!i361[12]
  i360.compiled = !!i361[13]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i375 = data
  i374.shaderName = i375[0]
  i374.errorMessage = i375[1]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i380 = root || new pc.UnityShaderPass()
  var i381 = data
  i380.id = i381[0]
  i380.subShaderIndex = i381[1]
  i380.name = i381[2]
  i380.passType = i381[3]
  i380.grabPassTextureName = i381[4]
  i380.usePass = !!i381[5]
  i380.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[6], i380.zTest)
  i380.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[7], i380.zWrite)
  i380.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[8], i380.culling)
  i380.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i381[9], i380.blending)
  i380.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i381[10], i380.alphaBlending)
  i380.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[11], i380.colorWriteMask)
  i380.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[12], i380.offsetUnits)
  i380.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[13], i380.offsetFactor)
  i380.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[14], i380.stencilRef)
  i380.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[15], i380.stencilReadMask)
  i380.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[16], i380.stencilWriteMask)
  i380.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i381[17], i380.stencilOp)
  i380.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i381[18], i380.stencilOpFront)
  i380.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i381[19], i380.stencilOpBack)
  var i383 = i381[20]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i383[i + 0]) );
  }
  i380.tags = i382
  var i385 = i381[21]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( i385[i + 0] );
  }
  i380.passDefinedKeywords = i384
  var i387 = i381[22]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i387[i + 0]) );
  }
  i380.passDefinedKeywordGroups = i386
  var i389 = i381[23]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i389[i + 0]) );
  }
  i380.variants = i388
  var i391 = i381[24]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i391[i + 0]) );
  }
  i380.excludedVariants = i390
  i380.hasDepthReader = !!i381[25]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i393 = data
  i392.val = i393[0]
  i392.name = i393[1]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i395 = data
  i394.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[0], i394.src)
  i394.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[1], i394.dst)
  i394.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[2], i394.op)
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i397 = data
  i396.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[0], i396.pass)
  i396.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[1], i396.fail)
  i396.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[2], i396.zFail)
  i396.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[3], i396.comp)
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i401 = data
  i400.name = i401[0]
  i400.value = i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i405 = data
  var i407 = i405[0]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( i407[i + 0] );
  }
  i404.keywords = i406
  i404.hasDiscard = !!i405[1]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i411 = data
  i410.passId = i411[0]
  i410.subShaderIndex = i411[1]
  var i413 = i411[2]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( i413[i + 0] );
  }
  i410.keywords = i412
  i410.vertexProgram = i411[3]
  i410.fragmentProgram = i411[4]
  i410.exportedForWebGl2 = !!i411[5]
  i410.readDepth = !!i411[6]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'shader')
  i416.pass = i417[2]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i421 = data
  i420.name = i421[0]
  i420.type = i421[1]
  i420.value = new pc.Vec4( i421[2], i421[3], i421[4], i421[5] )
  i420.textureValue = i421[6]
  i420.shaderPropertyFlag = i421[7]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i423 = data
  i422.name = i423[0]
  request.r(i423[1], i423[2], 0, i422, 'texture')
  i422.aabb = i423[3]
  i422.vertices = i423[4]
  i422.triangles = i423[5]
  i422.textureRect = UnityEngine.Rect.MinMaxRect(i423[6], i423[7], i423[8], i423[9])
  i422.packedRect = UnityEngine.Rect.MinMaxRect(i423[10], i423[11], i423[12], i423[13])
  i422.border = new pc.Vec4( i423[14], i423[15], i423[16], i423[17] )
  i422.transparency = i423[18]
  i422.bounds = i423[19]
  i422.pixelsPerUnit = i423[20]
  i422.textureWidth = i423[21]
  i422.textureHeight = i423[22]
  i422.nativeSize = new pc.Vec2( i423[23], i423[24] )
  i422.pivot = new pc.Vec2( i423[25], i423[26] )
  i422.textureRectOffset = new pc.Vec2( i423[27], i423[28] )
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i425 = data
  var i427 = i425[0]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i427[i + 0]) );
  }
  i424.files = i426
  i424.componentToPrefabIds = i425[1]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i431 = data
  i430.path = i431[0]
  request.r(i431[1], i431[2], 0, i430, 'unityObject')
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i433 = data
  var i435 = i433[0]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i435[i + 0]) );
  }
  i432.scriptsExecutionOrder = i434
  var i437 = i433[1]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i437[i + 0]) );
  }
  i432.sortingLayers = i436
  var i439 = i433[2]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i439[i + 0]) );
  }
  i432.cullingLayers = i438
  i432.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i433[3], i432.timeSettings)
  i432.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i433[4], i432.physicsSettings)
  i432.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i433[5], i432.physics2DSettings)
  i432.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i433[6], i432.qualitySettings)
  i432.enableRealtimeShadows = !!i433[7]
  i432.enableAutoInstancing = !!i433[8]
  i432.enableStaticBatching = !!i433[9]
  i432.enableDynamicBatching = !!i433[10]
  i432.usePreservativeDynamicBatching = !!i433[11]
  i432.lightmapEncodingQuality = i433[12]
  i432.desiredColorSpace = i433[13]
  var i441 = i433[14]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( i441[i + 0] );
  }
  i432.allTags = i440
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i445 = data
  i444.name = i445[0]
  i444.value = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i449 = data
  i448.id = i449[0]
  i448.name = i449[1]
  i448.value = i449[2]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i453 = data
  i452.id = i453[0]
  i452.name = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i455 = data
  i454.fixedDeltaTime = i455[0]
  i454.maximumDeltaTime = i455[1]
  i454.timeScale = i455[2]
  i454.maximumParticleTimestep = i455[3]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i457 = data
  i456.gravity = new pc.Vec3( i457[0], i457[1], i457[2] )
  i456.defaultSolverIterations = i457[3]
  i456.bounceThreshold = i457[4]
  i456.autoSyncTransforms = !!i457[5]
  i456.autoSimulation = !!i457[6]
  var i459 = i457[7]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i459[i + 0]) );
  }
  i456.collisionMatrix = i458
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i463 = data
  i462.enabled = !!i463[0]
  i462.layerId = i463[1]
  i462.otherLayerId = i463[2]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i465 = data
  request.r(i465[0], i465[1], 0, i464, 'material')
  i464.gravity = new pc.Vec2( i465[2], i465[3] )
  i464.positionIterations = i465[4]
  i464.velocityIterations = i465[5]
  i464.velocityThreshold = i465[6]
  i464.maxLinearCorrection = i465[7]
  i464.maxAngularCorrection = i465[8]
  i464.maxTranslationSpeed = i465[9]
  i464.maxRotationSpeed = i465[10]
  i464.baumgarteScale = i465[11]
  i464.baumgarteTOIScale = i465[12]
  i464.timeToSleep = i465[13]
  i464.linearSleepTolerance = i465[14]
  i464.angularSleepTolerance = i465[15]
  i464.defaultContactOffset = i465[16]
  i464.autoSimulation = !!i465[17]
  i464.queriesHitTriggers = !!i465[18]
  i464.queriesStartInColliders = !!i465[19]
  i464.callbacksOnDisable = !!i465[20]
  i464.reuseCollisionCallbacks = !!i465[21]
  i464.autoSyncTransforms = !!i465[22]
  var i467 = i465[23]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i467[i + 0]) );
  }
  i464.collisionMatrix = i466
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i471 = data
  i470.enabled = !!i471[0]
  i470.layerId = i471[1]
  i470.otherLayerId = i471[2]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i473 = data
  var i475 = i473[0]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i475[i + 0]) );
  }
  i472.qualityLevels = i474
  var i477 = i473[1]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( i477[i + 0] );
  }
  i472.names = i476
  i472.shadows = i473[2]
  i472.anisotropicFiltering = i473[3]
  i472.antiAliasing = i473[4]
  i472.lodBias = i473[5]
  i472.shadowCascades = i473[6]
  i472.shadowDistance = i473[7]
  i472.shadowmaskMode = i473[8]
  i472.shadowProjection = i473[9]
  i472.shadowResolution = i473[10]
  i472.softParticles = !!i473[11]
  i472.softVegetation = !!i473[12]
  i472.activeColorSpace = i473[13]
  i472.desiredColorSpace = i473[14]
  i472.masterTextureLimit = i473[15]
  i472.maxQueuedFrames = i473[16]
  i472.particleRaycastBudget = i473[17]
  i472.pixelLightCount = i473[18]
  i472.realtimeReflectionProbes = !!i473[19]
  i472.shadowCascade2Split = i473[20]
  i472.shadowCascade4Split = new pc.Vec3( i473[21], i473[22], i473[23] )
  i472.streamingMipmapsActive = !!i473[24]
  i472.vSyncCount = i473[25]
  i472.asyncUploadBufferSize = i473[26]
  i472.asyncUploadTimeSlice = i473[27]
  i472.billboardsFaceCameraPosition = !!i473[28]
  i472.shadowNearPlaneOffset = i473[29]
  i472.streamingMipmapsMemoryBudget = i473[30]
  i472.maximumLODLevel = i473[31]
  i472.streamingMipmapsAddAllCameras = !!i473[32]
  i472.streamingMipmapsMaxLevelReduction = i473[33]
  i472.streamingMipmapsRenderersPerFrame = i473[34]
  i472.resolutionScalingFixedDPIFactor = i473[35]
  i472.streamingMipmapsMaxFileIORequests = i473[36]
  i472.currentQualityLevel = i473[37]
  return i472
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"23":[24],"25":[24],"26":[24],"27":[24],"28":[24],"29":[24],"30":[31],"32":[5],"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[34],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[42],"50":[42],"51":[42],"52":[42],"53":[42],"54":[42],"55":[5],"56":[57],"58":[59],"60":[59],"15":[14],"7":[5],"61":[62],"63":[14],"64":[14],"18":[15],"13":[19,14],"65":[14],"17":[15],"66":[14],"67":[14],"68":[14],"69":[14],"70":[14],"71":[14],"72":[14],"73":[14],"74":[14],"75":[19,14],"20":[14],"76":[14],"77":[14],"78":[14],"79":[19,14],"80":[14],"81":[82],"83":[82],"84":[82],"85":[82],"86":[5],"87":[5],"88":[62],"89":[90],"91":[14],"92":[57,14],"93":[14,19],"94":[14],"95":[19,14],"96":[57],"97":[19,14],"98":[14],"99":[62]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexaTest.App.TutorialController","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","HexaTest.View.CameraAspectFitter","UnityEngine.Light","HexaTest.App.GameBootstrap","HexaTest.UI.TimerHudView","UnityEngine.Material","HexaTest.UI.PackshotView","UnityEngine.UI.Image","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RectMask2D","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Hexa_test";

Deserializers.lunaInitializationTime = "07/05/2026 15:51:26";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "test";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1717";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4214";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Hexa-test";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "316ff835-b507-45e3-8a98-a17a125daa39";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

