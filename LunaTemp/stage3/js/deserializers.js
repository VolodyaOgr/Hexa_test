var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointSpring' )
  var i721 = data
  i720.spring = i721[0]
  i720.damper = i721[1]
  i720.targetPosition = i721[2]
  return i720
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointMotor' )
  var i723 = data
  i722.m_TargetVelocity = i723[0]
  i722.m_Force = i723[1]
  i722.m_FreeSpin = i723[2]
  return i722
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointLimits' )
  var i725 = data
  i724.m_Min = i725[0]
  i724.m_Max = i725[1]
  i724.m_Bounciness = i725[2]
  i724.m_BounceMinVelocity = i725[3]
  i724.m_ContactDistance = i725[4]
  i724.minBounce = i725[5]
  i724.maxBounce = i725[6]
  return i724
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointDrive' )
  var i727 = data
  i726.m_PositionSpring = i727[0]
  i726.m_PositionDamper = i727[1]
  i726.m_MaximumForce = i727[2]
  i726.m_UseAcceleration = i727[3]
  return i726
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i729 = data
  i728.m_Spring = i729[0]
  i728.m_Damper = i729[1]
  return i728
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i731 = data
  i730.m_Limit = i731[0]
  i730.m_Bounciness = i731[1]
  i730.m_ContactDistance = i731[2]
  return i730
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i733 = data
  i732.m_ExtremumSlip = i733[0]
  i732.m_ExtremumValue = i733[1]
  i732.m_AsymptoteSlip = i733[2]
  i732.m_AsymptoteValue = i733[3]
  i732.m_Stiffness = i733[4]
  return i732
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i735 = data
  i734.m_LowerAngle = i735[0]
  i734.m_UpperAngle = i735[1]
  return i734
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i737 = data
  i736.m_MotorSpeed = i737[0]
  i736.m_MaximumMotorTorque = i737[1]
  return i736
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i739 = data
  i738.m_DampingRatio = i739[0]
  i738.m_Frequency = i739[1]
  i738.m_Angle = i739[2]
  return i738
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i741 = data
  i740.m_LowerTranslation = i741[0]
  i740.m_UpperTranslation = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i743 = data
  i742.name = i743[0]
  i742.width = i743[1]
  i742.height = i743[2]
  i742.mipmapCount = i743[3]
  i742.anisoLevel = i743[4]
  i742.filterMode = i743[5]
  i742.hdr = !!i743[6]
  i742.format = i743[7]
  i742.wrapMode = i743[8]
  i742.alphaIsTransparency = !!i743[9]
  i742.alphaSource = i743[10]
  i742.graphicsFormat = i743[11]
  i742.sRGBTexture = !!i743[12]
  i742.desiredColorSpace = i743[13]
  i742.wrapU = i743[14]
  i742.wrapV = i743[15]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i744 = root || new pc.UnityMaterial()
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'shader')
  i744.renderQueue = i745[3]
  i744.enableInstancing = !!i745[4]
  var i747 = i745[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i747[i + 0]) );
  }
  i744.floatParameters = i746
  var i749 = i745[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i749[i + 0]) );
  }
  i744.colorParameters = i748
  var i751 = i745[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i751[i + 0]) );
  }
  i744.vectorParameters = i750
  var i753 = i745[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i753[i + 0]) );
  }
  i744.textureParameters = i752
  var i755 = i745[9]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i755[i + 0]) );
  }
  i744.materialFlags = i754
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Color(i763[1], i763[2], i763[3], i763[4])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = new pc.Vec4( i767[1], i767[2], i767[3], i767[4] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'value')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i775 = data
  i774.name = i775[0]
  i774.enabled = !!i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i777 = data
  i776.position = new pc.Vec3( i777[0], i777[1], i777[2] )
  i776.scale = new pc.Vec3( i777[3], i777[4], i777[5] )
  i776.rotation = new pc.Quat(i777[6], i777[7], i777[8], i777[9])
  return i776
}

Deserializers["HexaTest.App.TutorialController"] = function (request, data, root) {
  var i778 = root || request.c( 'HexaTest.App.TutorialController' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'baseSprite')
  request.r(i779[2], i779[3], 0, i778, 'pressSprite')
  i778.idleDelay = i779[4]
  i778.handWorldHeight = i779[5]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i781 = data
  i780.name = i781[0]
  i780.tagId = i781[1]
  i780.enabled = !!i781[2]
  i780.isStatic = !!i781[3]
  i780.layer = i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i783 = data
  i782.name = i783[0]
  i782.atlasId = i783[1]
  i782.mipmapCount = i783[2]
  i782.hdr = !!i783[3]
  i782.size = i783[4]
  i782.anisoLevel = i783[5]
  i782.filterMode = i783[6]
  var i785 = i783[7]
  var i784 = []
  for(var i = 0; i < i785.length; i += 4) {
    i784.push( UnityEngine.Rect.MinMaxRect(i785[i + 0], i785[i + 1], i785[i + 2], i785[i + 3]) );
  }
  i782.rects = i784
  i782.wrapU = i783[8]
  i782.wrapV = i783[9]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i789 = data
  i788.name = i789[0]
  i788.index = i789[1]
  i788.startup = !!i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i791 = data
  i790.aspect = i791[0]
  i790.orthographic = !!i791[1]
  i790.orthographicSize = i791[2]
  i790.backgroundColor = new pc.Color(i791[3], i791[4], i791[5], i791[6])
  i790.nearClipPlane = i791[7]
  i790.farClipPlane = i791[8]
  i790.fieldOfView = i791[9]
  i790.depth = i791[10]
  i790.clearFlags = i791[11]
  i790.cullingMask = i791[12]
  i790.rect = i791[13]
  request.r(i791[14], i791[15], 0, i790, 'targetTexture')
  i790.usePhysicalProperties = !!i791[16]
  i790.focalLength = i791[17]
  i790.sensorSize = new pc.Vec2( i791[18], i791[19] )
  i790.lensShift = new pc.Vec2( i791[20], i791[21] )
  i790.gateFit = i791[22]
  i790.commandBufferCount = i791[23]
  i790.cameraType = i791[24]
  i790.enabled = !!i791[25]
  return i790
}

Deserializers["HexaTest.View.CameraAspectFitter"] = function (request, data, root) {
  var i792 = root || request.c( 'HexaTest.View.CameraAspectFitter' )
  var i793 = data
  i792.referenceAspect = i793[0]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i795 = data
  i794.type = i795[0]
  i794.color = new pc.Color(i795[1], i795[2], i795[3], i795[4])
  i794.cullingMask = i795[5]
  i794.intensity = i795[6]
  i794.range = i795[7]
  i794.spotAngle = i795[8]
  i794.shadows = i795[9]
  i794.shadowNormalBias = i795[10]
  i794.shadowBias = i795[11]
  i794.shadowStrength = i795[12]
  i794.shadowResolution = i795[13]
  i794.lightmapBakeType = i795[14]
  i794.renderMode = i795[15]
  request.r(i795[16], i795[17], 0, i794, 'cookie')
  i794.cookieSize = i795[18]
  i794.shadowNearPlane = i795[19]
  i794.occlusionMaskChannel = i795[20]
  i794.isBaked = !!i795[21]
  i794.mixedLightingMode = i795[22]
  i794.enabled = !!i795[23]
  return i794
}

Deserializers["HexaTest.App.GameBootstrap"] = function (request, data, root) {
  var i796 = root || request.c( 'HexaTest.App.GameBootstrap' )
  var i797 = data
  i796.config = request.d('HexaTest.Config.GameConfig', i797[0], i796.config)
  i796.seededCells = i797[1]
  request.r(i797[2], i797[3], 0, i796, 'hud')
  request.r(i797[4], i797[5], 0, i796, 'tutorial')
  request.r(i797[6], i797[7], 0, i796, 'hexBaseMaterial')
  request.r(i797[8], i797[9], 0, i796, 'packshot')
  request.r(i797[10], i797[11], 0, i796, 'backgroundSprite')
  request.r(i797[12], i797[13], 0, i796, 'backgroundMaterial')
  request.r(i797[14], i797[15], 0, i796, 'shadowGroundMaterial')
  return i796
}

Deserializers["HexaTest.Config.GameConfig"] = function (request, data, root) {
  var i798 = root || request.c( 'HexaTest.Config.GameConfig' )
  var i799 = data
  i798.boardRadius = i799[0]
  i798.cellSize = i799[1]
  i798.discFill = i799[2]
  i798.discThickness = i799[3]
  i798.discSpacing = i799[4]
  i798.discSeparatorThickness = i799[5]
  i798.discSeparatorDarken = i799[6]
  i798.discRound = i799[7]
  i798.cornerSegments = i799[8]
  i798.clearCount = i799[9]
  i798.tileInset = i799[10]
  i798.tileThickness = i799[11]
  i798.tileRound = i799[12]
  i798.tileRaise = i799[13]
  i798.baseRound = i799[14]
  i798.baseLayerThickness = i799[15]
  i798.edgeRim = i799[16]
  var i801 = i799[17]
  var i800 = []
  for(var i = 0; i < i801.length; i += 4) {
    i800.push( new pc.Color(i801[i + 0], i801[i + 1], i801[i + 2], i801[i + 3]) );
  }
  i798.baseLayerColors = i800
  i798.snapDistance = i799[18]
  i798.dragLift = i799[19]
  i798.magnetSpeed = i799[20]
  i798.trayDistance = i799[21]
  i798.traySpacing = i799[22]
  i798.flipDuration = i799[23]
  i798.flipStagger = i799[24]
  i798.maxConcurrentFlips = i799[25]
  i798.clearDuration = i799[26]
  i798.discInterval = i799[27]
  i798.speedRamp = i799[28]
  i798.maxSpeed = i799[29]
  i798.tileColor = new pc.Color(i799[30], i799[31], i799[32], i799[33])
  var i803 = i799[34]
  var i802 = []
  for(var i = 0; i < i803.length; i += 4) {
    i802.push( new pc.Color(i803[i + 0], i803[i + 1], i803[i + 2], i803[i + 3]) );
  }
  i798.palette = i802
  return i798
}

Deserializers["HexaTest.UI.PackshotView"] = function (request, data, root) {
  var i806 = root || request.c( 'HexaTest.UI.PackshotView' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'background')
  request.r(i807[2], i807[3], 0, i806, 'logo')
  request.r(i807[4], i807[5], 0, i806, 'playNow')
  i806.revealStartSize = i807[6]
  i806.revealEndPadding = i807[7]
  i806.revealDuration = i807[8]
  i806.logoAnchoredPosition = new pc.Vec2( i807[9], i807[10] )
  i806.logoSize = new pc.Vec2( i807[11], i807[12] )
  i806.playNowAnchoredPosition = new pc.Vec2( i807[13], i807[14] )
  i806.playNowSize = new pc.Vec2( i807[15], i807[16] )
  return i806
}

Deserializers["HexaTest.UI.TimerHudView"] = function (request, data, root) {
  var i808 = root || request.c( 'HexaTest.UI.TimerHudView' )
  var i809 = data
  i808.duration = i809[0]
  i808.alarmThreshold = i809[1]
  i808.alarmPulseScaleUpDuration = i809[2]
  i808.alarmPulseScaleDownDuration = i809[3]
  i808.alarmPulseInterval = i809[4]
  i808.alarmPulseScale = i809[5]
  i808.alarmPulseScaleStep = i809[6]
  i808.alarmPulseMaxScale = i809[7]
  i808.endThrowDuration = i809[8]
  i808.endThrowSettleDuration = i809[9]
  i808.endThrowVerticalAmplitude = i809[10]
  i808.endThrowHorizontalAmplitude = i809[11]
  i808.endThrowFrequency = i809[12]
  i808.fillGradient = i809[13] ? new pc.ColorGradient(i809[13][0], i809[13][1], i809[13][2]) : null
  i808.trackAlarmColor = new pc.Color(i809[14], i809[15], i809[16], i809[17])
  request.r(i809[18], i809[19], 0, i808, 'alphaTintMaterial')
  request.r(i809[20], i809[21], 0, i808, 'fillImage')
  request.r(i809[22], i809[23], 0, i808, 'fillMaskRect')
  request.r(i809[24], i809[25], 0, i808, 'trackImage')
  request.r(i809[26], i809[27], 0, i808, 'timerBgImage')
  request.r(i809[28], i809[29], 0, i808, 'timerNippleImage')
  request.r(i809[30], i809[31], 0, i808, 'watchRect')
  request.r(i809[32], i809[33], 0, i808, 'timerRootRect')
  request.r(i809[34], i809[35], 0, i808, 'watchImage')
  request.r(i809[36], i809[37], 0, i808, 'needleRect')
  request.r(i809[38], i809[39], 0, i808, 'radialImage')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i811 = data
  i810.pivot = new pc.Vec2( i811[0], i811[1] )
  i810.anchorMin = new pc.Vec2( i811[2], i811[3] )
  i810.anchorMax = new pc.Vec2( i811[4], i811[5] )
  i810.sizeDelta = new pc.Vec2( i811[6], i811[7] )
  i810.anchoredPosition3D = new pc.Vec3( i811[8], i811[9], i811[10] )
  i810.rotation = new pc.Quat(i811[11], i811[12], i811[13], i811[14])
  i810.scale = new pc.Vec3( i811[15], i811[16], i811[17] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i813 = data
  i812.planeDistance = i813[0]
  i812.referencePixelsPerUnit = i813[1]
  i812.isFallbackOverlay = !!i813[2]
  i812.renderMode = i813[3]
  i812.renderOrder = i813[4]
  i812.sortingLayerName = i813[5]
  i812.sortingOrder = i813[6]
  i812.scaleFactor = i813[7]
  request.r(i813[8], i813[9], 0, i812, 'worldCamera')
  i812.overrideSorting = !!i813[10]
  i812.pixelPerfect = !!i813[11]
  i812.targetDisplay = i813[12]
  i812.overridePixelPerfect = !!i813[13]
  i812.enabled = !!i813[14]
  return i812
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i815 = data
  i814.m_UiScaleMode = i815[0]
  i814.m_ReferencePixelsPerUnit = i815[1]
  i814.m_ScaleFactor = i815[2]
  i814.m_ReferenceResolution = new pc.Vec2( i815[3], i815[4] )
  i814.m_ScreenMatchMode = i815[5]
  i814.m_MatchWidthOrHeight = i815[6]
  i814.m_PhysicalUnit = i815[7]
  i814.m_FallbackScreenDPI = i815[8]
  i814.m_DefaultSpriteDPI = i815[9]
  i814.m_DynamicPixelsPerUnit = i815[10]
  i814.m_PresetInfoIsWorld = !!i815[11]
  return i814
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i817 = data
  i816.m_IgnoreReversedGraphics = !!i817[0]
  i816.m_BlockingObjects = i817[1]
  i816.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i817[2] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i819 = data
  i818.cullTransparentMesh = !!i819[0]
  return i818
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Image' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'm_Sprite')
  i820.m_Type = i821[2]
  i820.m_PreserveAspect = !!i821[3]
  i820.m_FillCenter = !!i821[4]
  i820.m_FillMethod = i821[5]
  i820.m_FillAmount = i821[6]
  i820.m_FillClockwise = !!i821[7]
  i820.m_FillOrigin = i821[8]
  i820.m_UseSpriteMesh = !!i821[9]
  i820.m_PixelsPerUnitMultiplier = i821[10]
  request.r(i821[11], i821[12], 0, i820, 'm_Material')
  i820.m_Maskable = !!i821[13]
  i820.m_Color = new pc.Color(i821[14], i821[15], i821[16], i821[17])
  i820.m_RaycastTarget = !!i821[18]
  i820.m_RaycastPadding = new pc.Vec4( i821[19], i821[20], i821[21], i821[22] )
  return i820
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i823 = data
  i822.m_Padding = new pc.Vec4( i823[0], i823[1], i823[2], i823[3] )
  i822.m_Softness = new pc.Vec2( i823[4], i823[5] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i825 = data
  i824.ambientIntensity = i825[0]
  i824.reflectionIntensity = i825[1]
  i824.ambientMode = i825[2]
  i824.ambientLight = new pc.Color(i825[3], i825[4], i825[5], i825[6])
  i824.ambientSkyColor = new pc.Color(i825[7], i825[8], i825[9], i825[10])
  i824.ambientGroundColor = new pc.Color(i825[11], i825[12], i825[13], i825[14])
  i824.ambientEquatorColor = new pc.Color(i825[15], i825[16], i825[17], i825[18])
  i824.fogColor = new pc.Color(i825[19], i825[20], i825[21], i825[22])
  i824.fogEndDistance = i825[23]
  i824.fogStartDistance = i825[24]
  i824.fogDensity = i825[25]
  i824.fog = !!i825[26]
  request.r(i825[27], i825[28], 0, i824, 'skybox')
  i824.fogMode = i825[29]
  var i827 = i825[30]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i827[i + 0]) );
  }
  i824.lightmaps = i826
  i824.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i825[31], i824.lightProbes)
  i824.lightmapsMode = i825[32]
  i824.mixedBakeMode = i825[33]
  i824.environmentLightingMode = i825[34]
  i824.ambientProbe = new pc.SphericalHarmonicsL2(i825[35])
  request.r(i825[36], i825[37], 0, i824, 'customReflection')
  request.r(i825[38], i825[39], 0, i824, 'defaultReflection')
  i824.defaultReflectionMode = i825[40]
  i824.defaultReflectionResolution = i825[41]
  i824.sunLightObjectId = i825[42]
  i824.pixelLightCount = i825[43]
  i824.defaultReflectionHDR = !!i825[44]
  i824.hasLightDataAsset = !!i825[45]
  i824.hasManualGenerate = !!i825[46]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'lightmapColor')
  request.r(i831[2], i831[3], 0, i830, 'lightmapDirection')
  request.r(i831[4], i831[5], 0, i830, 'shadowMask')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i832 = root || new UnityEngine.LightProbes()
  var i833 = data
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i843[i + 0]));
  }
  i840.ShaderCompilationErrors = i842
  i840.name = i841[1]
  i840.guid = i841[2]
  var i845 = i841[3]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i840.shaderDefinedKeywords = i844
  var i847 = i841[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i847[i + 0]) );
  }
  i840.passes = i846
  var i849 = i841[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i849[i + 0]) );
  }
  i840.usePasses = i848
  var i851 = i841[6]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i851[i + 0]) );
  }
  i840.defaultParameterValues = i850
  request.r(i841[7], i841[8], 0, i840, 'unityFallbackShader')
  i840.readDepth = !!i841[9]
  i840.hasDepthOnlyPass = !!i841[10]
  i840.isCreatedByShaderGraph = !!i841[11]
  i840.disableBatching = !!i841[12]
  i840.compiled = !!i841[13]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i855 = data
  i854.shaderName = i855[0]
  i854.errorMessage = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i860 = root || new pc.UnityShaderPass()
  var i861 = data
  i860.id = i861[0]
  i860.subShaderIndex = i861[1]
  i860.name = i861[2]
  i860.passType = i861[3]
  i860.grabPassTextureName = i861[4]
  i860.usePass = !!i861[5]
  i860.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[6], i860.zTest)
  i860.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[7], i860.zWrite)
  i860.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[8], i860.culling)
  i860.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i861[9], i860.blending)
  i860.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i861[10], i860.alphaBlending)
  i860.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[11], i860.colorWriteMask)
  i860.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[12], i860.offsetUnits)
  i860.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[13], i860.offsetFactor)
  i860.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[14], i860.stencilRef)
  i860.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[15], i860.stencilReadMask)
  i860.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[16], i860.stencilWriteMask)
  i860.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i861[17], i860.stencilOp)
  i860.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i861[18], i860.stencilOpFront)
  i860.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i861[19], i860.stencilOpBack)
  var i863 = i861[20]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i863[i + 0]) );
  }
  i860.tags = i862
  var i865 = i861[21]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i860.passDefinedKeywords = i864
  var i867 = i861[22]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i867[i + 0]) );
  }
  i860.passDefinedKeywordGroups = i866
  var i869 = i861[23]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i869[i + 0]) );
  }
  i860.variants = i868
  var i871 = i861[24]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i871[i + 0]) );
  }
  i860.excludedVariants = i870
  i860.hasDepthReader = !!i861[25]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i873 = data
  i872.val = i873[0]
  i872.name = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i875 = data
  i874.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[0], i874.src)
  i874.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[1], i874.dst)
  i874.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[2], i874.op)
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i877 = data
  i876.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[0], i876.pass)
  i876.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[1], i876.fail)
  i876.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[2], i876.zFail)
  i876.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[3], i876.comp)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i881 = data
  i880.name = i881[0]
  i880.value = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i884.keywords = i886
  i884.hasDiscard = !!i885[1]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i891 = data
  i890.passId = i891[0]
  i890.subShaderIndex = i891[1]
  var i893 = i891[2]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i890.keywords = i892
  i890.vertexProgram = i891[3]
  i890.fragmentProgram = i891[4]
  i890.exportedForWebGl2 = !!i891[5]
  i890.readDepth = !!i891[6]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'shader')
  i896.pass = i897[2]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i901 = data
  i900.name = i901[0]
  i900.type = i901[1]
  i900.value = new pc.Vec4( i901[2], i901[3], i901[4], i901[5] )
  i900.textureValue = i901[6]
  i900.shaderPropertyFlag = i901[7]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i903 = data
  i902.name = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'texture')
  i902.aabb = i903[3]
  i902.vertices = i903[4]
  i902.triangles = i903[5]
  i902.textureRect = UnityEngine.Rect.MinMaxRect(i903[6], i903[7], i903[8], i903[9])
  i902.packedRect = UnityEngine.Rect.MinMaxRect(i903[10], i903[11], i903[12], i903[13])
  i902.border = new pc.Vec4( i903[14], i903[15], i903[16], i903[17] )
  i902.transparency = i903[18]
  i902.bounds = i903[19]
  i902.pixelsPerUnit = i903[20]
  i902.textureWidth = i903[21]
  i902.textureHeight = i903[22]
  i902.nativeSize = new pc.Vec2( i903[23], i903[24] )
  i902.pivot = new pc.Vec2( i903[25], i903[26] )
  i902.textureRectOffset = new pc.Vec2( i903[27], i903[28] )
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i907[i + 0]) );
  }
  i904.files = i906
  i904.componentToPrefabIds = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i911 = data
  i910.path = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'unityObject')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i915[i + 0]) );
  }
  i912.scriptsExecutionOrder = i914
  var i917 = i913[1]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i917[i + 0]) );
  }
  i912.sortingLayers = i916
  var i919 = i913[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i919[i + 0]) );
  }
  i912.cullingLayers = i918
  i912.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i913[3], i912.timeSettings)
  i912.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i913[4], i912.physicsSettings)
  i912.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i913[5], i912.physics2DSettings)
  i912.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i913[6], i912.qualitySettings)
  i912.enableRealtimeShadows = !!i913[7]
  i912.enableAutoInstancing = !!i913[8]
  i912.enableStaticBatching = !!i913[9]
  i912.enableDynamicBatching = !!i913[10]
  i912.usePreservativeDynamicBatching = !!i913[11]
  i912.lightmapEncodingQuality = i913[12]
  i912.desiredColorSpace = i913[13]
  var i921 = i913[14]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i912.allTags = i920
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i925 = data
  i924.name = i925[0]
  i924.value = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i929 = data
  i928.id = i929[0]
  i928.name = i929[1]
  i928.value = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i933 = data
  i932.id = i933[0]
  i932.name = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i935 = data
  i934.fixedDeltaTime = i935[0]
  i934.maximumDeltaTime = i935[1]
  i934.timeScale = i935[2]
  i934.maximumParticleTimestep = i935[3]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i937 = data
  i936.gravity = new pc.Vec3( i937[0], i937[1], i937[2] )
  i936.defaultSolverIterations = i937[3]
  i936.bounceThreshold = i937[4]
  i936.autoSyncTransforms = !!i937[5]
  i936.autoSimulation = !!i937[6]
  var i939 = i937[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i939[i + 0]) );
  }
  i936.collisionMatrix = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i943 = data
  i942.enabled = !!i943[0]
  i942.layerId = i943[1]
  i942.otherLayerId = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'material')
  i944.gravity = new pc.Vec2( i945[2], i945[3] )
  i944.positionIterations = i945[4]
  i944.velocityIterations = i945[5]
  i944.velocityThreshold = i945[6]
  i944.maxLinearCorrection = i945[7]
  i944.maxAngularCorrection = i945[8]
  i944.maxTranslationSpeed = i945[9]
  i944.maxRotationSpeed = i945[10]
  i944.baumgarteScale = i945[11]
  i944.baumgarteTOIScale = i945[12]
  i944.timeToSleep = i945[13]
  i944.linearSleepTolerance = i945[14]
  i944.angularSleepTolerance = i945[15]
  i944.defaultContactOffset = i945[16]
  i944.autoSimulation = !!i945[17]
  i944.queriesHitTriggers = !!i945[18]
  i944.queriesStartInColliders = !!i945[19]
  i944.callbacksOnDisable = !!i945[20]
  i944.reuseCollisionCallbacks = !!i945[21]
  i944.autoSyncTransforms = !!i945[22]
  var i947 = i945[23]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i947[i + 0]) );
  }
  i944.collisionMatrix = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i951 = data
  i950.enabled = !!i951[0]
  i950.layerId = i951[1]
  i950.otherLayerId = i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i953 = data
  var i955 = i953[0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i955[i + 0]) );
  }
  i952.qualityLevels = i954
  var i957 = i953[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i952.names = i956
  i952.shadows = i953[2]
  i952.anisotropicFiltering = i953[3]
  i952.antiAliasing = i953[4]
  i952.lodBias = i953[5]
  i952.shadowCascades = i953[6]
  i952.shadowDistance = i953[7]
  i952.shadowmaskMode = i953[8]
  i952.shadowProjection = i953[9]
  i952.shadowResolution = i953[10]
  i952.softParticles = !!i953[11]
  i952.softVegetation = !!i953[12]
  i952.activeColorSpace = i953[13]
  i952.desiredColorSpace = i953[14]
  i952.masterTextureLimit = i953[15]
  i952.maxQueuedFrames = i953[16]
  i952.particleRaycastBudget = i953[17]
  i952.pixelLightCount = i953[18]
  i952.realtimeReflectionProbes = !!i953[19]
  i952.shadowCascade2Split = i953[20]
  i952.shadowCascade4Split = new pc.Vec3( i953[21], i953[22], i953[23] )
  i952.streamingMipmapsActive = !!i953[24]
  i952.vSyncCount = i953[25]
  i952.asyncUploadBufferSize = i953[26]
  i952.asyncUploadTimeSlice = i953[27]
  i952.billboardsFaceCameraPosition = !!i953[28]
  i952.shadowNearPlaneOffset = i953[29]
  i952.streamingMipmapsMemoryBudget = i953[30]
  i952.maximumLODLevel = i953[31]
  i952.streamingMipmapsAddAllCameras = !!i953[32]
  i952.streamingMipmapsMaxLevelReduction = i953[33]
  i952.streamingMipmapsRenderersPerFrame = i953[34]
  i952.resolutionScalingFixedDPIFactor = i953[35]
  i952.streamingMipmapsMaxFileIORequests = i953[36]
  i952.currentQualityLevel = i953[37]
  return i952
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

Deserializers.creativeName = "test2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4212";

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

Deserializers.buildID = "6cedcc99-4ecc-4fc4-b8f7-f019e90100a9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

