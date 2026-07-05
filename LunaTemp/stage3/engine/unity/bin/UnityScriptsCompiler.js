if ( TRACE ) { TRACE( JSON.parse( '["HexaTest.App.GameBootstrap#Shuffle","HexaTest.App.GameBootstrap#StackY#get","HexaTest.App.GameBootstrap#init","HexaTest.App.GameBootstrap#CellStackPos","HexaTest.App.GameBootstrap#Awake","HexaTest.App.GameBootstrap#GetTraySource","HexaTest.App.GameBootstrap#OnTimeUp","HexaTest.App.GameBootstrap#PlaceFromTray","HexaTest.App.GameBootstrap#OnCascadeDone","HexaTest.App.GameBootstrap#SeedBoard","HexaTest.App.GameBootstrap#RefillTray","HexaTest.App.GameBootstrap#RandomDiscs","HexaTest.App.GameBootstrap#SetUpCamera","HexaTest.App.GameBootstrap#FitCameraToAspect","HexaTest.App.InputController#init","HexaTest.App.InputController#Init","HexaTest.App.InputController#Update","HexaTest.App.InputController#TryGrab","HexaTest.App.InputController#Drag","HexaTest.App.InputController#Release","HexaTest.App.InputController#TryNearestEmpty","HexaTest.App.InputController#ProjectToGround","HexaTest.App.MergeAnimator#Downscale","HexaTest.App.MergeAnimator#Init","HexaTest.App.MergeAnimator#Play","HexaTest.App.MergeAnimator#Run","HexaTest.App.MergeAnimator#Transfer","HexaTest.App.MergeAnimator#FlipAndLand","HexaTest.App.MergeAnimator#Flip","HexaTest.App.MergeAnimator#Clear","HexaTest.App.TutorialController#init","HexaTest.App.TutorialController#Init","HexaTest.App.TutorialController#Update","HexaTest.App.TutorialController#NotifyGrab","HexaTest.App.TutorialController#NotifyDropFailed","HexaTest.App.TutorialController#NotifyPlaced","HexaTest.App.TutorialController#StopForever","HexaTest.App.TutorialController#Show","HexaTest.App.TutorialController#Hide","HexaTest.App.TutorialController#GestureLoop","HexaTest.App.TutorialController#FindTargetCell","HexaTest.App.TutorialController#PlaceHand","HexaTest.Config.GameConfig#DiscRadius#get","HexaTest.Config.GameConfig#TileRadius#get","HexaTest.Config.GameConfig#init","HexaTest.Config.GameConfig#ColorOf","HexaTest.Domain.BoardModel#BuildHexagon","HexaTest.Domain.BoardModel#Cells#get","HexaTest.Domain.BoardModel#init","HexaTest.Domain.BoardModel#Add","HexaTest.Domain.BoardModel#TryGet","HexaTest.Domain.BoardModel#Get","HexaTest.Domain.BoardModel#Neighbors","HexaTest.Domain.BoardModel#Clone","HexaTest.Domain.CellModel#IsEmpty#get","HexaTest.Domain.CellModel#init","HexaTest.Domain.CellModel#ctor","HexaTest.Domain.HexCoord#init","HexaTest.Domain.HexCoord#getDefaultValue","HexaTest.Domain.HexCoord#S#get","HexaTest.Domain.HexCoord#$ctor1","HexaTest.Domain.HexCoord#ctor","HexaTest.Domain.HexCoord#Neighbor","HexaTest.Domain.HexCoord#ToWorld","HexaTest.Domain.HexCoord#DistanceToCenter","HexaTest.Domain.HexCoord#equals","HexaTest.Domain.HexCoord#getHashCode","HexaTest.Domain.HexCoord#toString","HexaTest.Domain.HexCoord#$clone","HexaTest.Domain.StackModel#Discs#get","HexaTest.Domain.StackModel#Count#get","HexaTest.Domain.StackModel#IsEmpty#get","HexaTest.Domain.StackModel#TopColor#get","HexaTest.Domain.StackModel#init","HexaTest.Domain.StackModel#Set","HexaTest.Domain.StackModel#Push","HexaTest.Domain.StackModel#PushRange","HexaTest.Domain.StackModel#TopRunLength","HexaTest.Domain.StackModel#RemoveTop","HexaTest.Domain.StackModel#Clone","HexaTest.Integrations.PlayworksBridge#init","HexaTest.Integrations.PlayworksBridge#InstallFullGame","HexaTest.Integrations.PlayworksBridge#GameEnded","HexaTest.Logic.GameTimer#Progress01#get","HexaTest.Logic.GameTimer#Remaining01#get","HexaTest.Logic.GameTimer#Expired#get","HexaTest.Logic.GameTimer#Begin","HexaTest.Logic.GameTimer#Stop","HexaTest.Logic.GameTimer#Tick","HexaTest.Logic.MergeResolver#init","HexaTest.Logic.MergeResolver#RunTransferPhase","HexaTest.Logic.MergeResolver#RunClearPhase","HexaTest.Logic.MergeResolver#Resolve","HexaTest.UI.PackshotView#init","HexaTest.UI.PackshotView#NewImage","HexaTest.UI.PackshotView#CreateClickCatcher","HexaTest.UI.PackshotView#Stretch","HexaTest.UI.PackshotView#CreateHexMaskSprite","HexaTest.UI.PackshotView#IsInsidePolygon","HexaTest.UI.PackshotView#init","HexaTest.UI.PackshotView#Show","HexaTest.UI.PackshotView#Show$1","HexaTest.UI.PackshotView#Build","HexaTest.UI.PackshotView#Reveal","HexaTest.UI.PackshotView#CompleteReveal","HexaTest.UI.PackshotView#GetRevealEndSize","HexaTest.UI.TimerHudView#init","HexaTest.UI.TimerHudView#UpdateOverlayFill","HexaTest.UI.TimerHudView#AnimatedTimerRect#get","HexaTest.UI.TimerHudView#init","HexaTest.UI.TimerHudView#Begin","HexaTest.UI.TimerHudView#Update","HexaTest.UI.TimerHudView#EnterAlarm","HexaTest.UI.TimerHudView#CaptureAlarmBaseState","HexaTest.UI.TimerHudView#WatchPopLoop","HexaTest.UI.TimerHudView#ApplyAlarmPulse","HexaTest.UI.TimerHudView#EnsureAlarmOverlays","HexaTest.UI.TimerHudView#EnsureTimerFillOverlay","HexaTest.UI.TimerHudView#EnsureAlphaTintMaterial","HexaTest.UI.TimerHudView#EnsureOverlay","HexaTest.UI.TimerHudView#SetOverlayColor","HexaTest.UI.TimerHudView#SetTimerFill","HexaTest.UI.TimerHudView#EvaluateFillColor","HexaTest.UI.TimerHudView#EndSequence","HexaTest.UI.TimerHudView#SetFinalAlarmColor","HexaTest.View.BoardView#init","HexaTest.View.BoardView#Build","HexaTest.View.BoardView#BuildPlatform","HexaTest.View.BoardView#BuildTiles","HexaTest.View.BoardView#WorldOf","HexaTest.View.BoardView#Register","HexaTest.View.BoardView#GetStack","HexaTest.View.BoardView#RemoveStack","HexaTest.View.BoardView#SetHighlight","HexaTest.View.Easing#Linear","HexaTest.View.Easing#OutQuad","HexaTest.View.Easing#InOutQuad","HexaTest.View.Easing#OutBack","HexaTest.View.HexAssets#MakeMaterial","HexaTest.View.HexAssets#ctor","HexaTest.View.HexAssets#MaterialFor","HexaTest.View.HexAssets#SeparatorMaterialFor","HexaTest.View.HexMeshBuilder#Build","HexaTest.View.HexMeshBuilder#BuildRounded","HexaTest.View.HexMeshBuilder#BuildRing","HexaTest.View.HexMeshBuilder#Radial","HexaTest.View.HexMeshBuilder#QuadBezier","HexaTest.View.HexMeshBuilder#BuildPrism","HexaTest.View.StackFactory#ctor","HexaTest.View.StackFactory#Create","HexaTest.View.StackView#DiscCount#get","HexaTest.View.StackView#init","HexaTest.View.StackView#Init","HexaTest.View.StackView#Build","HexaTest.View.StackView#CreateDisc","HexaTest.View.StackView#AddSeparatorBand","HexaTest.View.StackView#NextSlotWorld","HexaTest.View.StackView#SlotWorld","HexaTest.View.StackView#DetachTop","HexaTest.View.StackView#AttachTop","HexaTest.View.StackView#RemoveTopForClear","HexaTest.View.StackView#SlotLocalPos","HexaTest.View.StackView#UpdateCollider","HexaTest.View.Tweener#Tween","HexaTest.View.Tweener#PingPong","HexaTest.Logic.ClearStep#init","HexaTest.Logic.TransferStep#init"]' ) ); }
/**
 * @version 1.0.9682.36939
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*HexaTest.App.GameBootstrap start.*/
    Bridge.define("HexaTest.App.GameBootstrap", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HexaTest.App.GameBootstrap.Shuffle:static start.*/
                Shuffle: function (T, list) {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#Shuffle", this ); }

                    for (var i = (System.Array.getCount(list, T) - 1) | 0; i > 0; i = (i - 1) | 0) {
                        var j = UnityEngine.Random.Range(0, ((i + 1) | 0));
                        Bridge.Deconstruct(new (System.ValueTuple$2(T,T)).$ctor1(Bridge.rValue(System.Array.getItem(list, j, T)), Bridge.rValue(System.Array.getItem(list, i, T))).$clone(), Bridge.ref(Bridge.rValue(System.Array.getItem(list, i, T))), Bridge.ref(Bridge.rValue(System.Array.getItem(list, j, T))));
                    }
                },
                /*HexaTest.App.GameBootstrap.Shuffle:static end.*/


            }
        },
        fields: {
            config: null,
            setUpCamera: false,
            seededCells: 0,
            cameraFitMargin: 0,
            hud: null,
            tutorial: null,
            hexBaseMaterial: null,
            packshot: null,
            _gameOver: false,
            _assets: null,
            _board: null,
            _boardView: null,
            _factory: null,
            _resolver: null,
            _animator: null,
            _trayRoot: null,
            _tray: null
        },
        props: {
            StackY: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#StackY#get", this ); }

                    return this.config.tileRaise + this.config.tileThickness * 0.5;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#init", this ); }

                this.config = new HexaTest.Config.GameConfig();
                this.setUpCamera = true;
                this.seededCells = 10;
                this.cameraFitMargin = 1.2;
                this._tray = new (System.Collections.Generic.List$1(HexaTest.App.GameBootstrap.TrayEntry)).ctor();
            }
        },
        methods: {
            /*HexaTest.App.GameBootstrap.CellStackPos start.*/
            CellStackPos: function (coord) {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#CellStackPos", this ); }

                var p = this._boardView.WorldOf(coord);
                return new pc.Vec3( p.x, this.StackY, p.z );
            },
            /*HexaTest.App.GameBootstrap.CellStackPos end.*/

            /*HexaTest.App.GameBootstrap.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#Awake", this ); }

                this._assets = new HexaTest.View.HexAssets(this.config, this.hexBaseMaterial);
                this._board = HexaTest.Domain.BoardModel.BuildHexagon(this.config.boardRadius);

                this._boardView = new UnityEngine.GameObject.$ctor2("BoardView").AddComponent(HexaTest.View.BoardView);
                this._boardView.transform.SetParent(this.transform, false);
                this._boardView.Build(this.config, this._assets, this._board);

                this._factory = new HexaTest.View.StackFactory(this.config, this._assets);
                this._resolver = new HexaTest.Logic.MergeResolver();

                this.SeedBoard();

                this._trayRoot = new UnityEngine.GameObject.$ctor2("Tray").transform;
                this._trayRoot.SetParent(this.transform, false);
                this.RefillTray();

                if (this.setUpCamera) {
                    this.SetUpCamera();
                }

                this._animator = this.gameObject.AddComponent(HexaTest.App.MergeAnimator);
                this._animator.Init(this.config, this._board, this._boardView);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                    this.tutorial.Init(UnityEngine.Camera.main, this.config, this._board, Bridge.fn.cacheBind(this, this.GetTraySource));
                }

                var input = this.gameObject.AddComponent(HexaTest.App.InputController);
                input.Init(UnityEngine.Camera.main, this.config, this._board, this._boardView, Bridge.fn.bind(this, function () {
                    return this._animator.IsPlaying || this._gameOver;
                }), Bridge.fn.cacheBind(this, this.PlaceFromTray), Bridge.fn.bind(this, function () {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                        this.tutorial.NotifyGrab();
                    }
                }), Bridge.fn.bind(this, function () {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                        this.tutorial.NotifyDropFailed();
                    }
                }));

                if (UnityEngine.MonoBehaviour.op_Inequality(this.hud, null)) {
                    this.hud.addExpired(Bridge.fn.cacheBind(this, this.OnTimeUp));
                    this.hud.Begin();
                }
            },
            /*HexaTest.App.GameBootstrap.Awake end.*/

            /*HexaTest.App.GameBootstrap.GetTraySource start.*/
            GetTraySource: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#GetTraySource", this ); }

                if (this._tray.Count === 0) {
                    return null;
                }
                return this._tray.getItem(0).View.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.25 ) );
            },
            /*HexaTest.App.GameBootstrap.GetTraySource end.*/

            /*HexaTest.App.GameBootstrap.OnTimeUp start.*/
            OnTimeUp: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#OnTimeUp", this ); }

                this._gameOver = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                    this.tutorial.StopForever();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.packshot, null)) {
                    this.packshot.Show();
                }
            },
            /*HexaTest.App.GameBootstrap.OnTimeUp end.*/

            /*HexaTest.App.GameBootstrap.PlaceFromTray start.*/
            PlaceFromTray: function (view, coord) {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#PlaceFromTray", this ); }

                var entry = this._tray.Find(function (e) {
                    return UnityEngine.MonoBehaviour.op_Equality(e.View, view);
                });
                var cell = { };
                if (entry == null || !this._board.TryGet(coord, cell) || !cell.v.IsEmpty) {
                    return false;
                }

                cell.v.Stack = entry.Model;
                view.IsTray = false;
                view.transform.SetParent(this._boardView.transform, true);
                view.transform.position = this.CellStackPos(coord);
                this._boardView.Register(coord, view);
                this._tray.remove(entry);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                    this.tutorial.NotifyPlaced();
                }

                var plan = this._resolver.Resolve(this._board.Clone(), coord, this.config.clearCount);
                this._animator.Play(plan, Bridge.fn.cacheBind(this, this.OnCascadeDone));
                return true;
            },
            /*HexaTest.App.GameBootstrap.PlaceFromTray end.*/

            /*HexaTest.App.GameBootstrap.OnCascadeDone start.*/
            OnCascadeDone: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#OnCascadeDone", this ); }

                if (this._tray.Count === 0) {
                    this.RefillTray();
                }
            },
            /*HexaTest.App.GameBootstrap.OnCascadeDone end.*/

            /*HexaTest.App.GameBootstrap.SeedBoard start.*/
            SeedBoard: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#SeedBoard", this ); }

                var cells = new (System.Collections.Generic.List$1(HexaTest.Domain.CellModel)).$ctor1(this._board.Cells);
                HexaTest.App.GameBootstrap.Shuffle(HexaTest.Domain.CellModel, cells);
                var n = Math.max(0, Math.min(this.seededCells, ((cells.Count - 1) | 0)));
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    var cell = cells.getItem(i);
                    var model = new HexaTest.Domain.StackModel();
                    model.Set(this.RandomDiscs());
                    cell.Stack = model;
                    var view = this._factory.Create(System.String.format("Stack_{0}", [cell.Coord]), model, this.CellStackPos(cell.Coord), this._boardView.transform);
                    this._boardView.Register(cell.Coord, view);
                }
            },
            /*HexaTest.App.GameBootstrap.SeedBoard end.*/

            /*HexaTest.App.GameBootstrap.RefillTray start.*/
            RefillTray: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#RefillTray", this ); }

                var $t;
                var z = -this.config.trayDistance;
                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    var model = new HexaTest.Domain.StackModel();
                    model.Set(this.RandomDiscs());
                    var pos = new pc.Vec3( (((i - 1) | 0)) * this.config.traySpacing, this.StackY, z );
                    var view = this._factory.Create(System.String.format("TrayStack_{0}", [Bridge.box(i, System.Int32)]), model, pos, this._trayRoot);
                    view.IsTray = true;
                    this._tray.add(($t = new HexaTest.App.GameBootstrap.TrayEntry(), $t.Model = model, $t.View = view, $t.Slot = i, $t));
                }
            },
            /*HexaTest.App.GameBootstrap.RefillTray end.*/

            /*HexaTest.App.GameBootstrap.RandomDiscs start.*/
            RandomDiscs: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#RandomDiscs", this ); }

                var list = new (System.Collections.Generic.List$1(HexaTest.Domain.HexColorId)).ctor();
                var bands = UnityEngine.Random.Range(1, 4);
                var budget = 9;
                for (var b = 0; b < bands && budget > 0; b = (b + 1) | 0) {
                    var color = UnityEngine.Random.Range(0, this.config.palette.length);
                    var count = UnityEngine.Mathf.Min(UnityEngine.Random.Range(2, 6), budget);
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        list.add(color);
                    }
                    budget = (budget - count) | 0;
                }
                return list;
            },
            /*HexaTest.App.GameBootstrap.RandomDiscs end.*/

            /*HexaTest.App.GameBootstrap.SetUpCamera start.*/
            SetUpCamera: function () {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#SetUpCamera", this ); }

                var $t;
                var cam = UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(cam, null)) {
                    var go = ($t = new UnityEngine.GameObject.$ctor2("Main Camera"), $t.tag = "MainCamera", $t);
                    cam = go.AddComponent(UnityEngine.Camera);
                }
                cam.transform.position = new pc.Vec3( 0.0, 11.0, -10.0 );
                cam.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 50.0, 0.0, 0.0 );
                cam.clearFlags = UnityEngine.CameraClearFlags.SolidColor;
                cam.backgroundColor = new pc.Color( 0.75, 0.85, 0.93, 1 );
                this.FitCameraToAspect(cam);

                UnityEngine.RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
                UnityEngine.RenderSettings.ambientLight = new pc.Color( 0.78, 0.83, 0.9, 1 );
            },
            /*HexaTest.App.GameBootstrap.SetUpCamera end.*/

            /*HexaTest.App.GameBootstrap.FitCameraToAspect start.*/
            FitCameraToAspect: function (cam) {
if ( TRACE ) { TRACE( "HexaTest.App.GameBootstrap#FitCameraToAspect", this ); }

                var aspect = UnityEngine.Screen.height > 0 ? UnityEngine.Screen.width / UnityEngine.Screen.height : cam.aspect;
                if (aspect <= 0.0) {
                    cam.fieldOfView = 65.0;
                    return;
                }

                var boardHalfWidth = this.config.cellSize * (1.5 * this.config.boardRadius + 1.0);
                var halfW = boardHalfWidth * this.cameraFitMargin;
                var dist = pc.Vec3.distance( cam.transform.position, pc.Vec3.ZERO.clone() );
                var fov = 2.0 * Math.atan(halfW / (aspect * dist)) * UnityEngine.Mathf.Rad2Deg;
                cam.fieldOfView = Math.max(25.0, Math.min(fov, 90.0));
            },
            /*HexaTest.App.GameBootstrap.FitCameraToAspect end.*/


        }
    });
    /*HexaTest.App.GameBootstrap end.*/

    /*HexaTest.App.GameBootstrap+TrayEntry start.*/
    Bridge.define("HexaTest.App.GameBootstrap.TrayEntry", {
        $kind: 1002,
        fields: {
            Model: null,
            View: null,
            Slot: 0
        }
    });
    /*HexaTest.App.GameBootstrap+TrayEntry end.*/

    /*HexaTest.App.InputController start.*/
    Bridge.define("HexaTest.App.InputController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cam: null,
            _cfg: null,
            _board: null,
            _view: null,
            _isBusy: null,
            _place: null,
            _onGrab: null,
            _onInvalidDrop: null,
            _held: null,
            _home: null,
            _hover: null,
            _hasHover: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#init", this ); }

                this._home = new UnityEngine.Vector3();
                this._hover = new HexaTest.Domain.HexCoord();
            }
        },
        methods: {
            /*HexaTest.App.InputController.Init start.*/
            Init: function (cam, cfg, board, view, isBusy, place, onGrab, onInvalidDrop) {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#Init", this ); }

                if (onGrab === void 0) { onGrab = null; }
                if (onInvalidDrop === void 0) { onInvalidDrop = null; }
                this._cam = cam;
                this._cfg = cfg;
                this._board = board;
                this._view = view;
                this._isBusy = isBusy;
                this._place = place;
                this._onGrab = onGrab;
                this._onInvalidDrop = onInvalidDrop;
            },
            /*HexaTest.App.InputController.Init end.*/

            /*HexaTest.App.InputController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#Update", this ); }

                if (UnityEngine.Component.op_Equality(this._cam, null)) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.TryGrab();
                } else {
                    if (UnityEngine.Input.GetMouseButton(0) && UnityEngine.MonoBehaviour.op_Inequality(this._held, null)) {
                        this.Drag();
                    } else {
                        if (UnityEngine.Input.GetMouseButtonUp(0) && UnityEngine.MonoBehaviour.op_Inequality(this._held, null)) {
                            this.Release();
                        }
                    }
                }
            },
            /*HexaTest.App.InputController.Update end.*/

            /*HexaTest.App.InputController.TryGrab start.*/
            TryGrab: function () {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#TryGrab", this ); }

                if (!Bridge.staticEquals(this._isBusy, null) && this._isBusy()) {
                    return;
                }

                var ray = this._cam.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var hit = { v : new UnityEngine.RaycastHit() };
                if (!UnityEngine.Physics.Raycast$1(ray, hit, 100.0)) {
                    return;
                }

                var stack = hit.v.collider.GetComponentInParent(HexaTest.View.StackView);
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || !stack.IsTray) {
                    return;
                }

                this._held = stack;
                this._home = stack.transform.position.$clone();
                !Bridge.staticEquals(this._onGrab, null) ? this._onGrab() : null;
            },
            /*HexaTest.App.InputController.TryGrab end.*/

            /*HexaTest.App.InputController.Drag start.*/
            Drag: function () {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#Drag", this ); }

                var ground = { v : new UnityEngine.Vector3() };
                if (!this.ProjectToGround(ground)) {
                    return;
                }

                this._held.transform.position = ground.v.$clone().add( pc.Vec3.UP.clone().clone().scale( this._cfg.dragLift ) );
                var coord = { v : new HexaTest.Domain.HexCoord() };

                if (this.TryNearestEmpty(ground.v, coord)) {
                    if (!this._hasHover || !coord.v.equals(this._hover)) {
                        if (this._hasHover) {
                            this._view.SetHighlight(this._hover, false);
                        }
                        this._hover = coord.v;
                        this._hasHover = true;
                        this._view.SetHighlight(this._hover, true);
                    }
                } else if (this._hasHover) {
                    this._view.SetHighlight(this._hover, false);
                    this._hasHover = false;
                }
            },
            /*HexaTest.App.InputController.Drag end.*/

            /*HexaTest.App.InputController.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#Release", this ); }

                if (this._hasHover) {
                    this._view.SetHighlight(this._hover, false);
                    var placed = !Bridge.staticEquals(this._place, null) && this._place(this._held, this._hover);
                    if (!placed) {
                        this._held.transform.position = this._home.$clone();
                        !Bridge.staticEquals(this._onInvalidDrop, null) ? this._onInvalidDrop() : null;
                    }
                } else {
                    this._held.transform.position = this._home.$clone();
                    !Bridge.staticEquals(this._onInvalidDrop, null) ? this._onInvalidDrop() : null;
                }

                this._held = null;
                this._hasHover = false;
            },
            /*HexaTest.App.InputController.Release end.*/

            /*HexaTest.App.InputController.TryNearestEmpty start.*/
            TryNearestEmpty: function (world, coord) {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#TryNearestEmpty", this ); }

                var $t;
                coord.v = Bridge.getDefaultValue(HexaTest.Domain.HexCoord);
                var best = this._cfg.snapDistance * this._cfg.snapDistance;
                var found = false;

                $t = Bridge.getEnumerator(this._board.Cells, HexaTest.Domain.CellModel);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (!cell.IsEmpty) {
                            continue;
                        }
                        var p = this._view.WorldOf(cell.Coord);
                        var dx = p.x - world.x, dz = p.z - world.z;
                        var sqr = dx * dx + dz * dz;
                        if (sqr <= best) {
                            best = sqr;
                            coord.v = cell.Coord;
                            found = true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return found;
            },
            /*HexaTest.App.InputController.TryNearestEmpty end.*/

            /*HexaTest.App.InputController.ProjectToGround start.*/
            ProjectToGround: function (point) {
if ( TRACE ) { TRACE( "HexaTest.App.InputController#ProjectToGround", this ); }

                var ray = this._cam.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var plane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), pc.Vec3.ZERO.clone());
                var enter = { };
                if (plane.Raycast(ray, enter)) {
                    point.v = ray.GetPoint(enter.v);
                    return true;
                }
                point.v = pc.Vec3.ZERO.clone();
                return false;
            },
            /*HexaTest.App.InputController.ProjectToGround end.*/


        }
    });
    /*HexaTest.App.InputController end.*/

    /*HexaTest.App.MergeAnimator start.*/
    Bridge.define("HexaTest.App.MergeAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HexaTest.App.MergeAnimator.Downscale:static start.*/
                Downscale: function (disc, dur) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Downscale", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        s0,
                        t,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        s0 = disc.localScale.$clone();
                                            t = 0.0;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( t < dur ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        t += UnityEngine.Time.deltaTime;
                                            disc.localScale = new pc.Vec3().lerp( s0, pc.Vec3.ZERO.clone(), dur > 0.0 ? t / dur : 1.0 );
                                            $enumerator.current = null;
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        
                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {
                                        disc.localScale = pc.Vec3.ZERO.clone();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HexaTest.App.MergeAnimator.Downscale:static end.*/


            }
        },
        fields: {
            _cfg: null,
            _board: null,
            _view: null,
            IsPlaying: false,
            _activeFlips: 0
        },
        methods: {
            /*HexaTest.App.MergeAnimator.Init start.*/
            Init: function (cfg, board, view) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Init", this ); }

                this._cfg = cfg;
                this._board = board;
                this._view = view;
            },
            /*HexaTest.App.MergeAnimator.Init end.*/

            /*HexaTest.App.MergeAnimator.Play start.*/
            Play: function (plan, onComplete) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Play", this ); }

                this.StartCoroutine$1(this.Run(plan, onComplete));
            },
            /*HexaTest.App.MergeAnimator.Play end.*/

            /*HexaTest.App.MergeAnimator.Run start.*/
            Run: function (plan, onComplete) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Run", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    speed,
                    t,
                    c,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.IsPlaying = true;

                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < plan.Count ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 11;
                                    continue;
                                }
                                case 2: {
                                    speed = UnityEngine.Mathf.Min(Math.pow(1.0 + this._cfg.speedRamp, i), this._cfg.maxSpeed);
                                        if (((t = Bridge.as(plan.getItem(i), HexaTest.Logic.TransferStep))) != null) {
                                            $step = 3;
                                            continue;
                                        } else  {
                                            $step = 5;
                                            continue;
                                        }
                                }
                                case 3: {
                                    $enumerator.current = this.Transfer(t, speed);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 9;
                                    continue;
                                }
                                case 5: {
                                    if (((c = Bridge.as(plan.getItem(i), HexaTest.Logic.ClearStep))) != null) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    $enumerator.current = this.Clear(c, speed);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 11: {
                                    this.IsPlaying = false;
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.App.MergeAnimator.Run end.*/

            /*HexaTest.App.MergeAnimator.Transfer start.*/
            Transfer: function (step, speed) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Transfer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    from,
                    to,
                    fromCell,
                    toCell,
                    dur,
                    stagger,
                    maxConcurrent,
                    baseSlot,
                    i,
                    disc,
                    target,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    from = this._view.GetStack(step.From);
                                        to = this._view.GetStack(step.To);
                                        fromCell = this._board.Get(step.From);
                                        toCell = this._board.Get(step.To);
                                        if (UnityEngine.MonoBehaviour.op_Equality(from, null) || UnityEngine.MonoBehaviour.op_Equality(to, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    dur = this._cfg.flipDuration / speed;
                                        stagger = this._cfg.flipStagger / speed;
                                        maxConcurrent = UnityEngine.Mathf.Max(1, this._cfg.maxConcurrentFlips);
                                        baseSlot = to.DiscCount;

                                        i = 0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( i < step.Count ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 4: {
                                    if ( this._activeFlips >= maxConcurrent ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    disc = from.DetachTop();
                                        if (fromCell.Stack != null) {
                                            fromCell.Stack.RemoveTop(1);
                                        }

                                        target = to.SlotWorld(((baseSlot + i) | 0));
                                        this.StartCoroutine$1(this.FlipAndLand(disc, target, dur, to, toCell, step.Color));

                                        if (i < ((step.Count - 1) | 0) && stagger > 0.0) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 8: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(stagger);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    i = (i + 1) | 0;
                                    $step = 3;
                                    continue;
                                }
                                case 12: {
                                    if ( this._activeFlips > 0 ) {
                                            $step = 13;
                                            continue;
                                        } 
                                        $step = 15;
                                        continue;
                                }
                                case 13: {
                                    $enumerator.current = null;
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    
                                        $step = 12;
                                        continue;
                                }
                                case 15: {
                                    if (fromCell.IsEmpty) {
                                            this._view.RemoveStack(step.From);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.App.MergeAnimator.Transfer end.*/

            /*HexaTest.App.MergeAnimator.FlipAndLand start.*/
            FlipAndLand: function (disc, target, dur, to, toCell, color) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#FlipAndLand", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._activeFlips = (this._activeFlips + 1) | 0;
                                        $enumerator.current = this.Flip(disc, target.$clone(), dur);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    to.AttachTop(disc);
                                        toCell.Stack.Push(color);
                                        this._activeFlips = (this._activeFlips - 1) | 0;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.App.MergeAnimator.FlipAndLand end.*/

            /*HexaTest.App.MergeAnimator.Flip start.*/
            Flip: function (disc, target, dur) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Flip", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    pivot,
                    dir,
                    axis,
                    probe,
                    done,
                    stepAng,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = disc.position.$clone();
                                        pivot = (start.$clone().add( target )).clone().scale( 0.5 );

                                        dir = target.$clone().sub( start );
                                        dir.y = 0.0;
                                        axis = new pc.Vec3().cross( pc.Vec3.UP.clone(), dir.lengthSq() > 1E-05 ? dir.clone().normalize().$clone() : new pc.Vec3( 0, 0, 1 ) );
                                        if (axis.lengthSq() < 1E-05) {
                                            axis = pc.Vec3.RIGHT.clone();
                                        }
                                        axis.normalize();

                                        probe = pivot.$clone().add( new pc.Quat().setFromAxisAngle( axis, 90.0 ).transformVector( (start.$clone().sub( pivot )) ) );
                                        if (probe.y < pivot.y) {
                                            axis = axis.$clone().scale( -1 );
                                        }

                                        done = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( done < 180.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    stepAng = dur > 0.0 ? 180.0 * (UnityEngine.Time.deltaTime / dur) : 180.0;
                                        stepAng = UnityEngine.Mathf.Min(stepAng, 180.0 - done);
                                        disc.RotateAround(pivot.$clone(), axis.$clone(), stepAng);
                                        done += stepAng;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    disc.position = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.App.MergeAnimator.Flip end.*/

            /*HexaTest.App.MergeAnimator.Clear start.*/
            Clear: function (step, speed) {
if ( TRACE ) { TRACE( "HexaTest.App.MergeAnimator#Clear", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    view,
                    cell,
                    dur,
                    gap,
                    i,
                    disc,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    view = this._view.GetStack(step.Cell);
                                        cell = this._board.Get(step.Cell);
                                        if (UnityEngine.MonoBehaviour.op_Equality(view, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    dur = this._cfg.clearDuration / speed;
                                        gap = this._cfg.discInterval / speed;

                                        i = 0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( i < step.Count ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 10;
                                    continue;
                                }
                                case 4: {
                                    disc = view.RemoveTopForClear();
                                        $enumerator.current = HexaTest.App.MergeAnimator.Downscale(disc, dur);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    UnityEngine.MonoBehaviour.Destroy(disc.gameObject);

                                        if (cell.Stack != null) {
                                            cell.Stack.RemoveTop(1);
                                        }
                                        if (gap > 0.0) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(gap);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    i = (i + 1) | 0;
                                    $step = 3;
                                    continue;
                                }
                                case 10: {
                                    if (cell.IsEmpty) {
                                            this._view.RemoveStack(step.Cell);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.App.MergeAnimator.Clear end.*/


        }
    });
    /*HexaTest.App.MergeAnimator end.*/

    /*HexaTest.App.TutorialController start.*/
    Bridge.define("HexaTest.App.TutorialController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            baseSprite: null,
            pressSprite: null,
            idleDelay: 0,
            handWorldHeight: 0,
            _cam: null,
            _cfg: null,
            _board: null,
            _getSource: null,
            _hand: null,
            _handRoot: null,
            _loop: null,
            _showing: false,
            _stopped: false,
            _waitingForDrop: false,
            _initialized: false,
            _idle: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#init", this ); }

                this.idleDelay = 2.5;
                this.handWorldHeight = 1.4;
            }
        },
        methods: {
            /*HexaTest.App.TutorialController.Init start.*/
            Init: function (cam, cfg, board, getSource) {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#Init", this ); }

                var $t;
                this._cam = cam;
                this._cfg = cfg;
                this._board = board;
                this._getSource = getSource;

                var pixels = 256.0;
                var canvasGo = new UnityEngine.GameObject.$ctor3("TutorialHandCanvas", UnityEngine.Canvas);
                canvasGo.transform.SetParent(this.transform, false);
                var canvas = canvasGo.GetComponent(UnityEngine.Canvas);
                canvas.renderMode = UnityEngine.RenderMode.WorldSpace;
                canvas.worldCamera = this._cam;
                canvas.sortingOrder = 1000;
                this._handRoot = Bridge.cast(canvasGo.transform, UnityEngine.RectTransform);
                this._handRoot.sizeDelta = new pc.Vec2( pixels, pixels );
                this._handRoot.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (this.handWorldHeight / pixels) );

                var imgGo = new UnityEngine.GameObject.$ctor4("Hand", [UnityEngine.RectTransform, UnityEngine.CanvasRenderer, UnityEngine.UI.Image]);
                imgGo.transform.SetParent(canvasGo.transform, false);
                var r = Bridge.cast(imgGo.transform, UnityEngine.RectTransform);
                r.anchorMin = ($t = new pc.Vec2( 0.5, 0.5 ), r.anchorMax = $t.$clone(), $t);
                r.pivot = new pc.Vec2( 0.5, 0.5 );
                r.sizeDelta = new pc.Vec2( pixels, pixels );
                this._hand = imgGo.GetComponent(UnityEngine.UI.Image);
                this._hand.sprite = this.baseSprite;
                this._hand.preserveAspect = true;
                this._hand.raycastTarget = false;
                this._hand.enabled = false;
                this._initialized = true;
            },
            /*HexaTest.App.TutorialController.Init end.*/

            /*HexaTest.App.TutorialController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#Update", this ); }


                if (!this._initialized || this._stopped || this._showing || this._waitingForDrop) {
                    return;
                }
                this._idle += UnityEngine.Time.deltaTime;
                if (this._idle >= this.idleDelay) {
                    this.Show();
                }
            },
            /*HexaTest.App.TutorialController.Update end.*/

            /*HexaTest.App.TutorialController.NotifyGrab start.*/
            NotifyGrab: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#NotifyGrab", this ); }

                this._idle = 0.0;
                this._waitingForDrop = true;
                this.Hide();
            },
            /*HexaTest.App.TutorialController.NotifyGrab end.*/

            /*HexaTest.App.TutorialController.NotifyDropFailed start.*/
            NotifyDropFailed: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#NotifyDropFailed", this ); }

                this._waitingForDrop = false;
                this._idle = 0.0;
                this.Hide();
            },
            /*HexaTest.App.TutorialController.NotifyDropFailed end.*/

            /*HexaTest.App.TutorialController.NotifyPlaced start.*/
            NotifyPlaced: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#NotifyPlaced", this ); }

                this.StopForever();
            },
            /*HexaTest.App.TutorialController.NotifyPlaced end.*/

            /*HexaTest.App.TutorialController.StopForever start.*/
            StopForever: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#StopForever", this ); }

                this._stopped = true;
                this._waitingForDrop = false;
                this.Hide();
            },
            /*HexaTest.App.TutorialController.StopForever end.*/

            /*HexaTest.App.TutorialController.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#Show", this ); }

                this._showing = true;
                this._loop = this.StartCoroutine$1(this.GestureLoop());
            },
            /*HexaTest.App.TutorialController.Show end.*/

            /*HexaTest.App.TutorialController.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#Hide", this ); }

                this._showing = false;
                if (this._loop != null) {
                    this.StopCoroutine$2(this._loop);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._hand, null)) {
                    this._hand.enabled = false;
                }
            },
            /*HexaTest.App.TutorialController.Hide end.*/

            /*HexaTest.App.TutorialController.GestureLoop start.*/
            GestureLoop: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#GestureLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    source,
                    target,
                    a,
                    b,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 1: {
                                    source = !Bridge.staticEquals(this._getSource, null) ? this._getSource() : null;
                                        target = this.FindTargetCell();
                                        if (pc.Vec3.equals( source, null ) || pc.Vec3.equals( target, null )) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this._hand.enabled = false;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 0;
                                        continue;
                                }
                                case 4: {
                                    a = { v : System.Nullable.getValue(source).$clone() };
                                        b = { v : System.Nullable.getValue(target).$clone() };
                                        this._hand.enabled = true;
                                        this._hand.sprite = this.baseSprite;
                                        this.PlaceHand(a.v);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.35);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this._hand.sprite = this.pressSprite;
                                        $enumerator.current = HexaTest.View.Tweener.Tween(0.8, HexaTest.View.Easing.InOutQuad, (function ($me, a, b) {
                                            return Bridge.fn.bind($me, function (k) {
                                                this.PlaceHand(new pc.Vec3().lerp( a.v, b.v, k ));
                                            });
                                        })(this, a, b));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.35);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._hand.sprite = this.baseSprite;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.App.TutorialController.GestureLoop end.*/

            /*HexaTest.App.TutorialController.FindTargetCell start.*/
            FindTargetCell: function () {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#FindTargetCell", this ); }

                var $t;
                var best = null;
                var bestSqr = 3.40282347E+38;
                $t = Bridge.getEnumerator(this._board.Cells, HexaTest.Domain.CellModel);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (!cell.IsEmpty) {
                            continue;
                        }
                        var sqr = cell.Coord.ToWorld(this._cfg.cellSize).lengthSq();
                        if (sqr < bestSqr) {
                            bestSqr = sqr;
                            best = cell;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (best == null) {
                    return null;
                }

                var p = best.Coord.ToWorld(this._cfg.cellSize);
                return new pc.Vec3( p.x, this._cfg.tileRaise + this._cfg.tileThickness * 0.5, p.z );
            },
            /*HexaTest.App.TutorialController.FindTargetCell end.*/

            /*HexaTest.App.TutorialController.PlaceHand start.*/
            PlaceHand: function (worldPoint) {
if ( TRACE ) { TRACE( "HexaTest.App.TutorialController#PlaceHand", this ); }

                this._handRoot.rotation = this._cam.transform.rotation.$clone();

                var anchor = worldPoint.$clone().sub( this._cam.transform.up.$clone().clone().scale( (this.handWorldHeight * 0.5) ) );

                var camPos = this._cam.transform.position.$clone();
                var dist = pc.Vec3.distance( camPos, anchor );
                var pull = UnityEngine.Mathf.Min(4.0, dist - 1.0);
                var toCam = (camPos.$clone().sub( anchor )).scale( 1.0 / ( UnityEngine.Mathf.Max(0.001, dist) ) );

                this._handRoot.position = anchor.$clone().add( toCam.$clone().clone().scale( pull ) );
                var ratio = dist > 0.01 ? (dist - pull) / dist : 1.0;
                this._handRoot.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (this.handWorldHeight / 256.0 * ratio) );
            },
            /*HexaTest.App.TutorialController.PlaceHand end.*/


        }
    });
    /*HexaTest.App.TutorialController end.*/

    /*HexaTest.Config.GameConfig start.*/
    Bridge.define("HexaTest.Config.GameConfig", {
        fields: {
            boardRadius: 0,
            cellSize: 0,
            discFill: 0,
            discThickness: 0,
            discSpacing: 0,
            discSeparatorThickness: 0,
            discSeparatorDarken: 0,
            discRound: 0,
            cornerSegments: 0,
            clearCount: 0,
            tileInset: 0,
            tileThickness: 0,
            tileRound: 0,
            tileRaise: 0,
            baseRound: 0,
            baseLayerThickness: 0,
            edgeRim: 0,
            baseLayerColors: null,
            snapDistance: 0,
            dragLift: 0,
            trayDistance: 0,
            traySpacing: 0,
            flipDuration: 0,
            flipStagger: 0,
            maxConcurrentFlips: 0,
            clearDuration: 0,
            discInterval: 0,
            speedRamp: 0,
            maxSpeed: 0,
            tileColor: null,
            palette: null
        },
        props: {
            DiscRadius: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Config.GameConfig#DiscRadius#get", this ); }

                    return this.cellSize * this.discFill;
                }
            },
            TileRadius: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Config.GameConfig#TileRadius#get", this ); }

                    return this.cellSize * this.tileInset;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.Config.GameConfig#init", this ); }

                this.tileColor = new UnityEngine.Color();
                this.boardRadius = 2;
                this.cellSize = 1.0;
                this.discFill = 0.98;
                this.discThickness = 0.16;
                this.discSpacing = 0.16;
                this.discSeparatorThickness = 0.026;
                this.discSeparatorDarken = 0.28;
                this.discRound = 0.3;
                this.cornerSegments = 3;
                this.clearCount = 10;
                this.tileInset = 0.95;
                this.tileThickness = 0.12;
                this.tileRound = 0.25;
                this.tileRaise = 0.07;
                this.baseRound = 0.12;
                this.baseLayerThickness = 0.1;
                this.edgeRim = 0.03;
                this.baseLayerColors = System.Array.init([
                    new pc.Color( 0.55, 0.68, 0.82, 1 ), 
                    new pc.Color( 0.93, 0.95, 0.98, 1 ), 
                    new pc.Color( 0.42, 0.56, 0.74, 1 )
                ], UnityEngine.Color);
                this.snapDistance = 0.7;
                this.dragLift = 1.4;
                this.trayDistance = 7.0;
                this.traySpacing = 2.4;
                this.flipDuration = 0.24;
                this.flipStagger = 0.09;
                this.maxConcurrentFlips = 2;
                this.clearDuration = 0.11;
                this.discInterval = 0.04;
                this.speedRamp = 0.3;
                this.maxSpeed = 8.0;
                this.tileColor = new pc.Color( 0.72, 0.82, 0.92, 1.0 );
                this.palette = System.Array.init([
                    new pc.Color( 0.3, 0.82, 0.28, 1 ), 
                    new pc.Color( 0.93, 0.22, 0.78, 1 ), 
                    new pc.Color( 0.99, 0.82, 0.15, 1 ), 
                    new pc.Color( 0.92, 0.2, 0.18, 1 ), 
                    new pc.Color( 0.28, 0.82, 0.88, 1 ), 
                    new pc.Color( 0.2, 0.45, 0.92, 1 ), 
                    new pc.Color( 0.55, 0.3, 0.85, 1 ), 
                    new pc.Color( 0.97, 0.97, 0.97, 1 )
                ], UnityEngine.Color);
            }
        },
        methods: {
            /*HexaTest.Config.GameConfig.ColorOf start.*/
            ColorOf: function (id) {
if ( TRACE ) { TRACE( "HexaTest.Config.GameConfig#ColorOf", this ); }

                var i = id;
                return (this.palette != null && i >= 0 && i < this.palette.length) ? this.palette[i].$clone() : new pc.Color( 0.5, 0.5, 0.5, 1 );
            },
            /*HexaTest.Config.GameConfig.ColorOf end.*/


        }
    });
    /*HexaTest.Config.GameConfig end.*/

    /*HexaTest.Domain.BoardModel start.*/
    Bridge.define("HexaTest.Domain.BoardModel", {
        statics: {
            methods: {
                /*HexaTest.Domain.BoardModel.BuildHexagon:static start.*/
                BuildHexagon: function (radius) {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#BuildHexagon", this ); }

                    var board = new HexaTest.Domain.BoardModel();
                    for (var q = (-radius) | 0; q <= radius; q = (q + 1) | 0) {
                        for (var r = (-radius) | 0; r <= radius; r = (r + 1) | 0) {
                            var c = new HexaTest.Domain.HexCoord.$ctor1(q, r);
                            if (c.DistanceToCenter() <= radius) {
                                board.Add(new HexaTest.Domain.CellModel(c));
                            }
                        }
                    }
                    return board;
                },
                /*HexaTest.Domain.BoardModel.BuildHexagon:static end.*/


            }
        },
        fields: {
            _cells: null
        },
        props: {
            Cells: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#Cells#get", this ); }

                    return this._cells.Values;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#init", this ); }

                this._cells = new (System.Collections.Generic.Dictionary$2(HexaTest.Domain.HexCoord,HexaTest.Domain.CellModel)).ctor();
            }
        },
        methods: {
            /*HexaTest.Domain.BoardModel.Add start.*/
            Add: function (cell) {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#Add", this ); }

                this._cells.setItem(cell.Coord, cell);
            },
            /*HexaTest.Domain.BoardModel.Add end.*/

            /*HexaTest.Domain.BoardModel.TryGet start.*/
            TryGet: function (c, cell) {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#TryGet", this ); }

                return this._cells.tryGetValue(c, cell);
            },
            /*HexaTest.Domain.BoardModel.TryGet end.*/

            /*HexaTest.Domain.BoardModel.Get start.*/
            Get: function (c) {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#Get", this ); }

                var cell = { };
                return this._cells.tryGetValue(c, cell) ? cell.v : null;
            },
            /*HexaTest.Domain.BoardModel.Get end.*/

            /*HexaTest.Domain.BoardModel.Neighbors start.*/
            Neighbors: function (c) {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#Neighbors", this ); }

                return new (Bridge.GeneratorEnumerable$1(HexaTest.Domain.CellModel))(Bridge.fn.bind(this, function (c) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        dir,
                        n,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(HexaTest.Domain.CellModel))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        dir = 0;
                                            $step = 1;
                                            continue;
                                    }
                                    case 1: {
                                        if ( dir < 6 ) {
                                                $step = 2;
                                                continue;
                                            }
                                        $step = 7;
                                        continue;
                                    }
                                    case 2: {
                                        n = { };
                                            if (this._cells.tryGetValue(c.Neighbor(dir), n)) {
                                                $step = 3;
                                                continue;
                                            } 
                                            $step = 5;
                                            continue;
                                    }
                                    case 3: {
                                        $enumerator.current = n.v;
                                            $step = 4;
                                            return true;
                                    }
                                    case 4: {
                                        $step = 5;
                                        continue;
                                    }
                                    case 5: {
                                        $step = 6;
                                        continue;
                                    }
                                    case 6: {
                                        dir = (dir + 1) | 0;
                                        $step = 1;
                                        continue;
                                    }
                                    case 7: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            /*HexaTest.Domain.BoardModel.Neighbors end.*/

            /*HexaTest.Domain.BoardModel.Clone start.*/
            Clone: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.BoardModel#Clone", this ); }

                var $t;
                var copy = new HexaTest.Domain.BoardModel();
                $t = Bridge.getEnumerator(this._cells.Values);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        var nc = new HexaTest.Domain.CellModel(cell.Coord);
                        if (cell.Stack != null) {
                            nc.Stack = cell.Stack.Clone();
                        }
                        copy.Add(nc);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return copy;
            },
            /*HexaTest.Domain.BoardModel.Clone end.*/


        }
    });
    /*HexaTest.Domain.BoardModel end.*/

    /*HexaTest.Domain.CellModel start.*/
    Bridge.define("HexaTest.Domain.CellModel", {
        fields: {
            Coord: null,
            Stack: null
        },
        props: {
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.CellModel#IsEmpty#get", this ); }

                    return this.Stack == null || this.Stack.IsEmpty;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.CellModel#init", this ); }

                this.Coord = new HexaTest.Domain.HexCoord();
            },
            ctor: function (coord) {
if ( TRACE ) { TRACE( "HexaTest.Domain.CellModel#ctor", this ); }

                this.$initialize();
                this.Coord = coord;
            }
        }
    });
    /*HexaTest.Domain.CellModel end.*/

    /*HexaTest.Domain.HexColorId start.*/
    Bridge.define("HexaTest.Domain.HexColorId", {
        $kind: 6,
        statics: {
            fields: {
                Green: 0,
                Magenta: 1,
                Yellow: 2,
                Red: 3,
                Cyan: 4,
                Blue: 5,
                Purple: 6,
                White: 7
            }
        }
    });
    /*HexaTest.Domain.HexColorId end.*/

    /*HexaTest.Domain.HexCoord start.*/
    Bridge.define("HexaTest.Domain.HexCoord", {
        $kind: 4,
        statics: {
            fields: {
                Directions: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#init", this ); }

                    this.Directions = System.Array.init([
                        new HexaTest.Domain.HexCoord.$ctor1(1, 0), 
                        new HexaTest.Domain.HexCoord.$ctor1(1, -1), 
                        new HexaTest.Domain.HexCoord.$ctor1(0, -1), 
                        new HexaTest.Domain.HexCoord.$ctor1(-1, 0), 
                        new HexaTest.Domain.HexCoord.$ctor1(-1, 1), 
                        new HexaTest.Domain.HexCoord.$ctor1(0, 1)
                    ], HexaTest.Domain.HexCoord);
                }
            },
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#getDefaultValue", this ); }
 return new HexaTest.Domain.HexCoord(); }
            }
        },
        fields: {
            Q: 0,
            R: 0
        },
        props: {
            S: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#S#get", this ); }

                    return ((((-this.Q) | 0) - this.R) | 0);
                }
            }
        },
        ctors: {
            $ctor1: function (q, r) {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#$ctor1", this ); }

                this.$initialize();
                this.Q = q;
                this.R = r;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*HexaTest.Domain.HexCoord.Neighbor start.*/
            Neighbor: function (dir) {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#Neighbor", this ); }

                var d = HexaTest.Domain.HexCoord.Directions[((((dir % 6) + 6) | 0)) % 6];
                return new HexaTest.Domain.HexCoord.$ctor1(((this.Q + d.Q) | 0), ((this.R + d.R) | 0));
            },
            /*HexaTest.Domain.HexCoord.Neighbor end.*/

            /*HexaTest.Domain.HexCoord.ToWorld start.*/
            ToWorld: function (size) {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#ToWorld", this ); }

                var x = size * 1.5 * this.Q;
                var z = size * Math.sqrt(3.0) * (this.R + this.Q * 0.5);
                return new pc.Vec3( x, 0.0, z );
            },
            /*HexaTest.Domain.HexCoord.ToWorld end.*/

            /*HexaTest.Domain.HexCoord.DistanceToCenter start.*/
            DistanceToCenter: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#DistanceToCenter", this ); }

                return UnityEngine.Mathf.Max(Math.abs(this.Q), Math.abs(this.R), Math.abs(this.S));
            },
            /*HexaTest.Domain.HexCoord.DistanceToCenter end.*/

            /*HexaTest.Domain.HexCoord.equals start.*/
            equals: function (obj) {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#equals", this ); }

                var h = new HexaTest.Domain.HexCoord();
                return ((h = Bridge.is(obj, HexaTest.Domain.HexCoord) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, HexaTest.Domain.HexCoord), HexaTest.Domain.HexCoord)) : null)) != null && h.Q === this.Q && h.R === this.R;
            },
            /*HexaTest.Domain.HexCoord.equals end.*/

            /*HexaTest.Domain.HexCoord.getHashCode start.*/
            getHashCode: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#getHashCode", this ); }

                return ((Bridge.Int.mul(this.Q, 31) + this.R) | 0);
            },
            /*HexaTest.Domain.HexCoord.getHashCode end.*/

            /*HexaTest.Domain.HexCoord.toString start.*/
            toString: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#toString", this ); }

                return System.String.format("({0},{1})", Bridge.box(this.Q, System.Int32), Bridge.box(this.R, System.Int32));
            },
            /*HexaTest.Domain.HexCoord.toString end.*/

            $clone: function (to) {
if ( TRACE ) { TRACE( "HexaTest.Domain.HexCoord#$clone", this ); }

                var s = to || new HexaTest.Domain.HexCoord();
                s.Q = this.Q;
                s.R = this.R;
                return s;
            }
        },
        overloads: {
            "Equals(object)": "equals",
            "GetHashCode()": "getHashCode",
            "ToString()": "toString"
        }
    });
    /*HexaTest.Domain.HexCoord end.*/

    /*HexaTest.Domain.StackModel start.*/
    Bridge.define("HexaTest.Domain.StackModel", {
        fields: {
            _discs: null
        },
        props: {
            Discs: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#Discs#get", this ); }

                    return this._discs;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#Count#get", this ); }

                    return this._discs.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#IsEmpty#get", this ); }

                    return this._discs.Count === 0;
                }
            },
            TopColor: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#TopColor#get", this ); }

                    return this._discs.getItem(((this._discs.Count - 1) | 0));
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#init", this ); }

                this._discs = new (System.Collections.Generic.List$1(HexaTest.Domain.HexColorId)).ctor();
            }
        },
        methods: {
            /*HexaTest.Domain.StackModel.Set start.*/
            Set: function (discs) {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#Set", this ); }

                this._discs.clear();
                this._discs.AddRange(discs);
            },
            /*HexaTest.Domain.StackModel.Set end.*/

            /*HexaTest.Domain.StackModel.Push start.*/
            Push: function (c) {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#Push", this ); }

                this._discs.add(c);
            },
            /*HexaTest.Domain.StackModel.Push end.*/

            /*HexaTest.Domain.StackModel.PushRange start.*/
            PushRange: function (c, n) {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#PushRange", this ); }

                for (var i = 0; i < n; i = (i + 1) | 0) {
                    this._discs.add(c);
                }
            },
            /*HexaTest.Domain.StackModel.PushRange end.*/

            /*HexaTest.Domain.StackModel.TopRunLength start.*/
            TopRunLength: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#TopRunLength", this ); }

                if (this.IsEmpty) {
                    return 0;
                }
                var c = this.TopColor;
                var n = 0;
                for (var i = (this._discs.Count - 1) | 0; i >= 0 && System.Nullable.eq(this._discs.getItem(i), c); i = (i - 1) | 0) {
                    n = (n + 1) | 0;
                }
                return n;
            },
            /*HexaTest.Domain.StackModel.TopRunLength end.*/

            /*HexaTest.Domain.StackModel.RemoveTop start.*/
            RemoveTop: function (n) {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#RemoveTop", this ); }

                n = n < this._discs.Count ? n : this._discs.Count;
                this._discs.RemoveRange(((this._discs.Count - n) | 0), n);
            },
            /*HexaTest.Domain.StackModel.RemoveTop end.*/

            /*HexaTest.Domain.StackModel.Clone start.*/
            Clone: function () {
if ( TRACE ) { TRACE( "HexaTest.Domain.StackModel#Clone", this ); }

                var s = new HexaTest.Domain.StackModel();
                s._discs.AddRange(this._discs);
                return s;
            },
            /*HexaTest.Domain.StackModel.Clone end.*/


        }
    });
    /*HexaTest.Domain.StackModel end.*/

    /*HexaTest.Integrations.PlayworksBridge start.*/
    Bridge.define("HexaTest.Integrations.PlayworksBridge", {
        statics: {
            fields: {
                FallbackStoreUrl: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexaTest.Integrations.PlayworksBridge#init", this ); }

                    this.FallbackStoreUrl = "";
                }
            },
            methods: {
                /*HexaTest.Integrations.PlayworksBridge.InstallFullGame:static start.*/
                InstallFullGame: function () {
if ( TRACE ) { TRACE( "HexaTest.Integrations.PlayworksBridge#InstallFullGame", this ); }

                    Luna.Unity.Playable.InstallFullGame();
                },
                /*HexaTest.Integrations.PlayworksBridge.InstallFullGame:static end.*/

                /*HexaTest.Integrations.PlayworksBridge.GameEnded:static start.*/
                GameEnded: function () {
if ( TRACE ) { TRACE( "HexaTest.Integrations.PlayworksBridge#GameEnded", this ); }

                    Luna.Unity.LifeCycle.GameEnded();
                },
                /*HexaTest.Integrations.PlayworksBridge.GameEnded:static end.*/


            }
        }
    });
    /*HexaTest.Integrations.PlayworksBridge end.*/

    /*HexaTest.Logic.MergeStep start.*/
    Bridge.define("HexaTest.Logic.MergeStep");
    /*HexaTest.Logic.MergeStep end.*/

    /*HexaTest.Logic.GameTimer start.*/
    Bridge.define("HexaTest.Logic.GameTimer", {
        fields: {
            Duration: 0,
            Elapsed: 0,
            Running: false
        },
        props: {
            Progress01: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.GameTimer#Progress01#get", this ); }

                    return this.Duration > 0.0 ? Math.max(0, Math.min(1, this.Elapsed / this.Duration)) : 1.0;
                }
            },
            Remaining01: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.GameTimer#Remaining01#get", this ); }

                    return 1.0 - this.Progress01;
                }
            },
            Expired: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.GameTimer#Expired#get", this ); }

                    return this.Elapsed >= this.Duration;
                }
            }
        },
        methods: {
            /*HexaTest.Logic.GameTimer.Begin start.*/
            Begin: function (duration) {
if ( TRACE ) { TRACE( "HexaTest.Logic.GameTimer#Begin", this ); }

                this.Duration = duration;
                this.Elapsed = 0.0;
                this.Running = true;
            },
            /*HexaTest.Logic.GameTimer.Begin end.*/

            /*HexaTest.Logic.GameTimer.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.GameTimer#Stop", this ); }

                this.Running = false;
            },
            /*HexaTest.Logic.GameTimer.Stop end.*/

            /*HexaTest.Logic.GameTimer.Tick start.*/
            Tick: function (dt) {
if ( TRACE ) { TRACE( "HexaTest.Logic.GameTimer#Tick", this ); }

                if (!this.Running) {
                    return false;
                }

                this.Elapsed += dt;
                if (this.Elapsed >= this.Duration) {
                    this.Elapsed = this.Duration;
                    this.Running = false;
                    return true;
                }
                return false;
            },
            /*HexaTest.Logic.GameTimer.Tick end.*/


        }
    });
    /*HexaTest.Logic.GameTimer end.*/

    /*HexaTest.Logic.MergeResolver start.*/
    Bridge.define("HexaTest.Logic.MergeResolver", {
        statics: {
            fields: {
                SafetyCap: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.MergeResolver#init", this ); }

                    this.SafetyCap = 100000;
                }
            },
            methods: {
                /*HexaTest.Logic.MergeResolver.RunTransferPhase:static start.*/
                RunTransferPhase: function (board, seeds, steps, guard) {
if ( TRACE ) { TRACE( "HexaTest.Logic.MergeResolver#RunTransferPhase", this ); }

                    var $t, $t1, $t2;
                    var Enqueue = null;
                    var queue = new (System.Collections.Generic.Queue$1(HexaTest.Domain.HexCoord)).ctor();
                    var queued = new (System.Collections.Generic.HashSet$1(HexaTest.Domain.HexCoord)).ctor();


                    Enqueue = function (c) {
                        if (queued.add(c)) {
                            queue.Enqueue(c);
                        }
                    };

                    $t = Bridge.getEnumerator(seeds);
                    try {
                        while ($t.moveNext()) {
                            var s = $t.Current;
                            Enqueue(s);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    while (queue.Count > 0) {
                        if (((guard.v = (guard.v + 1) | 0)) > HexaTest.Logic.MergeResolver.SafetyCap) {
                            return;
                        }

                        var coord = queue.Dequeue();
                        queued.remove(coord);
                        var cell = { };

                        if (!board.TryGet(coord, cell) || cell.v.IsEmpty) {
                            continue;
                        }

                        var topColor = cell.v.Stack.TopColor;
                        if (topColor == null) {
                            continue;
                        }
                        var color = System.Nullable.getValue(topColor);
                        var pulled = false;

                        $t1 = Bridge.getEnumerator(board.Neighbors(coord), HexaTest.Domain.CellModel);
                        try {
                            while ($t1.moveNext()) {
                                var nb = $t1.Current;
                                if (nb.IsEmpty || nb.Stack.TopColor !== color) {
                                    continue;
                                }

                                var k = nb.Stack.TopRunLength();
                                steps.add(($t2 = new HexaTest.Logic.TransferStep(), $t2.From = nb.Coord, $t2.To = coord, $t2.Color = color, $t2.Count = k, $t2));
                                nb.Stack.RemoveTop(k);
                                cell.v.Stack.PushRange(color, k);
                                pulled = true;
                                Enqueue(nb.Coord);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }

                        if (pulled) {
                            Enqueue(coord);
                        }
                    }
                },
                /*HexaTest.Logic.MergeResolver.RunTransferPhase:static end.*/

                /*HexaTest.Logic.MergeResolver.RunClearPhase:static start.*/
                RunClearPhase: function (board, clearCount, steps) {
if ( TRACE ) { TRACE( "HexaTest.Logic.MergeResolver#RunClearPhase", this ); }

                    var $t, $t1;
                    var cleared = new (System.Collections.Generic.List$1(HexaTest.Domain.HexCoord)).ctor();

                    $t = Bridge.getEnumerator(board.Cells, HexaTest.Domain.CellModel);
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current;
                            if (cell.IsEmpty) {
                                continue;
                            }

                            var run = cell.Stack.TopRunLength();
                            if (run < clearCount) {
                                continue;
                            }

                            steps.add(($t1 = new HexaTest.Logic.ClearStep(), $t1.Cell = cell.Coord, $t1.Color = cell.Stack.TopColor, $t1.Count = run, $t1));
                            cell.Stack.RemoveTop(run);
                            if (!cell.IsEmpty) {
                                cleared.add(cell.Coord);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    return cleared;
                },
                /*HexaTest.Logic.MergeResolver.RunClearPhase:static end.*/


            }
        },
        methods: {
            /*HexaTest.Logic.MergeResolver.Resolve start.*/
            Resolve: function (board, start, clearCount) {
if ( TRACE ) { TRACE( "HexaTest.Logic.MergeResolver#Resolve", this ); }

                var steps = new (System.Collections.Generic.List$1(HexaTest.Logic.MergeStep)).ctor();
                var seeds = function (_o1) {
                        _o1.add(start);
                        return _o1;
                    }(new (System.Collections.Generic.List$1(HexaTest.Domain.HexCoord)).ctor());
                var guard = { v : 0 };

                while (seeds.Count > 0) {
                    HexaTest.Logic.MergeResolver.RunTransferPhase(board, seeds, steps, guard);
                    seeds = HexaTest.Logic.MergeResolver.RunClearPhase(board, clearCount, steps);
                }

                return steps;
            },
            /*HexaTest.Logic.MergeResolver.Resolve end.*/


        }
    });
    /*HexaTest.Logic.MergeResolver end.*/

    /*HexaTest.UI.PackshotView start.*/
    Bridge.define("HexaTest.UI.PackshotView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ReferenceWidth: 0,
                ReferenceHeight: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#init", this ); }

                    this.ReferenceWidth = 1080.0;
                    this.ReferenceHeight = 1920.0;
                }
            },
            methods: {
                /*HexaTest.UI.PackshotView.NewImage:static start.*/
                NewImage: function (name, parent, sprite) {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#NewImage", this ); }

                    var go = new UnityEngine.GameObject.$ctor4(name, [UnityEngine.RectTransform, UnityEngine.CanvasRenderer, UnityEngine.UI.Image]);
                    go.transform.SetParent(parent, false);
                    var image = go.GetComponent(UnityEngine.UI.Image);
                    image.sprite = sprite;
                    image.raycastTarget = false;
                    return image;
                },
                /*HexaTest.UI.PackshotView.NewImage:static end.*/

                /*HexaTest.UI.PackshotView.CreateClickCatcher:static start.*/
                CreateClickCatcher: function (parent) {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#CreateClickCatcher", this ); }

                    var go = new UnityEngine.GameObject.$ctor4("Install Click Catcher", [UnityEngine.RectTransform, UnityEngine.CanvasRenderer, UnityEngine.UI.Image, UnityEngine.UI.Button]);
                    go.transform.SetParent(parent, false);
                    var rect = go.GetComponent(UnityEngine.RectTransform);
                    HexaTest.UI.PackshotView.Stretch(rect, 0.0);
                    var image = go.GetComponent(UnityEngine.UI.Image);
                    image.color = new pc.Color( 0, 0, 0, 0 );
                    image.raycastTarget = true;
                    return go.GetComponent(UnityEngine.UI.Button);
                },
                /*HexaTest.UI.PackshotView.CreateClickCatcher:static end.*/

                /*HexaTest.UI.PackshotView.Stretch:static start.*/
                Stretch: function (rect, inset) {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#Stretch", this ); }

                    rect.anchorMin = pc.Vec2.ZERO.clone();
                    rect.anchorMax = pc.Vec2.ONE.clone();
                    rect.offsetMin = new pc.Vec2( inset, inset );
                    rect.offsetMax = new pc.Vec2( -inset, -inset );
                    rect.pivot = new pc.Vec2( 0.5, 0.5 );
                },
                /*HexaTest.UI.PackshotView.Stretch:static end.*/

                /*HexaTest.UI.PackshotView.CreateHexMaskSprite:static start.*/
                CreateHexMaskSprite: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#CreateHexMaskSprite", this ); }

                    var size = 256;
                    var texture = new UnityEngine.Texture2D.$ctor11(size, size, UnityEngine.TextureFormat.RGBA32, false);
                    var center = new pc.Vec2( 127.5, 127.5 );
                    var radius = 120.32;
                    var points = System.Array.init(6, function (){
                        return new UnityEngine.Vector2();
                    }, UnityEngine.Vector2);
                    for (var i = 0; i < points.length; i = (i + 1) | 0) {
                        var angle = UnityEngine.Mathf.Deg2Rad * (60.0 * i + 30.0);
                        points[i] = center.$clone().add( new pc.Vec2( Math.cos(angle), Math.sin(angle) ).scale( radius ) );
                    }

                    for (var y = 0; y < size; y = (y + 1) | 0) {
                        for (var x = 0; x < size; x = (x + 1) | 0) {
                            var inside = HexaTest.UI.PackshotView.IsInsidePolygon(new pc.Vec2( x, y ), points);
                            texture.SetPixel(x, y, inside ? new pc.Color( 1, 1, 1, 1 ) : new pc.Color( 0, 0, 0, 0 ));
                        }
                    }
                    texture.Apply();
                    return UnityEngine.Sprite.Create$1(texture, new UnityEngine.Rect.$ctor1(0.0, 0.0, size, size), new pc.Vec2( 0.5, 0.5 ), 100.0);
                },
                /*HexaTest.UI.PackshotView.CreateHexMaskSprite:static end.*/

                /*HexaTest.UI.PackshotView.IsInsidePolygon:static start.*/
                IsInsidePolygon: function (point, polygon) {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#IsInsidePolygon", this ); }

                    var inside = false;
                    for (var i = 0, j = (polygon.length - 1) | 0; i < polygon.length; j = Bridge.identity(i, ((i = (i + 1) | 0)))) {
                        var crosses = polygon[i].y > point.y !== polygon[j].y > point.y;
                        if (crosses) {
                            var x = (polygon[j].x - polygon[i].x) * (point.y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x;
                            if (point.x < x) {
                                inside = !inside;
                            }
                        }
                    }
                    return inside;
                },
                /*HexaTest.UI.PackshotView.IsInsidePolygon:static end.*/


            }
        },
        fields: {
            background: null,
            logo: null,
            playNow: null,
            revealStartSize: 0,
            revealEndPadding: 0,
            revealDuration: 0,
            logoAnchoredPosition: null,
            logoSize: null,
            playNowAnchoredPosition: null,
            playNowSize: null,
            _maskRect: null,
            _gameEndedSent: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#init", this ); }

                this.logoAnchoredPosition = new UnityEngine.Vector2();
                this.logoSize = new UnityEngine.Vector2();
                this.playNowAnchoredPosition = new UnityEngine.Vector2();
                this.playNowSize = new UnityEngine.Vector2();
                this.revealStartSize = 120.0;
                this.revealEndPadding = 900.0;
                this.revealDuration = 0.65;
                this.logoAnchoredPosition = pc.Vec2.ZERO.clone();
                this.logoSize = new pc.Vec2( 760.0, 300.0 );
                this.playNowAnchoredPosition = new pc.Vec2( 0.0, 250.0 );
                this.playNowSize = new pc.Vec2( 560.0, 170.0 );
            }
        },
        methods: {
            /*HexaTest.UI.PackshotView.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#Show", this ); }

                this.Show$1(this.background, this.logo, this.playNow);
            },
            /*HexaTest.UI.PackshotView.Show end.*/

            /*HexaTest.UI.PackshotView.Show$1 start.*/
            Show$1: function (background, logo, playNow) {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#Show$1", this ); }

                this._gameEndedSent = false;
                this.Build(background, logo, playNow);
                this.StartCoroutine$1(this.Reveal());
            },
            /*HexaTest.UI.PackshotView.Show$1 end.*/

            /*HexaTest.UI.PackshotView.Build start.*/
            Build: function (background, logo, playNow) {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#Build", this ); }

                var $t, $t1, $t2, $t3;
                var canvasGo = new UnityEngine.GameObject.$ctor4("PackshotCanvas", [UnityEngine.Canvas, UnityEngine.UI.CanvasScaler, UnityEngine.UI.GraphicRaycaster]);
                canvasGo.transform.SetParent(this.transform, false);

                var canvas = canvasGo.GetComponent(UnityEngine.Canvas);
                canvas.renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;
                canvas.sortingOrder = 1000;

                var scaler = canvasGo.GetComponent(UnityEngine.UI.CanvasScaler);
                scaler.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
                scaler.referenceResolution = new pc.Vec2( HexaTest.UI.PackshotView.ReferenceWidth, HexaTest.UI.PackshotView.ReferenceHeight );
                scaler.matchWidthOrHeight = 0.5;

                var maskGo = new UnityEngine.GameObject.$ctor4("Hex Reveal Mask", [UnityEngine.RectTransform, UnityEngine.UI.Image, UnityEngine.UI.Mask]);
                maskGo.transform.SetParent(canvasGo.transform, false);
                this._maskRect = maskGo.GetComponent(UnityEngine.RectTransform);
                this._maskRect.anchorMin = ($t = new pc.Vec2( 0.5, 0.5 ), this._maskRect.anchorMax = $t.$clone(), $t);
                this._maskRect.pivot = new pc.Vec2( 0.5, 0.5 );
                this._maskRect.anchoredPosition = pc.Vec2.ZERO.clone();
                this._maskRect.sizeDelta = pc.Vec2.ONE.clone().scale( this.revealStartSize );

                var maskImage = maskGo.GetComponent(UnityEngine.UI.Image);
                maskImage.sprite = HexaTest.UI.PackshotView.CreateHexMaskSprite();
                maskImage.color = new pc.Color( 1, 1, 1, 1 );
                maskGo.GetComponent(UnityEngine.UI.Mask).showMaskGraphic = false;

                var content = new UnityEngine.GameObject.$ctor3("Packshot Content", UnityEngine.RectTransform);
                content.transform.SetParent(maskGo.transform, false);
                var contentRect = content.GetComponent(UnityEngine.RectTransform);
                contentRect.anchorMin = ($t1 = new pc.Vec2( 0.5, 0.5 ), contentRect.anchorMax = $t1.$clone(), $t1);
                contentRect.pivot = new pc.Vec2( 0.5, 0.5 );
                contentRect.anchoredPosition = pc.Vec2.ZERO.clone();
                contentRect.sizeDelta = new pc.Vec2( HexaTest.UI.PackshotView.ReferenceWidth, HexaTest.UI.PackshotView.ReferenceHeight );

                var bg = HexaTest.UI.PackshotView.NewImage("Background", content.transform, background);
                HexaTest.UI.PackshotView.Stretch(bg.rectTransform, 0.0);
                bg.preserveAspect = false;

                if (logo != null) {
                    var logoImage = HexaTest.UI.PackshotView.NewImage("Logo", content.transform, logo);
                    var rect = logoImage.rectTransform;
                    rect.anchorMin = ($t2 = new pc.Vec2( 0.5, 0.5 ), rect.anchorMax = $t2.$clone(), $t2);
                    rect.pivot = new pc.Vec2( 0.5, 0.5 );
                    rect.anchoredPosition = this.logoAnchoredPosition.$clone();
                    rect.sizeDelta = this.logoSize.$clone();
                    logoImage.preserveAspect = true;
                }

                if (playNow != null) {
                    var buttonImage = HexaTest.UI.PackshotView.NewImage("Play Now Button", content.transform, playNow);
                    var rect1 = buttonImage.rectTransform;
                    rect1.anchorMin = ($t3 = new pc.Vec2( 0.5, 0.0 ), rect1.anchorMax = $t3.$clone(), $t3);
                    rect1.pivot = new pc.Vec2( 0.5, 0.5 );
                    rect1.anchoredPosition = this.playNowAnchoredPosition.$clone();
                    rect1.sizeDelta = this.playNowSize.$clone();
                    buttonImage.preserveAspect = true;
                    buttonImage.raycastTarget = true;
                    var button = buttonImage.gameObject.AddComponent(UnityEngine.UI.Button);
                    button.onClick.AddListener(HexaTest.Integrations.PlayworksBridge.InstallFullGame);
                }

                var clickCatcher = HexaTest.UI.PackshotView.CreateClickCatcher(canvasGo.transform);
                clickCatcher.onClick.AddListener(HexaTest.Integrations.PlayworksBridge.InstallFullGame);
            },
            /*HexaTest.UI.PackshotView.Build end.*/

            /*HexaTest.UI.PackshotView.Reveal start.*/
            Reveal: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#Reveal", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = HexaTest.View.Tweener.Tween(this.revealDuration, HexaTest.View.Easing.OutBack, Bridge.fn.bind(this, function (k) {
                                            var size = pc.math.lerp(this.revealStartSize, this.GetRevealEndSize(), k);
                                            this._maskRect.sizeDelta = new pc.Vec2( size, size );
                                        }));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._maskRect.sizeDelta = pc.Vec2.ONE.clone().scale( this.GetRevealEndSize() );
                                        this.CompleteReveal();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.UI.PackshotView.Reveal end.*/

            /*HexaTest.UI.PackshotView.CompleteReveal start.*/
            CompleteReveal: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#CompleteReveal", this ); }

                if (this._gameEndedSent) {
                    return;
                }
                this._gameEndedSent = true;
                HexaTest.Integrations.PlayworksBridge.GameEnded();
            },
            /*HexaTest.UI.PackshotView.CompleteReveal end.*/

            /*HexaTest.UI.PackshotView.GetRevealEndSize start.*/
            GetRevealEndSize: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.PackshotView#GetRevealEndSize", this ); }

                var diagonal = Math.sqrt(4852800.0);
                return diagonal / 0.45 + this.revealEndPadding;
            },
            /*HexaTest.UI.PackshotView.GetRevealEndSize end.*/


        },
        overloads: {
            "Show(Sprite, Sprite, Sprite)": "Show$1"
        }
    });
    /*HexaTest.UI.PackshotView end.*/

    /*HexaTest.UI.TimerHudView start.*/
    Bridge.define("HexaTest.UI.TimerHudView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                NeedleUpAngle: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#init", this ); }

                    this.NeedleUpAngle = -8.0;
                }
            },
            methods: {
                /*HexaTest.UI.TimerHudView.UpdateOverlayFill:static start.*/
                UpdateOverlayFill: function (source, overlay) {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#UpdateOverlayFill", this ); }

                    if (UnityEngine.MonoBehaviour.op_Equality(source, null) || UnityEngine.MonoBehaviour.op_Equality(overlay, null)) {
                        return;
                    }
                    overlay.fillAmount = source.fillAmount;
                    overlay.fillMethod = source.fillMethod;
                    overlay.fillOrigin = source.fillOrigin;
                    overlay.fillClockwise = source.fillClockwise;
                },
                /*HexaTest.UI.TimerHudView.UpdateOverlayFill:static end.*/


            }
        },
        fields: {
            duration: 0,
            alarmThreshold: 0,
            alarmPulseScaleUpDuration: 0,
            alarmPulseScaleDownDuration: 0,
            alarmPulseInterval: 0,
            alarmPulseScale: 0,
            alarmPulseScaleStep: 0,
            alarmPulseMaxScale: 0,
            endThrowDuration: 0,
            endThrowSettleDuration: 0,
            endThrowVerticalAmplitude: 0,
            endThrowHorizontalAmplitude: 0,
            endThrowFrequency: 0,
            fillGradient: null,
            trackAlarmColor: null,
            alphaTintMaterial: null,
            fillImage: null,
            trackImage: null,
            timerBgImage: null,
            timerNippleImage: null,
            watchRect: null,
            timerRootRect: null,
            watchImage: null,
            needleRect: null,
            radialImage: null,
            _timer: null,
            _popLoop: null,
            _running: false,
            _alarm: false,
            _ended: false,
            _baseTimerScale: null,
            _baseNeedleScale: null,
            _currentPulseScale: 0,
            _timerBgOverlay: null,
            _timerNippleOverlay: null,
            _trackOverlay: null,
            _fillOverlay: null,
            _alphaTintMaterial: null
        },
        events: {
            Expired: null
        },
        props: {
            AnimatedTimerRect: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#AnimatedTimerRect#get", this ); }

                    return UnityEngine.Component.op_Inequality(this.timerRootRect, null) ? this.timerRootRect : this.watchRect;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#init", this ); }

                this.trackAlarmColor = new UnityEngine.Color();
                this._baseTimerScale = new UnityEngine.Vector3();
                this._baseNeedleScale = new UnityEngine.Vector3();
                this.duration = 25.0;
                this.alarmThreshold = 0.25;
                this.alarmPulseScaleUpDuration = 0.22;
                this.alarmPulseScaleDownDuration = 0.18;
                this.alarmPulseInterval = 0.6;
                this.alarmPulseScale = 1.08;
                this.alarmPulseScaleStep = 0.03;
                this.alarmPulseMaxScale = 1.22;
                this.endThrowDuration = 1.2;
                this.endThrowSettleDuration = 0.2;
                this.endThrowVerticalAmplitude = 18.0;
                this.endThrowHorizontalAmplitude = 5.0;
                this.endThrowFrequency = 34.0;
                this.trackAlarmColor = new pc.Color( 0.85, 0.15, 0.15, 1 );
                this._timer = new HexaTest.Logic.GameTimer();
                this._baseTimerScale = new pc.Vec3( 1, 1, 1 );
                this._baseNeedleScale = new pc.Vec3( 1, 1, 1 );
            }
        },
        methods: {
            /*HexaTest.UI.TimerHudView.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#Begin", this ); }

                this.EnsureTimerFillOverlay();
                this._timer.Begin(this.duration);
                this._running = true;
                this.SetTimerFill(1.0, this.EvaluateFillColor());
                if (UnityEngine.MonoBehaviour.op_Inequality(this.radialImage, null)) {
                    this.radialImage.fillAmount = 0.0;
                    this.radialImage.enabled = false;
                }
            },
            /*HexaTest.UI.TimerHudView.Begin end.*/

            /*HexaTest.UI.TimerHudView.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#Update", this ); }

                if (!this._running || this._ended) {
                    return;
                }

                var justExpired = this._timer.Tick(UnityEngine.Time.deltaTime);
                var remaining = this._timer.Remaining01;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.fillImage, null)) {
                    this.SetTimerFill(remaining, this.EvaluateFillColor());
                }

                if (UnityEngine.Component.op_Inequality(this.needleRect, null)) {
                    this.needleRect.localEulerAngles = new pc.Vec3( 0.0, 0.0, HexaTest.UI.TimerHudView.NeedleUpAngle + 360.0 * this._timer.Progress01 );
                }

                if (!this._alarm && remaining <= this.alarmThreshold) {
                    this.EnterAlarm();
                }
                if (this._alarm && UnityEngine.MonoBehaviour.op_Inequality(this.radialImage, null)) {
                    this.radialImage.fillAmount = Math.max(0, Math.min(1, this._timer.Progress01 - (1.0 - this.alarmThreshold)));
                }

                if (justExpired) {
                    this._ended = true;
                    this.StartCoroutine$1(this.EndSequence());
                }
            },
            /*HexaTest.UI.TimerHudView.Update end.*/

            /*HexaTest.UI.TimerHudView.EnterAlarm start.*/
            EnterAlarm: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EnterAlarm", this ); }

                this._alarm = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.radialImage, null)) {
                    this.radialImage.enabled = true;
                }
                this.CaptureAlarmBaseState();
                if (UnityEngine.Component.op_Inequality(this.AnimatedTimerRect, null)) {
                    this._popLoop = this.StartCoroutine$1(this.WatchPopLoop());
                }
            },
            /*HexaTest.UI.TimerHudView.EnterAlarm end.*/

            /*HexaTest.UI.TimerHudView.CaptureAlarmBaseState start.*/
            CaptureAlarmBaseState: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#CaptureAlarmBaseState", this ); }

                var animatedRect = this.AnimatedTimerRect;
                this._baseTimerScale = UnityEngine.Component.op_Inequality(animatedRect, null) ? animatedRect.localScale.$clone() : new pc.Vec3( 1, 1, 1 );
                this._baseNeedleScale = UnityEngine.Component.op_Inequality(this.needleRect, null) ? this.needleRect.localScale.$clone() : new pc.Vec3( 1, 1, 1 );
                this._currentPulseScale = this.alarmPulseScale;
                this.EnsureAlarmOverlays();
            },
            /*HexaTest.UI.TimerHudView.CaptureAlarmBaseState end.*/

            /*HexaTest.UI.TimerHudView.WatchPopLoop start.*/
            WatchPopLoop: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#WatchPopLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    animatedRect,
                    pulseScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    animatedRect = this.AnimatedTimerRect;
                                        if (UnityEngine.Component.op_Equality(animatedRect, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    if ( true ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 3: {
                                    pulseScale = { v : this._currentPulseScale };
                                        $enumerator.current = HexaTest.View.Tweener.Tween(this.alarmPulseScaleUpDuration, HexaTest.View.Easing.OutBack, (function ($me, pulseScale) {
                                            return Bridge.fn.bind($me, function (k) {
                                                this.ApplyAlarmPulse(k, pulseScale.v);
                                            });
                                        })(this, pulseScale));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = HexaTest.View.Tweener.Tween(this.alarmPulseScaleDownDuration, HexaTest.View.Easing.OutQuad, (function ($me, pulseScale) {
                                            return Bridge.fn.bind($me, function (k) {
                                                this.ApplyAlarmPulse(1.0 - k, pulseScale.v);
                                            });
                                        })(this, pulseScale));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this._currentPulseScale = UnityEngine.Mathf.Min(this._currentPulseScale + this.alarmPulseScaleStep, this.alarmPulseMaxScale);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.alarmPulseInterval);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 7: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.UI.TimerHudView.WatchPopLoop end.*/

            /*HexaTest.UI.TimerHudView.ApplyAlarmPulse start.*/
            ApplyAlarmPulse: function (k, pulseScale) {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#ApplyAlarmPulse", this ); }

                var animatedRect = this.AnimatedTimerRect;
                if (UnityEngine.Component.op_Inequality(animatedRect, null)) {
                    animatedRect.localScale = new pc.Vec3().lerp( this._baseTimerScale, this._baseTimerScale.$clone().clone().scale( pulseScale ), k );
                }
                if (UnityEngine.Component.op_Inequality(this.needleRect, null)) {
                    this.needleRect.localScale = new pc.Vec3().lerp( this._baseNeedleScale, this._baseNeedleScale.$clone().clone().scale( pulseScale ), k );
                }

                this.SetOverlayColor(this._timerBgOverlay, k);
                this.SetOverlayColor(this._timerNippleOverlay, k);
                this.SetOverlayColor(this._trackOverlay, k);
            },
            /*HexaTest.UI.TimerHudView.ApplyAlarmPulse end.*/

            /*HexaTest.UI.TimerHudView.EnsureAlarmOverlays start.*/
            EnsureAlarmOverlays: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EnsureAlarmOverlays", this ); }

                this.EnsureAlphaTintMaterial();

                this._timerBgOverlay = this.EnsureOverlay(this.timerBgImage, this._timerBgOverlay, "Alarm Overlay");
                this._timerNippleOverlay = this.EnsureOverlay(this.timerNippleImage, this._timerNippleOverlay, "Alarm Overlay");
                this._trackOverlay = this.EnsureOverlay(this.trackImage, this._trackOverlay, "Alarm Overlay");
            },
            /*HexaTest.UI.TimerHudView.EnsureAlarmOverlays end.*/

            /*HexaTest.UI.TimerHudView.EnsureTimerFillOverlay start.*/
            EnsureTimerFillOverlay: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EnsureTimerFillOverlay", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.fillImage, null)) {
                    return;
                }
                this.EnsureAlphaTintMaterial();
                this._fillOverlay = this.EnsureOverlay(this.fillImage, this._fillOverlay, "Fill Color Overlay");
                this.fillImage.color = new pc.Color( 0, 0, 0, 0 );
            },
            /*HexaTest.UI.TimerHudView.EnsureTimerFillOverlay end.*/

            /*HexaTest.UI.TimerHudView.EnsureAlphaTintMaterial start.*/
            EnsureAlphaTintMaterial: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EnsureAlphaTintMaterial", this ); }

                if (this._alphaTintMaterial != null) {
                    return;
                }

                this._alphaTintMaterial = this.alphaTintMaterial != null ? this.alphaTintMaterial : UnityEngine.Resources.Load(UnityEngine.Material, "HexUIAlphaTint");
                if (this._alphaTintMaterial != null) {
                    return;
                }

                var shader = UnityEngine.Shader.Find("Hexa/UIAlphaTint");
                if (shader != null) {
                    this._alphaTintMaterial = new UnityEngine.Material.$ctor2(shader);
                }
            },
            /*HexaTest.UI.TimerHudView.EnsureAlphaTintMaterial end.*/

            /*HexaTest.UI.TimerHudView.EnsureOverlay start.*/
            EnsureOverlay: function (source, overlay, name) {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EnsureOverlay", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(source, null)) {
                    return null;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(overlay, null)) {
                    return overlay;
                }

                var go = new UnityEngine.GameObject.$ctor4(name, [UnityEngine.RectTransform, UnityEngine.CanvasRenderer, UnityEngine.UI.Image]);
                go.transform.SetParent(source.transform, false);
                if (UnityEngine.MonoBehaviour.op_Equality(source, this.trackImage)) {
                    go.transform.SetAsFirstSibling();
                } else {
                    go.transform.SetAsLastSibling();
                }

                var rect = go.GetComponent(UnityEngine.RectTransform);
                rect.anchorMin = pc.Vec2.ZERO.clone();
                rect.anchorMax = pc.Vec2.ONE.clone();
                rect.offsetMin = pc.Vec2.ZERO.clone();
                rect.offsetMax = pc.Vec2.ZERO.clone();
                rect.pivot = source.rectTransform.pivot.$clone();

                overlay = go.GetComponent(UnityEngine.UI.Image);
                overlay.sprite = source.sprite;
                overlay.type = source.type;
                overlay.preserveAspect = source.preserveAspect;
                overlay.fillCenter = source.fillCenter;
                overlay.fillMethod = source.fillMethod;
                overlay.fillOrigin = source.fillOrigin;
                overlay.fillClockwise = source.fillClockwise;
                overlay.fillAmount = source.fillAmount;
                overlay.raycastTarget = false;
                overlay.material = this._alphaTintMaterial;
                HexaTest.UI.TimerHudView.UpdateOverlayFill(source, overlay);
                this.SetOverlayColor(overlay, 0.0);
                return overlay;
            },
            /*HexaTest.UI.TimerHudView.EnsureOverlay end.*/

            /*HexaTest.UI.TimerHudView.SetOverlayColor start.*/
            SetOverlayColor: function (overlay, alpha) {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#SetOverlayColor", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(overlay, null)) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(overlay, this._trackOverlay)) {
                    HexaTest.UI.TimerHudView.UpdateOverlayFill(this.trackImage, overlay);
                } else {
                    if (UnityEngine.MonoBehaviour.op_Equality(overlay, this._timerBgOverlay)) {
                        HexaTest.UI.TimerHudView.UpdateOverlayFill(this.timerBgImage, overlay);
                    } else {
                        if (UnityEngine.MonoBehaviour.op_Equality(overlay, this._timerNippleOverlay)) {
                            HexaTest.UI.TimerHudView.UpdateOverlayFill(this.timerNippleImage, overlay);
                        }
                    }
                }
                overlay.color = new pc.Color( this.trackAlarmColor.r, this.trackAlarmColor.g, this.trackAlarmColor.b, this.trackAlarmColor.a * alpha );
            },
            /*HexaTest.UI.TimerHudView.SetOverlayColor end.*/

            /*HexaTest.UI.TimerHudView.SetTimerFill start.*/
            SetTimerFill: function (amount, color) {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#SetTimerFill", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.fillImage, null)) {
                    return;
                }
                this.EnsureTimerFillOverlay();
                this.fillImage.fillAmount = amount;
                this.fillImage.color = new pc.Color( 0, 0, 0, 0 );
                if (UnityEngine.MonoBehaviour.op_Equality(this._fillOverlay, null)) {
                    return;
                }
                HexaTest.UI.TimerHudView.UpdateOverlayFill(this.fillImage, this._fillOverlay);
                this._fillOverlay.fillAmount = amount;
                this._fillOverlay.color = color.$clone();
            },
            /*HexaTest.UI.TimerHudView.SetTimerFill end.*/

            /*HexaTest.UI.TimerHudView.EvaluateFillColor start.*/
            EvaluateFillColor: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EvaluateFillColor", this ); }

                if (this.fillGradient != null && this.fillGradient.colorKeys.length > 0) {
                    return this.fillGradient.evaluate(this._timer.Progress01);
                }
                return new pc.Color( 1, 1, 1, 1 );
            },
            /*HexaTest.UI.TimerHudView.EvaluateFillColor end.*/

            /*HexaTest.UI.TimerHudView.EndSequence start.*/
            EndSequence: function () {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#EndSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    animatedRect,
                    basePos,
                    fillFrom,
                    lastPos,
                    throwDuration,
                    t,
                    k,
                    y,
                    x,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this._popLoop != null) {
                                            this.StopCoroutine$2(this._popLoop);
                                        }
                                        this.ApplyAlarmPulse(0.0, this._currentPulseScale);
                                        this.SetFinalAlarmColor(1.0);

                                        this.SetTimerFill(1.0, this.EvaluateFillColor());

                                        animatedRect = this.AnimatedTimerRect;
                                        basePos = UnityEngine.Component.op_Inequality(animatedRect, null) ? animatedRect.anchoredPosition.$clone() : pc.Vec2.ZERO.clone();
                                        fillFrom = UnityEngine.MonoBehaviour.op_Inequality(this._fillOverlay, null) ? this._fillOverlay.color.$clone() : new pc.Color( 1, 1, 1, 1 );

                                        lastPos = basePos.$clone();
                                        throwDuration = UnityEngine.Mathf.Max(0.01, this.endThrowDuration);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < throwDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / throwDuration));
                                        if (UnityEngine.Component.op_Inequality(animatedRect, null)) {
                                            y = Math.sin(t * this.endThrowFrequency) * this.endThrowVerticalAmplitude;
                                            y += Math.sin(t * this.endThrowFrequency * 1.73 + 0.8) * this.endThrowVerticalAmplitude * 0.35;
                                            x = Math.sin(t * this.endThrowFrequency * 0.61 + 1.4) * this.endThrowHorizontalAmplitude;
                                            lastPos = basePos.$clone().add( new pc.Vec2( x, y ) );
                                            animatedRect.anchoredPosition = lastPos.$clone();
                                        }

                                        this.SetFinalAlarmColor(1.0);
                                        this.SetTimerFill(1.0, pc.Color.lerp( fillFrom, this.trackAlarmColor, k ));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.Component.op_Inequality(animatedRect, null)) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = HexaTest.View.Tweener.Tween(UnityEngine.Mathf.Max(0.01, this.endThrowSettleDuration), HexaTest.View.Easing.OutQuad, function (k1) {
                                            animatedRect.anchoredPosition = new pc.Vec2().lerp( lastPos, basePos, k1 );
                                        });
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    animatedRect.anchoredPosition = basePos.$clone();
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    this.ApplyAlarmPulse(0.0, this._currentPulseScale);

                                        !Bridge.staticEquals(this.Expired, null) ? this.Expired() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HexaTest.UI.TimerHudView.EndSequence end.*/

            /*HexaTest.UI.TimerHudView.SetFinalAlarmColor start.*/
            SetFinalAlarmColor: function (alpha) {
if ( TRACE ) { TRACE( "HexaTest.UI.TimerHudView#SetFinalAlarmColor", this ); }

                this.SetOverlayColor(this._timerBgOverlay, alpha);
                this.SetOverlayColor(this._timerNippleOverlay, alpha);
                this.SetOverlayColor(this._trackOverlay, alpha);
            },
            /*HexaTest.UI.TimerHudView.SetFinalAlarmColor end.*/


        }
    });
    /*HexaTest.UI.TimerHudView end.*/

    /*HexaTest.View.BoardView start.*/
    Bridge.define("HexaTest.View.BoardView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cfg: null,
            _assets: null,
            _tiles: null,
            _stacks: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#init", this ); }

                this._tiles = new (System.Collections.Generic.Dictionary$2(HexaTest.Domain.HexCoord,UnityEngine.Transform)).ctor();
                this._stacks = new (System.Collections.Generic.Dictionary$2(HexaTest.Domain.HexCoord,HexaTest.View.StackView)).ctor();
            }
        },
        methods: {
            /*HexaTest.View.BoardView.Build start.*/
            Build: function (cfg, assets, board) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#Build", this ); }

                this._cfg = cfg;
                this._assets = assets;

                this.BuildPlatform(board);
                this.BuildTiles(board);
            },
            /*HexaTest.View.BoardView.Build end.*/

            /*HexaTest.View.BoardView.BuildPlatform start.*/
            BuildPlatform: function (board) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#BuildPlatform", this ); }

                var $t, $t1, $t2;
                var root = new UnityEngine.GameObject.$ctor2("Platform").transform;
                root.SetParent(this.transform, false);
                var t = this._cfg.baseLayerThickness;

                for (var k = 0; k < this._assets.BaseLayerMeshes.length; k = (k + 1) | 0) {
                    var layer = new UnityEngine.GameObject.$ctor2(System.String.format("Layer_{0}", [Bridge.box(k, System.Int32)])).transform;
                    layer.SetParent(root, false);
                    layer.localPosition = new pc.Vec3( 0.0, -t * 0.5 - k * t, 0.0 );

                    var mesh = ($t = this._assets.BaseLayerMeshes)[k];
                    var mat = ($t1 = this._assets.BaseLayerMaterials)[k];
                    $t2 = Bridge.getEnumerator(board.Cells, HexaTest.Domain.CellModel);
                    try {
                        while ($t2.moveNext()) {
                            var cell = $t2.Current;
                            var go = new UnityEngine.GameObject.$ctor2("Slab");
                            go.transform.SetParent(layer, false);
                            go.transform.localPosition = cell.Coord.ToWorld(this._cfg.cellSize);
                            go.AddComponent(UnityEngine.MeshFilter).sharedMesh = mesh;
                            go.AddComponent(UnityEngine.MeshRenderer).sharedMaterial = mat;
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*HexaTest.View.BoardView.BuildPlatform end.*/

            /*HexaTest.View.BoardView.BuildTiles start.*/
            BuildTiles: function (board) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#BuildTiles", this ); }

                var $t;
                var root = new UnityEngine.GameObject.$ctor2("Tiles").transform;
                root.SetParent(this.transform, false);

                $t = Bridge.getEnumerator(board.Cells, HexaTest.Domain.CellModel);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        var go = new UnityEngine.GameObject.$ctor2(System.String.format("Tile_{0}", [cell.Coord]));
                        go.transform.SetParent(root, false);
                        var p = this.WorldOf(cell.Coord);
                        go.transform.localPosition = new pc.Vec3( p.x, this._cfg.tileRaise, p.z );
                        go.AddComponent(UnityEngine.MeshFilter).sharedMesh = this._assets.TileMesh;
                        go.AddComponent(UnityEngine.MeshRenderer).sharedMaterial = this._assets.TileMaterial;
                        this._tiles.setItem(cell.Coord, go.transform);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexaTest.View.BoardView.BuildTiles end.*/

            /*HexaTest.View.BoardView.WorldOf start.*/
            WorldOf: function (c) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#WorldOf", this ); }

                return c.ToWorld(this._cfg.cellSize);
            },
            /*HexaTest.View.BoardView.WorldOf end.*/

            /*HexaTest.View.BoardView.Register start.*/
            Register: function (c, view) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#Register", this ); }

                this._stacks.setItem(c, view);
            },
            /*HexaTest.View.BoardView.Register end.*/

            /*HexaTest.View.BoardView.GetStack start.*/
            GetStack: function (c) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#GetStack", this ); }

                var v = { };
                return this._stacks.tryGetValue(c, v) ? v.v : null;
            },
            /*HexaTest.View.BoardView.GetStack end.*/

            /*HexaTest.View.BoardView.RemoveStack start.*/
            RemoveStack: function (c) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#RemoveStack", this ); }

                var v = { };
                if (this._stacks.tryGetValue(c, v)) {
                    this._stacks.remove(c);
                    if (UnityEngine.MonoBehaviour.op_Inequality(v.v, null)) {
                        UnityEngine.MonoBehaviour.Destroy(v.v.gameObject);
                    }
                }
            },
            /*HexaTest.View.BoardView.RemoveStack end.*/

            /*HexaTest.View.BoardView.SetHighlight start.*/
            SetHighlight: function (c, on) {
if ( TRACE ) { TRACE( "HexaTest.View.BoardView#SetHighlight", this ); }

                var tile = { };
                if (this._tiles.tryGetValue(c, tile)) {
                    tile.v.GetComponent(UnityEngine.MeshRenderer).sharedMaterial = on ? this._assets.TileHighlightMaterial : this._assets.TileMaterial;
                }
            },
            /*HexaTest.View.BoardView.SetHighlight end.*/


        }
    });
    /*HexaTest.View.BoardView end.*/

    /*HexaTest.View.Easing start.*/
    Bridge.define("HexaTest.View.Easing", {
        statics: {
            methods: {
                /*HexaTest.View.Easing.Linear:static start.*/
                Linear: function (t) {
if ( TRACE ) { TRACE( "HexaTest.View.Easing#Linear", this ); }

                    return t;
                },
                /*HexaTest.View.Easing.Linear:static end.*/

                /*HexaTest.View.Easing.OutQuad:static start.*/
                OutQuad: function (t) {
if ( TRACE ) { TRACE( "HexaTest.View.Easing#OutQuad", this ); }

                    return 1.0 - (1.0 - t) * (1.0 - t);
                },
                /*HexaTest.View.Easing.OutQuad:static end.*/

                /*HexaTest.View.Easing.InOutQuad:static start.*/
                InOutQuad: function (t) {
if ( TRACE ) { TRACE( "HexaTest.View.Easing#InOutQuad", this ); }

                    return t < 0.5 ? 2.0 * t * t : 1.0 - Math.pow(-2.0 * t + 2.0, 2.0) * 0.5;
                },
                /*HexaTest.View.Easing.InOutQuad:static end.*/

                /*HexaTest.View.Easing.OutBack:static start.*/
                OutBack: function (t) {
if ( TRACE ) { TRACE( "HexaTest.View.Easing#OutBack", this ); }

                    var c1 = 1.70158;
                    var c3 = 2.70158;
                    var p = t - 1.0;
                    return 1.0 + c3 * p * p * p + c1 * p * p;
                },
                /*HexaTest.View.Easing.OutBack:static end.*/


            }
        }
    });
    /*HexaTest.View.Easing end.*/

    /*HexaTest.View.HexAssets start.*/
    Bridge.define("HexaTest.View.HexAssets", {
        statics: {
            methods: {
                /*HexaTest.View.HexAssets.MakeMaterial:static start.*/
                MakeMaterial: function (baseMat, c) {
if ( TRACE ) { TRACE( "HexaTest.View.HexAssets#MakeMaterial", this ); }

                    var m = baseMat != null ? new UnityEngine.Material.$ctor1(baseMat) : new UnityEngine.Material.$ctor2(UnityEngine.Shader.Find("Sprites/Default"));
                    m.color = c.$clone();
                    if (m.HasProperty$1("_Glossiness")) {
                        m.SetFloat$1("_Glossiness", 0.25);
                    }
                    m.enableInstancing = true;
                    return m;
                },
                /*HexaTest.View.HexAssets.MakeMaterial:static end.*/


            }
        },
        fields: {
            DiscMesh: null,
            DiscSeparatorMesh: null,
            TileMesh: null,
            TileMaterial: null,
            TileHighlightMaterial: null,
            BaseLayerMeshes: null,
            BaseLayerMaterials: null,
            _colorMaterials: null,
            _separatorMaterials: null
        },
        ctors: {
            ctor: function (cfg, litMaterial) {
if ( TRACE ) { TRACE( "HexaTest.View.HexAssets#ctor", this ); }

                if (litMaterial === void 0) { litMaterial = null; }

                this.$initialize();
                this.DiscMesh = HexaTest.View.HexMeshBuilder.BuildRounded(cfg.DiscRadius, cfg.discThickness, cfg.discRound, cfg.cornerSegments);
                this.DiscSeparatorMesh = HexaTest.View.HexMeshBuilder.BuildRounded(cfg.DiscRadius * 1.012, cfg.discSeparatorThickness, cfg.discRound, cfg.cornerSegments);
                this.TileMesh = HexaTest.View.HexMeshBuilder.BuildRounded(cfg.TileRadius, cfg.tileThickness, cfg.tileRound, cfg.cornerSegments);

                var baseMat = litMaterial != null ? litMaterial : UnityEngine.Resources.Load(UnityEngine.Material, "HexBaseMaterial");
                this.TileMaterial = HexaTest.View.HexAssets.MakeMaterial(baseMat, cfg.tileColor);
                this.TileHighlightMaterial = HexaTest.View.HexAssets.MakeMaterial(baseMat, pc.Color.lerp( cfg.tileColor, new pc.Color( 1, 1, 1, 1 ), 0.5 ));

                this._colorMaterials = System.Array.init(cfg.palette.length, null, UnityEngine.Material);
                this._separatorMaterials = System.Array.init(cfg.palette.length, null, UnityEngine.Material);
                for (var i = 0; i < this._colorMaterials.length; i = (i + 1) | 0) {
                    this._colorMaterials[i] = HexaTest.View.HexAssets.MakeMaterial(baseMat, cfg.palette[i]);
                    this._separatorMaterials[i] = HexaTest.View.HexAssets.MakeMaterial(baseMat, pc.Color.lerp( cfg.palette[i], new pc.Color( 0, 0, 0, 1 ), cfg.discSeparatorDarken ));
                }

                var layers = cfg.baseLayerColors != null ? cfg.baseLayerColors.length : 0;
                this.BaseLayerMeshes = System.Array.init(layers, null, UnityEngine.Mesh);
                this.BaseLayerMaterials = System.Array.init(layers, null, UnityEngine.Material);
                for (var k = 0; k < layers; k = (k + 1) | 0) {
                    var radius = cfg.cellSize + k * cfg.edgeRim;
                    this.BaseLayerMeshes[k] = HexaTest.View.HexMeshBuilder.BuildRounded(radius, cfg.baseLayerThickness, cfg.baseRound, cfg.cornerSegments);
                    this.BaseLayerMaterials[k] = HexaTest.View.HexAssets.MakeMaterial(baseMat, cfg.baseLayerColors[k]);
                }
            }
        },
        methods: {
            /*HexaTest.View.HexAssets.MaterialFor start.*/
            MaterialFor: function (id) {
if ( TRACE ) { TRACE( "HexaTest.View.HexAssets#MaterialFor", this ); }

                var i = id;
                return (i >= 0 && i < this._colorMaterials.length) ? this._colorMaterials[i] : this.TileMaterial;
            },
            /*HexaTest.View.HexAssets.MaterialFor end.*/

            /*HexaTest.View.HexAssets.SeparatorMaterialFor start.*/
            SeparatorMaterialFor: function (id) {
if ( TRACE ) { TRACE( "HexaTest.View.HexAssets#SeparatorMaterialFor", this ); }

                var i = id;
                return (i >= 0 && i < this._separatorMaterials.length) ? this._separatorMaterials[i] : this.TileMaterial;
            },
            /*HexaTest.View.HexAssets.SeparatorMaterialFor end.*/


        }
    });
    /*HexaTest.View.HexAssets end.*/

    /*HexaTest.View.HexMeshBuilder start.*/
    Bridge.define("HexaTest.View.HexMeshBuilder", {
        statics: {
            methods: {
                /*HexaTest.View.HexMeshBuilder.Build:static start.*/
                Build: function (radius, thickness) {
if ( TRACE ) { TRACE( "HexaTest.View.HexMeshBuilder#Build", this ); }

                    return HexaTest.View.HexMeshBuilder.BuildRounded(radius, thickness, 0.0, 1);
                },
                /*HexaTest.View.HexMeshBuilder.Build:static end.*/

                /*HexaTest.View.HexMeshBuilder.BuildRounded:static start.*/
                BuildRounded: function (radius, thickness, round01, cornerSegments) {
if ( TRACE ) { TRACE( "HexaTest.View.HexMeshBuilder#BuildRounded", this ); }

                    var ring = HexaTest.View.HexMeshBuilder.BuildRing(radius, Math.max(0, Math.min(1, round01)), UnityEngine.Mathf.Max(1, cornerSegments));
                    return HexaTest.View.HexMeshBuilder.BuildPrism(ring, thickness);
                },
                /*HexaTest.View.HexMeshBuilder.BuildRounded:static end.*/

                /*HexaTest.View.HexMeshBuilder.BuildRing:static start.*/
                BuildRing: function (radius, round, segments) {
if ( TRACE ) { TRACE( "HexaTest.View.HexMeshBuilder#BuildRing", this ); }

                    var corners = System.Array.init(6, function (){
                        return new UnityEngine.Vector2();
                    }, UnityEngine.Vector2);
                    for (var i = 0; i < 6; i = (i + 1) | 0) {
                        var a = UnityEngine.Mathf.Deg2Rad * (60.0 * i);
                        corners[i] = new pc.Vec2( radius * Math.cos(a), radius * Math.sin(a) );
                    }

                    var ring = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                    if (round <= 0.0001) {
                        ring.AddRange(corners);
                        return ring;
                    }

                    var t = radius * 0.5 * round;
                    for (var i1 = 0; i1 < 6; i1 = (i1 + 1) | 0) {
                        var c = corners[i1].$clone();
                        var prev = corners[(((i1 + 5) | 0)) % 6].$clone();
                        var next = corners[(((i1 + 1) | 0)) % 6].$clone();
                        var p1 = c.$clone().add( (prev.$clone().sub( c )).clone().normalize().$clone().scale( t ) );
                        var p2 = c.$clone().add( (next.$clone().sub( c )).clone().normalize().$clone().scale( t ) );
                        for (var j = 0; j <= segments; j = (j + 1) | 0) {
                            var u = j / segments;
                            ring.add(HexaTest.View.HexMeshBuilder.QuadBezier(p1, c, p2, u));
                        }
                    }
                    return ring;
                },
                /*HexaTest.View.HexMeshBuilder.BuildRing:static end.*/

                /*HexaTest.View.HexMeshBuilder.Radial:static start.*/
                Radial: function (p) {
if ( TRACE ) { TRACE( "HexaTest.View.HexMeshBuilder#Radial", this ); }

                    var v = new pc.Vec3( p.x, 0.0, p.y );
                    return v.lengthSq() > 1E-06 ? v.clone().normalize().$clone() : new pc.Vec3( 0, 0, 1 );
                },
                /*HexaTest.View.HexMeshBuilder.Radial:static end.*/

                /*HexaTest.View.HexMeshBuilder.QuadBezier:static start.*/
                QuadBezier: function (a, b, c, u) {
if ( TRACE ) { TRACE( "HexaTest.View.HexMeshBuilder#QuadBezier", this ); }

                    var iu = 1.0 - u;
                    return a.$clone().scale( iu * iu ).add( b.$clone().scale( 2.0 * iu * u ) ).add( c.$clone().scale( u * u ) );
                },
                /*HexaTest.View.HexMeshBuilder.QuadBezier:static end.*/

                /*HexaTest.View.HexMeshBuilder.BuildPrism:static start.*/
                BuildPrism: function (ring, thickness) {
if ( TRACE ) { TRACE( "HexaTest.View.HexMeshBuilder#BuildPrism", this ); }

                    var $t;
                    var n = ring.Count;
                    var half = thickness * 0.5;
                    var verts = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                    var tris = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                    var normals = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();

                    var topCenter = verts.Count;
                    verts.add(new pc.Vec3( 0, half, 0 ));
                    normals.add(pc.Vec3.UP.clone());
                    var topRing = verts.Count;
                    for (var i = 0; i < n; i = (i + 1) | 0) {
                        verts.add(new pc.Vec3( ring.getItem(i).$clone().x, half, ring.getItem(i).$clone().y ));
                        normals.add(pc.Vec3.UP.clone());
                    }
                    for (var i1 = 0; i1 < n; i1 = (i1 + 1) | 0) {
                        tris.add(topCenter);
                        tris.add(((topRing + (((i1 + 1) | 0)) % n) | 0));
                        tris.add(((topRing + i1) | 0));
                    }

                    var botCenter = verts.Count;
                    verts.add(new pc.Vec3( 0, -half, 0 ));
                    normals.add(pc.Vec3.DOWN.clone());
                    var botRing = verts.Count;
                    for (var i2 = 0; i2 < n; i2 = (i2 + 1) | 0) {
                        verts.add(new pc.Vec3( ring.getItem(i2).$clone().x, -half, ring.getItem(i2).$clone().y ));
                        normals.add(pc.Vec3.DOWN.clone());
                    }
                    for (var i3 = 0; i3 < n; i3 = (i3 + 1) | 0) {
                        tris.add(botCenter);
                        tris.add(((botRing + i3) | 0));
                        tris.add(((botRing + (((i3 + 1) | 0)) % n) | 0));
                    }

                    var sideTop = verts.Count;
                    for (var i4 = 0; i4 < n; i4 = (i4 + 1) | 0) {
                        verts.add(new pc.Vec3( ring.getItem(i4).$clone().x, half, ring.getItem(i4).$clone().y ));
                        normals.add(HexaTest.View.HexMeshBuilder.Radial(ring.getItem(i4)));
                    }
                    var sideBot = verts.Count;
                    for (var i5 = 0; i5 < n; i5 = (i5 + 1) | 0) {
                        verts.add(new pc.Vec3( ring.getItem(i5).$clone().x, -half, ring.getItem(i5).$clone().y ));
                        normals.add(HexaTest.View.HexMeshBuilder.Radial(ring.getItem(i5)));
                    }
                    for (var i6 = 0; i6 < n; i6 = (i6 + 1) | 0) {
                        var a = (sideTop + i6) | 0, b = (sideTop + (((i6 + 1) | 0)) % n) | 0;
                        var c = (sideBot + i6) | 0, d = (sideBot + (((i6 + 1) | 0)) % n) | 0;
                        tris.add(a);
                        tris.add(c);
                        tris.add(b);
                        tris.add(b);
                        tris.add(c);
                        tris.add(d);
                    }

                    var mesh = ($t = new UnityEngine.Mesh.ctor(), $t.name = "Hex", $t);
                    mesh.SetVertices(verts);
                    mesh.SetNormals(normals);
                    mesh.SetTriangles(tris, 0);
                    mesh.RecalculateBounds();
                    return mesh;
                },
                /*HexaTest.View.HexMeshBuilder.BuildPrism:static end.*/


            }
        }
    });
    /*HexaTest.View.HexMeshBuilder end.*/

    /*HexaTest.View.StackFactory start.*/
    Bridge.define("HexaTest.View.StackFactory", {
        fields: {
            _cfg: null,
            _assets: null
        },
        ctors: {
            ctor: function (cfg, assets) {
if ( TRACE ) { TRACE( "HexaTest.View.StackFactory#ctor", this ); }

                this.$initialize();
                this._cfg = cfg;
                this._assets = assets;
            }
        },
        methods: {
            /*HexaTest.View.StackFactory.Create start.*/
            Create: function (name, model, worldPos, parent) {
if ( TRACE ) { TRACE( "HexaTest.View.StackFactory#Create", this ); }

                var go = new UnityEngine.GameObject.$ctor2(name);
                go.transform.SetParent(parent, false);
                go.transform.position = worldPos.$clone();
                var view = go.AddComponent(HexaTest.View.StackView);
                view.Init(this._cfg, this._assets);
                view.Build(model);
                return view;
            },
            /*HexaTest.View.StackFactory.Create end.*/


        }
    });
    /*HexaTest.View.StackFactory end.*/

    /*HexaTest.View.StackView start.*/
    Bridge.define("HexaTest.View.StackView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cfg: null,
            _assets: null,
            _discs: null,
            _collider: null,
            IsTray: false
        },
        props: {
            DiscCount: {
                get: function () {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#DiscCount#get", this ); }

                    return this._discs.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#init", this ); }

                this._discs = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
            }
        },
        methods: {
            /*HexaTest.View.StackView.Init start.*/
            Init: function (cfg, assets) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#Init", this ); }

                this._cfg = cfg;
                this._assets = assets;
                this._collider = this.gameObject.AddComponent(UnityEngine.BoxCollider);
            },
            /*HexaTest.View.StackView.Init end.*/

            /*HexaTest.View.StackView.Build start.*/
            Build: function (model) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#Build", this ); }

                var $t;
                for (var i = (this._discs.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this._discs.getItem(i).gameObject);
                }
                this._discs.clear();
                $t = Bridge.getEnumerator(model.Discs, HexaTest.Domain.HexColorId);
                try {
                    while ($t.moveNext()) {
                        var color = $t.Current;
                        this.CreateDisc(color);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.UpdateCollider();
            },
            /*HexaTest.View.StackView.Build end.*/

            /*HexaTest.View.StackView.CreateDisc start.*/
            CreateDisc: function (color) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#CreateDisc", this ); }

                var go = new UnityEngine.GameObject.$ctor2("Disc");
                go.transform.SetParent(this.transform, false);
                go.transform.localPosition = this.SlotLocalPos(this._discs.Count);
                go.AddComponent(UnityEngine.MeshFilter).sharedMesh = this._assets.DiscMesh;
                go.AddComponent(UnityEngine.MeshRenderer).sharedMaterial = this._assets.MaterialFor(color);
                if (this._discs.Count > 0) {
                    this.AddSeparatorBand(go.transform, color);
                }
                this._discs.add(go.transform);
                return go.transform;
            },
            /*HexaTest.View.StackView.CreateDisc end.*/

            /*HexaTest.View.StackView.AddSeparatorBand start.*/
            AddSeparatorBand: function (disc, color) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#AddSeparatorBand", this ); }

                if (this._cfg.discSeparatorThickness <= 0.0) {
                    return;
                }

                var band = new UnityEngine.GameObject.$ctor2("Separator Band");
                band.transform.SetParent(disc, false);
                var halfDisc = this._cfg.discThickness * 0.5;
                var halfBand = this._cfg.discSeparatorThickness * 0.5;
                band.transform.localPosition = new pc.Vec3( 0.0, -halfDisc + halfBand, 0.0 );
                band.AddComponent(UnityEngine.MeshFilter).sharedMesh = this._assets.DiscSeparatorMesh;
                band.AddComponent(UnityEngine.MeshRenderer).sharedMaterial = this._assets.SeparatorMaterialFor(color);
            },
            /*HexaTest.View.StackView.AddSeparatorBand end.*/

            /*HexaTest.View.StackView.NextSlotWorld start.*/
            NextSlotWorld: function () {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#NextSlotWorld", this ); }

                return this.SlotWorld(this._discs.Count);
            },
            /*HexaTest.View.StackView.NextSlotWorld end.*/

            /*HexaTest.View.StackView.SlotWorld start.*/
            SlotWorld: function (index) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#SlotWorld", this ); }

                return this.transform.TransformPoint$1(this.SlotLocalPos(index));
            },
            /*HexaTest.View.StackView.SlotWorld end.*/

            /*HexaTest.View.StackView.DetachTop start.*/
            DetachTop: function () {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#DetachTop", this ); }

                var last = (this._discs.Count - 1) | 0;
                var t = this._discs.getItem(last);
                this._discs.removeAt(last);
                t.SetParent(null, true);
                this.UpdateCollider();
                return t;
            },
            /*HexaTest.View.StackView.DetachTop end.*/

            /*HexaTest.View.StackView.AttachTop start.*/
            AttachTop: function (disc) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#AttachTop", this ); }

                disc.SetParent(this.transform, true);
                disc.localRotation = pc.Quat.IDENTITY.clone();
                disc.localPosition = this.SlotLocalPos(this._discs.Count);
                this._discs.add(disc);
                this.UpdateCollider();
            },
            /*HexaTest.View.StackView.AttachTop end.*/

            /*HexaTest.View.StackView.RemoveTopForClear start.*/
            RemoveTopForClear: function () {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#RemoveTopForClear", this ); }

                var last = (this._discs.Count - 1) | 0;
                var t = this._discs.getItem(last);
                this._discs.removeAt(last);
                this.UpdateCollider();
                return t;
            },
            /*HexaTest.View.StackView.RemoveTopForClear end.*/

            /*HexaTest.View.StackView.SlotLocalPos start.*/
            SlotLocalPos: function (index) {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#SlotLocalPos", this ); }

                return new pc.Vec3( 0.0, index * this._cfg.discSpacing + this._cfg.discThickness * 0.5, 0.0 );
            },
            /*HexaTest.View.StackView.SlotLocalPos end.*/

            /*HexaTest.View.StackView.UpdateCollider start.*/
            UpdateCollider: function () {
if ( TRACE ) { TRACE( "HexaTest.View.StackView#UpdateCollider", this ); }

                if (UnityEngine.Component.op_Equality(this._collider, null)) {
                    return;
                }
                var h = UnityEngine.Mathf.Max(this._cfg.discThickness, this._discs.Count * this._cfg.discSpacing);
                this._collider.size = new pc.Vec3( this._cfg.DiscRadius * 1.7, h, this._cfg.DiscRadius * 1.7 );
                this._collider.center = new pc.Vec3( 0.0, h * 0.5, 0.0 );
                this._collider.enabled = this._discs.Count > 0;
            },
            /*HexaTest.View.StackView.UpdateCollider end.*/


        }
    });
    /*HexaTest.View.StackView end.*/

    /*HexaTest.View.Tweener start.*/
    Bridge.define("HexaTest.View.Tweener", {
        statics: {
            methods: {
                /*HexaTest.View.Tweener.Tween:static start.*/
                Tween: function (duration, ease, onStep) {
if ( TRACE ) { TRACE( "HexaTest.View.Tweener#Tween", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        t,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (duration <= 0.0) {
                                                $step = 1;
                                                continue;
                                            } 
                                            $step = 2;
                                            continue;
                                    }
                                    case 1: {
                                        onStep(1.0);
                                            return false;
                                        $step = 2;
                                        continue;
                                    }
                                    case 2: {
                                        t = 0.0;
                                        $step = 3;
                                        continue;
                                    }
                                    case 3: {
                                        if ( t < duration ) {
                                                $step = 4;
                                                continue;
                                            } 
                                            $step = 6;
                                            continue;
                                    }
                                    case 4: {
                                        t += UnityEngine.Time.deltaTime;
                                            onStep(ease(Math.max(0, Math.min(1, t / duration))));
                                            $enumerator.current = null;
                                            $step = 5;
                                            return true;
                                    }
                                    case 5: {
                                        
                                            $step = 3;
                                            continue;
                                    }
                                    case 6: {
                                        onStep(1.0);

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HexaTest.View.Tweener.Tween:static end.*/

                /*HexaTest.View.Tweener.PingPong:static start.*/
                PingPong: function (halfPeriod, ease, onStep) {
if ( TRACE ) { TRACE( "HexaTest.View.Tweener#PingPong", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if ( true ) {
                                                $step = 1;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 1: {
                                        $enumerator.current = HexaTest.View.Tweener.Tween(halfPeriod, ease, onStep);
                                            $step = 2;
                                            return true;
                                    }
                                    case 2: {
                                        $enumerator.current = HexaTest.View.Tweener.Tween(halfPeriod, ease, function (k) {
                                                onStep(1.0 - k);
                                            });
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        
                                            $step = 0;
                                            continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HexaTest.View.Tweener.PingPong:static end.*/


            }
        }
    });
    /*HexaTest.View.Tweener end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*HexaTest.Logic.ClearStep start.*/
    Bridge.define("HexaTest.Logic.ClearStep", {
        inherits: [HexaTest.Logic.MergeStep],
        fields: {
            Cell: null,
            Color: 0,
            Count: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.ClearStep#init", this ); }

                this.Cell = new HexaTest.Domain.HexCoord();
            }
        }
    });
    /*HexaTest.Logic.ClearStep end.*/

    /*HexaTest.Logic.TransferStep start.*/
    Bridge.define("HexaTest.Logic.TransferStep", {
        inherits: [HexaTest.Logic.MergeStep],
        fields: {
            From: null,
            To: null,
            Color: 0,
            Count: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexaTest.Logic.TransferStep#init", this ); }

                this.From = new HexaTest.Domain.HexCoord();
                this.To = new HexaTest.Domain.HexCoord();
            }
        }
    });
    /*HexaTest.Logic.TransferStep end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["HexaTest.Config","HexaTest.View","HexaTest.Domain","System","UnityEngine","System.Collections.Generic","System.Collections","UnityEngine.UI","HexaTest.Logic","HexaTest.App","HexaTest.UI"];

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*HexaTest.View.BoardView start.*/
    $m("HexaTest.View.BoardView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Build","t":8,"pi":[{"n":"cfg","pt":$n[0].GameConfig,"ps":0},{"n":"assets","pt":$n[1].HexAssets,"ps":1},{"n":"board","pt":$n[2].BoardModel,"ps":2}],"sn":"Build","rt":$n[3].Void,"p":[$n[0].GameConfig,$n[1].HexAssets,$n[2].BoardModel]},{"a":1,"n":"BuildPlatform","t":8,"pi":[{"n":"board","pt":$n[2].BoardModel,"ps":0}],"sn":"BuildPlatform","rt":$n[3].Void,"p":[$n[2].BoardModel]},{"a":1,"n":"BuildTiles","t":8,"pi":[{"n":"board","pt":$n[2].BoardModel,"ps":0}],"sn":"BuildTiles","rt":$n[3].Void,"p":[$n[2].BoardModel]},{"a":2,"n":"GetStack","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0}],"sn":"GetStack","rt":$n[1].StackView,"p":[$n[2].HexCoord]},{"a":2,"n":"Register","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0},{"n":"view","pt":$n[1].StackView,"ps":1}],"sn":"Register","rt":$n[3].Void,"p":[$n[2].HexCoord,$n[1].StackView]},{"a":2,"n":"RemoveStack","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0}],"sn":"RemoveStack","rt":$n[3].Void,"p":[$n[2].HexCoord]},{"a":2,"n":"SetHighlight","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0},{"n":"on","pt":$n[3].Boolean,"ps":1}],"sn":"SetHighlight","rt":$n[3].Void,"p":[$n[2].HexCoord,$n[3].Boolean]},{"a":2,"n":"WorldOf","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0}],"sn":"WorldOf","rt":$n[4].Vector3,"p":[$n[2].HexCoord]},{"a":1,"n":"_assets","t":4,"rt":$n[1].HexAssets,"sn":"_assets"},{"a":1,"n":"_cfg","t":4,"rt":$n[0].GameConfig,"sn":"_cfg"},{"a":1,"n":"_stacks","t":4,"rt":$n[5].Dictionary$2(HexaTest.Domain.HexCoord,HexaTest.View.StackView),"sn":"_stacks","ro":true},{"a":1,"n":"_tiles","t":4,"rt":$n[5].Dictionary$2(HexaTest.Domain.HexCoord,UnityEngine.Transform),"sn":"_tiles","ro":true}]}; }, $n);
    /*HexaTest.View.BoardView end.*/

    /*HexaTest.View.HexAssets start.*/
    $m("HexaTest.View.HexAssets", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].GameConfig,$n[4].Material],"pi":[{"n":"cfg","pt":$n[0].GameConfig,"ps":0},{"n":"litMaterial","dv":null,"o":true,"pt":$n[4].Material,"ps":1}],"sn":"ctor"},{"a":1,"n":"MakeMaterial","is":true,"t":8,"pi":[{"n":"baseMat","pt":$n[4].Material,"ps":0},{"n":"c","pt":$n[4].Color,"ps":1}],"sn":"MakeMaterial","rt":$n[4].Material,"p":[$n[4].Material,$n[4].Color]},{"a":2,"n":"MaterialFor","t":8,"pi":[{"n":"id","pt":$n[2].HexColorId,"ps":0}],"sn":"MaterialFor","rt":$n[4].Material,"p":[$n[2].HexColorId]},{"a":2,"n":"SeparatorMaterialFor","t":8,"pi":[{"n":"id","pt":$n[2].HexColorId,"ps":0}],"sn":"SeparatorMaterialFor","rt":$n[4].Material,"p":[$n[2].HexColorId]},{"a":2,"n":"BaseLayerMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"BaseLayerMaterials","ro":true},{"a":2,"n":"BaseLayerMeshes","t":4,"rt":System.Array.type(UnityEngine.Mesh),"sn":"BaseLayerMeshes","ro":true},{"a":2,"n":"DiscMesh","t":4,"rt":$n[4].Mesh,"sn":"DiscMesh","ro":true},{"a":2,"n":"DiscSeparatorMesh","t":4,"rt":$n[4].Mesh,"sn":"DiscSeparatorMesh","ro":true},{"a":2,"n":"TileHighlightMaterial","t":4,"rt":$n[4].Material,"sn":"TileHighlightMaterial","ro":true},{"a":2,"n":"TileMaterial","t":4,"rt":$n[4].Material,"sn":"TileMaterial","ro":true},{"a":2,"n":"TileMesh","t":4,"rt":$n[4].Mesh,"sn":"TileMesh","ro":true},{"a":1,"n":"_colorMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"_colorMaterials","ro":true},{"a":1,"n":"_separatorMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"_separatorMaterials","ro":true}]}; }, $n);
    /*HexaTest.View.HexAssets end.*/

    /*HexaTest.View.HexMeshBuilder start.*/
    $m("HexaTest.View.HexMeshBuilder", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Build","is":true,"t":8,"pi":[{"n":"radius","pt":$n[3].Single,"ps":0},{"n":"thickness","pt":$n[3].Single,"ps":1}],"sn":"Build","rt":$n[4].Mesh,"p":[$n[3].Single,$n[3].Single]},{"a":1,"n":"BuildPrism","is":true,"t":8,"pi":[{"n":"ring","pt":$n[5].List$1(UnityEngine.Vector2),"ps":0},{"n":"thickness","pt":$n[3].Single,"ps":1}],"sn":"BuildPrism","rt":$n[4].Mesh,"p":[$n[5].List$1(UnityEngine.Vector2),$n[3].Single]},{"a":1,"n":"BuildRing","is":true,"t":8,"pi":[{"n":"radius","pt":$n[3].Single,"ps":0},{"n":"round","pt":$n[3].Single,"ps":1},{"n":"segments","pt":$n[3].Int32,"ps":2}],"sn":"BuildRing","rt":$n[5].List$1(UnityEngine.Vector2),"p":[$n[3].Single,$n[3].Single,$n[3].Int32]},{"a":2,"n":"BuildRounded","is":true,"t":8,"pi":[{"n":"radius","pt":$n[3].Single,"ps":0},{"n":"thickness","pt":$n[3].Single,"ps":1},{"n":"round01","pt":$n[3].Single,"ps":2},{"n":"cornerSegments","pt":$n[3].Int32,"ps":3}],"sn":"BuildRounded","rt":$n[4].Mesh,"p":[$n[3].Single,$n[3].Single,$n[3].Single,$n[3].Int32]},{"a":1,"n":"QuadBezier","is":true,"t":8,"pi":[{"n":"a","pt":$n[4].Vector2,"ps":0},{"n":"b","pt":$n[4].Vector2,"ps":1},{"n":"c","pt":$n[4].Vector2,"ps":2},{"n":"u","pt":$n[3].Single,"ps":3}],"sn":"QuadBezier","rt":$n[4].Vector2,"p":[$n[4].Vector2,$n[4].Vector2,$n[4].Vector2,$n[3].Single]},{"a":1,"n":"Radial","is":true,"t":8,"pi":[{"n":"p","pt":$n[4].Vector2,"ps":0}],"sn":"Radial","rt":$n[4].Vector3,"p":[$n[4].Vector2]}]}; }, $n);
    /*HexaTest.View.HexMeshBuilder end.*/

    /*HexaTest.View.StackFactory start.*/
    $m("HexaTest.View.StackFactory", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].GameConfig,$n[1].HexAssets],"pi":[{"n":"cfg","pt":$n[0].GameConfig,"ps":0},{"n":"assets","pt":$n[1].HexAssets,"ps":1}],"sn":"ctor"},{"a":2,"n":"Create","t":8,"pi":[{"n":"name","pt":$n[3].String,"ps":0},{"n":"model","pt":$n[2].StackModel,"ps":1},{"n":"worldPos","pt":$n[4].Vector3,"ps":2},{"n":"parent","pt":$n[4].Transform,"ps":3}],"sn":"Create","rt":$n[1].StackView,"p":[$n[3].String,$n[2].StackModel,$n[4].Vector3,$n[4].Transform]},{"a":1,"n":"_assets","t":4,"rt":$n[1].HexAssets,"sn":"_assets","ro":true},{"a":1,"n":"_cfg","t":4,"rt":$n[0].GameConfig,"sn":"_cfg","ro":true}]}; }, $n);
    /*HexaTest.View.StackFactory end.*/

    /*HexaTest.View.StackView start.*/
    $m("HexaTest.View.StackView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddSeparatorBand","t":8,"pi":[{"n":"disc","pt":$n[4].Transform,"ps":0},{"n":"color","pt":$n[2].HexColorId,"ps":1}],"sn":"AddSeparatorBand","rt":$n[3].Void,"p":[$n[4].Transform,$n[2].HexColorId]},{"a":2,"n":"AttachTop","t":8,"pi":[{"n":"disc","pt":$n[4].Transform,"ps":0}],"sn":"AttachTop","rt":$n[3].Void,"p":[$n[4].Transform]},{"a":2,"n":"Build","t":8,"pi":[{"n":"model","pt":$n[2].StackModel,"ps":0}],"sn":"Build","rt":$n[3].Void,"p":[$n[2].StackModel]},{"a":1,"n":"CreateDisc","t":8,"pi":[{"n":"color","pt":$n[2].HexColorId,"ps":0}],"sn":"CreateDisc","rt":$n[4].Transform,"p":[$n[2].HexColorId]},{"a":2,"n":"DetachTop","t":8,"sn":"DetachTop","rt":$n[4].Transform},{"a":2,"n":"Init","t":8,"pi":[{"n":"cfg","pt":$n[0].GameConfig,"ps":0},{"n":"assets","pt":$n[1].HexAssets,"ps":1}],"sn":"Init","rt":$n[3].Void,"p":[$n[0].GameConfig,$n[1].HexAssets]},{"a":2,"n":"NextSlotWorld","t":8,"sn":"NextSlotWorld","rt":$n[4].Vector3},{"a":2,"n":"RemoveTopForClear","t":8,"sn":"RemoveTopForClear","rt":$n[4].Transform},{"a":1,"n":"SlotLocalPos","t":8,"pi":[{"n":"index","pt":$n[3].Int32,"ps":0}],"sn":"SlotLocalPos","rt":$n[4].Vector3,"p":[$n[3].Int32]},{"a":2,"n":"SlotWorld","t":8,"pi":[{"n":"index","pt":$n[3].Int32,"ps":0}],"sn":"SlotWorld","rt":$n[4].Vector3,"p":[$n[3].Int32]},{"a":1,"n":"UpdateCollider","t":8,"sn":"UpdateCollider","rt":$n[3].Void},{"a":2,"n":"DiscCount","t":16,"rt":$n[3].Int32,"g":{"a":2,"n":"get_DiscCount","t":8,"rt":$n[3].Int32,"fg":"DiscCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"DiscCount"},{"a":2,"n":"IsTray","t":4,"rt":$n[3].Boolean,"sn":"IsTray","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_assets","t":4,"rt":$n[1].HexAssets,"sn":"_assets"},{"a":1,"n":"_cfg","t":4,"rt":$n[0].GameConfig,"sn":"_cfg"},{"a":1,"n":"_collider","t":4,"rt":$n[4].BoxCollider,"sn":"_collider"},{"a":1,"n":"_discs","t":4,"rt":$n[5].List$1(UnityEngine.Transform),"sn":"_discs","ro":true}]}; }, $n);
    /*HexaTest.View.StackView end.*/

    /*HexaTest.View.Easing start.*/
    $m("HexaTest.View.Easing", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"InOutQuad","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Single,"ps":0}],"sn":"InOutQuad","rt":$n[3].Single,"p":[$n[3].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Linear","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Single,"ps":0}],"sn":"Linear","rt":$n[3].Single,"p":[$n[3].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OutBack","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Single,"ps":0}],"sn":"OutBack","rt":$n[3].Single,"p":[$n[3].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OutQuad","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Single,"ps":0}],"sn":"OutQuad","rt":$n[3].Single,"p":[$n[3].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HexaTest.View.Easing end.*/

    /*HexaTest.View.Tweener start.*/
    $m("HexaTest.View.Tweener", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"PingPong","is":true,"t":8,"pi":[{"n":"halfPeriod","pt":$n[3].Single,"ps":0},{"n":"ease","pt":Function,"ps":1},{"n":"onStep","pt":Function,"ps":2}],"sn":"PingPong","rt":$n[6].IEnumerator,"p":[$n[3].Single,Function,Function]},{"a":2,"n":"Tween","is":true,"t":8,"pi":[{"n":"duration","pt":$n[3].Single,"ps":0},{"n":"ease","pt":Function,"ps":1},{"n":"onStep","pt":Function,"ps":2}],"sn":"Tween","rt":$n[6].IEnumerator,"p":[$n[3].Single,Function,Function]}]}; }, $n);
    /*HexaTest.View.Tweener end.*/

    /*HexaTest.UI.PackshotView start.*/
    $m("HexaTest.UI.PackshotView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Build","t":8,"pi":[{"n":"background","pt":$n[4].Sprite,"ps":0},{"n":"logo","pt":$n[4].Sprite,"ps":1},{"n":"playNow","pt":$n[4].Sprite,"ps":2}],"sn":"Build","rt":$n[3].Void,"p":[$n[4].Sprite,$n[4].Sprite,$n[4].Sprite]},{"a":1,"n":"CompleteReveal","t":8,"sn":"CompleteReveal","rt":$n[3].Void},{"a":1,"n":"CreateClickCatcher","is":true,"t":8,"pi":[{"n":"parent","pt":$n[4].Transform,"ps":0}],"sn":"CreateClickCatcher","rt":$n[7].Button,"p":[$n[4].Transform]},{"a":1,"n":"CreateHexMaskSprite","is":true,"t":8,"sn":"CreateHexMaskSprite","rt":$n[4].Sprite},{"a":1,"n":"GetRevealEndSize","t":8,"sn":"GetRevealEndSize","rt":$n[3].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"IsInsidePolygon","is":true,"t":8,"pi":[{"n":"point","pt":$n[4].Vector2,"ps":0},{"n":"polygon","pt":System.Array.type(UnityEngine.Vector2),"ps":1}],"sn":"IsInsidePolygon","rt":$n[3].Boolean,"p":[$n[4].Vector2,System.Array.type(UnityEngine.Vector2)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"NewImage","is":true,"t":8,"pi":[{"n":"name","pt":$n[3].String,"ps":0},{"n":"parent","pt":$n[4].Transform,"ps":1},{"n":"sprite","pt":$n[4].Sprite,"ps":2}],"sn":"NewImage","rt":$n[7].Image,"p":[$n[3].String,$n[4].Transform,$n[4].Sprite]},{"a":1,"n":"Reveal","t":8,"sn":"Reveal","rt":$n[6].IEnumerator},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[3].Void},{"a":2,"n":"Show","t":8,"pi":[{"n":"background","pt":$n[4].Sprite,"ps":0},{"n":"logo","pt":$n[4].Sprite,"ps":1},{"n":"playNow","pt":$n[4].Sprite,"ps":2}],"sn":"Show$1","rt":$n[3].Void,"p":[$n[4].Sprite,$n[4].Sprite,$n[4].Sprite]},{"a":1,"n":"Stretch","is":true,"t":8,"pi":[{"n":"rect","pt":$n[4].RectTransform,"ps":0},{"n":"inset","pt":$n[3].Single,"ps":1}],"sn":"Stretch","rt":$n[3].Void,"p":[$n[4].RectTransform,$n[3].Single]},{"a":1,"n":"ReferenceHeight","is":true,"t":4,"rt":$n[3].Single,"sn":"ReferenceHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ReferenceWidth","is":true,"t":4,"rt":$n[3].Single,"sn":"ReferenceWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_gameEndedSent","t":4,"rt":$n[3].Boolean,"sn":"_gameEndedSent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_maskRect","t":4,"rt":$n[4].RectTransform,"sn":"_maskRect"},{"at":[new UnityEngine.HeaderAttribute("Assets"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"background","t":4,"rt":$n[4].Sprite,"sn":"background"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logo","t":4,"rt":$n[4].Sprite,"sn":"logo"},{"at":[new UnityEngine.HeaderAttribute("Layout"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logoAnchoredPosition","t":4,"rt":$n[4].Vector2,"sn":"logoAnchoredPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logoSize","t":4,"rt":$n[4].Vector2,"sn":"logoSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNow","t":4,"rt":$n[4].Sprite,"sn":"playNow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNowAnchoredPosition","t":4,"rt":$n[4].Vector2,"sn":"playNowAnchoredPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNowSize","t":4,"rt":$n[4].Vector2,"sn":"playNowSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealDuration","t":4,"rt":$n[3].Single,"sn":"revealDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealEndPadding","t":4,"rt":$n[3].Single,"sn":"revealEndPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Reveal"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"revealStartSize","t":4,"rt":$n[3].Single,"sn":"revealStartSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HexaTest.UI.PackshotView end.*/

    /*HexaTest.UI.TimerHudView start.*/
    $m("HexaTest.UI.TimerHudView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyAlarmPulse","t":8,"pi":[{"n":"k","pt":$n[3].Single,"ps":0},{"n":"pulseScale","pt":$n[3].Single,"ps":1}],"sn":"ApplyAlarmPulse","rt":$n[3].Void,"p":[$n[3].Single,$n[3].Single]},{"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[3].Void},{"a":1,"n":"CaptureAlarmBaseState","t":8,"sn":"CaptureAlarmBaseState","rt":$n[3].Void},{"a":1,"n":"EndSequence","t":8,"sn":"EndSequence","rt":$n[6].IEnumerator},{"a":1,"n":"EnsureAlarmOverlays","t":8,"sn":"EnsureAlarmOverlays","rt":$n[3].Void},{"a":1,"n":"EnsureAlphaTintMaterial","t":8,"sn":"EnsureAlphaTintMaterial","rt":$n[3].Void},{"a":1,"n":"EnsureOverlay","t":8,"pi":[{"n":"source","pt":$n[7].Image,"ps":0},{"n":"overlay","pt":$n[7].Image,"ps":1},{"n":"name","pt":$n[3].String,"ps":2}],"sn":"EnsureOverlay","rt":$n[7].Image,"p":[$n[7].Image,$n[7].Image,$n[3].String]},{"a":1,"n":"EnsureTimerFillOverlay","t":8,"sn":"EnsureTimerFillOverlay","rt":$n[3].Void},{"a":1,"n":"EnterAlarm","t":8,"sn":"EnterAlarm","rt":$n[3].Void},{"a":1,"n":"EvaluateFillColor","t":8,"sn":"EvaluateFillColor","rt":$n[4].Color},{"a":1,"n":"SetFinalAlarmColor","t":8,"pi":[{"n":"alpha","pt":$n[3].Single,"ps":0}],"sn":"SetFinalAlarmColor","rt":$n[3].Void,"p":[$n[3].Single]},{"a":1,"n":"SetOverlayColor","t":8,"pi":[{"n":"overlay","pt":$n[7].Image,"ps":0},{"n":"alpha","pt":$n[3].Single,"ps":1}],"sn":"SetOverlayColor","rt":$n[3].Void,"p":[$n[7].Image,$n[3].Single]},{"a":1,"n":"SetTimerFill","t":8,"pi":[{"n":"amount","pt":$n[3].Single,"ps":0},{"n":"color","pt":$n[4].Color,"ps":1}],"sn":"SetTimerFill","rt":$n[3].Void,"p":[$n[3].Single,$n[4].Color]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[3].Void},{"a":1,"n":"UpdateOverlayFill","is":true,"t":8,"pi":[{"n":"source","pt":$n[7].Image,"ps":0},{"n":"overlay","pt":$n[7].Image,"ps":1}],"sn":"UpdateOverlayFill","rt":$n[3].Void,"p":[$n[7].Image,$n[7].Image]},{"a":1,"n":"WatchPopLoop","t":8,"sn":"WatchPopLoop","rt":$n[6].IEnumerator},{"a":1,"n":"AnimatedTimerRect","t":16,"rt":$n[4].RectTransform,"g":{"a":1,"n":"get_AnimatedTimerRect","t":8,"rt":$n[4].RectTransform,"fg":"AnimatedTimerRect"},"fn":"AnimatedTimerRect"},{"a":1,"n":"NeedleUpAngle","is":true,"t":4,"rt":$n[3].Single,"sn":"NeedleUpAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_alarm","t":4,"rt":$n[3].Boolean,"sn":"_alarm","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_alphaTintMaterial","t":4,"rt":$n[4].Material,"sn":"_alphaTintMaterial"},{"a":1,"n":"_baseNeedleScale","t":4,"rt":$n[4].Vector3,"sn":"_baseNeedleScale"},{"a":1,"n":"_baseTimerScale","t":4,"rt":$n[4].Vector3,"sn":"_baseTimerScale"},{"a":1,"n":"_currentPulseScale","t":4,"rt":$n[3].Single,"sn":"_currentPulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_ended","t":4,"rt":$n[3].Boolean,"sn":"_ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_fillOverlay","t":4,"rt":$n[7].Image,"sn":"_fillOverlay"},{"a":1,"n":"_popLoop","t":4,"rt":$n[4].Coroutine,"sn":"_popLoop"},{"a":1,"n":"_running","t":4,"rt":$n[3].Boolean,"sn":"_running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_timer","t":4,"rt":$n[8].GameTimer,"sn":"_timer","ro":true},{"a":1,"n":"_timerBgOverlay","t":4,"rt":$n[7].Image,"sn":"_timerBgOverlay"},{"a":1,"n":"_timerNippleOverlay","t":4,"rt":$n[7].Image,"sn":"_timerNippleOverlay"},{"a":1,"n":"_trackOverlay","t":4,"rt":$n[7].Image,"sn":"_trackOverlay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmPulseInterval","t":4,"rt":$n[3].Single,"sn":"alarmPulseInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmPulseMaxScale","t":4,"rt":$n[3].Single,"sn":"alarmPulseMaxScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmPulseScale","t":4,"rt":$n[3].Single,"sn":"alarmPulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmPulseScaleDownDuration","t":4,"rt":$n[3].Single,"sn":"alarmPulseScaleDownDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmPulseScaleStep","t":4,"rt":$n[3].Single,"sn":"alarmPulseScaleStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmPulseScaleUpDuration","t":4,"rt":$n[3].Single,"sn":"alarmPulseScaleUpDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Remaining fraction at which the alarm stage begins (watch pops, radial grows)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmThreshold","t":4,"rt":$n[3].Single,"sn":"alarmThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Assign Assets/Resources/HexUIAlphaTint \u2014 recolors overlays by sprite alpha (no multiply)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alphaTintMaterial","t":4,"rt":$n[4].Material,"sn":"alphaTintMaterial"},{"at":[new UnityEngine.HeaderAttribute("Timing"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[3].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endThrowDuration","t":4,"rt":$n[3].Single,"sn":"endThrowDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endThrowFrequency","t":4,"rt":$n[3].Single,"sn":"endThrowFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endThrowHorizontalAmplitude","t":4,"rt":$n[3].Single,"sn":"endThrowHorizontalAmplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endThrowSettleDuration","t":4,"rt":$n[3].Single,"sn":"endThrowSettleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endThrowVerticalAmplitude","t":4,"rt":$n[3].Single,"sn":"endThrowVerticalAmplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Colors"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillGradient","t":4,"rt":pc.ColorGradient,"sn":"fillGradient"},{"at":[new UnityEngine.HeaderAttribute("Wired references (assign in scene)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillImage","t":4,"rt":$n[7].Image,"sn":"fillImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"needleRect","t":4,"rt":$n[4].RectTransform,"sn":"needleRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radialImage","t":4,"rt":$n[7].Image,"sn":"radialImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerBgImage","t":4,"rt":$n[7].Image,"sn":"timerBgImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerNippleImage","t":4,"rt":$n[7].Image,"sn":"timerNippleImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerRootRect","t":4,"rt":$n[4].RectTransform,"sn":"timerRootRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackAlarmColor","t":4,"rt":$n[4].Color,"sn":"trackAlarmColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackImage","t":4,"rt":$n[7].Image,"sn":"trackImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"watchImage","t":4,"rt":$n[7].Image,"sn":"watchImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"watchRect","t":4,"rt":$n[4].RectTransform,"sn":"watchRect"},{"a":2,"n":"Expired","t":2,"ad":{"a":2,"n":"add_Expired","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addExpired","rt":$n[3].Void,"p":[Function]},"r":{"a":2,"n":"remove_Expired","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeExpired","rt":$n[3].Void,"p":[Function]}}]}; }, $n);
    /*HexaTest.UI.TimerHudView end.*/

    /*HexaTest.Logic.GameTimer start.*/
    $m("HexaTest.Logic.GameTimer", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Begin","t":8,"pi":[{"n":"duration","pt":$n[3].Single,"ps":0}],"sn":"Begin","rt":$n[3].Void,"p":[$n[3].Single]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[3].Void},{"a":2,"n":"Tick","t":8,"pi":[{"n":"dt","pt":$n[3].Single,"ps":0}],"sn":"Tick","rt":$n[3].Boolean,"p":[$n[3].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Duration","t":16,"rt":$n[3].Single,"g":{"a":2,"n":"get_Duration","t":8,"rt":$n[3].Single,"fg":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Duration","t":8,"p":[$n[3].Single],"rt":$n[3].Void,"fs":"Duration"},"fn":"Duration"},{"a":2,"n":"Elapsed","t":16,"rt":$n[3].Single,"g":{"a":2,"n":"get_Elapsed","t":8,"rt":$n[3].Single,"fg":"Elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Elapsed","t":8,"p":[$n[3].Single],"rt":$n[3].Void,"fs":"Elapsed"},"fn":"Elapsed"},{"a":2,"n":"Expired","t":16,"rt":$n[3].Boolean,"g":{"a":2,"n":"get_Expired","t":8,"rt":$n[3].Boolean,"fg":"Expired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Expired"},{"a":2,"n":"Progress01","t":16,"rt":$n[3].Single,"g":{"a":2,"n":"get_Progress01","t":8,"rt":$n[3].Single,"fg":"Progress01","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Progress01"},{"a":2,"n":"Remaining01","t":16,"rt":$n[3].Single,"g":{"a":2,"n":"get_Remaining01","t":8,"rt":$n[3].Single,"fg":"Remaining01","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Remaining01"},{"a":2,"n":"Running","t":16,"rt":$n[3].Boolean,"g":{"a":2,"n":"get_Running","t":8,"rt":$n[3].Boolean,"fg":"Running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Running","t":8,"p":[$n[3].Boolean],"rt":$n[3].Void,"fs":"Running"},"fn":"Running"},{"a":1,"backing":true,"n":"<Duration>k__BackingField","t":4,"rt":$n[3].Single,"sn":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Elapsed>k__BackingField","t":4,"rt":$n[3].Single,"sn":"Elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Running>k__BackingField","t":4,"rt":$n[3].Boolean,"sn":"Running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexaTest.Logic.GameTimer end.*/

    /*HexaTest.Logic.MergeResolver start.*/
    $m("HexaTest.Logic.MergeResolver", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Resolve","t":8,"pi":[{"n":"board","pt":$n[2].BoardModel,"ps":0},{"n":"start","pt":$n[2].HexCoord,"ps":1},{"n":"clearCount","pt":$n[3].Int32,"ps":2}],"sn":"Resolve","rt":$n[5].List$1(HexaTest.Logic.MergeStep),"p":[$n[2].BoardModel,$n[2].HexCoord,$n[3].Int32]},{"a":1,"n":"RunClearPhase","is":true,"t":8,"pi":[{"n":"board","pt":$n[2].BoardModel,"ps":0},{"n":"clearCount","pt":$n[3].Int32,"ps":1},{"n":"steps","pt":$n[5].List$1(HexaTest.Logic.MergeStep),"ps":2}],"sn":"RunClearPhase","rt":$n[5].List$1(HexaTest.Domain.HexCoord),"p":[$n[2].BoardModel,$n[3].Int32,$n[5].List$1(HexaTest.Logic.MergeStep)]},{"a":1,"n":"RunTransferPhase","is":true,"t":8,"pi":[{"n":"board","pt":$n[2].BoardModel,"ps":0},{"n":"seeds","pt":$n[5].List$1(HexaTest.Domain.HexCoord),"ps":1},{"n":"steps","pt":$n[5].List$1(HexaTest.Logic.MergeStep),"ps":2},{"n":"guard","ref":true,"pt":$n[3].Int32,"ps":3}],"sn":"RunTransferPhase","rt":$n[3].Void,"p":[$n[2].BoardModel,$n[5].List$1(HexaTest.Domain.HexCoord),$n[5].List$1(HexaTest.Logic.MergeStep),$n[3].Int32]},{"a":1,"n":"SafetyCap","is":true,"t":4,"rt":$n[3].Int32,"sn":"SafetyCap","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexaTest.Logic.MergeResolver end.*/

    /*HexaTest.Logic.MergeStep start.*/
    $m("HexaTest.Logic.MergeStep", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*HexaTest.Logic.MergeStep end.*/

    /*HexaTest.Logic.TransferStep start.*/
    $m("HexaTest.Logic.TransferStep", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Color","t":4,"rt":$n[2].HexColorId,"sn":"Color","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Count","t":4,"rt":$n[3].Int32,"sn":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"From","t":4,"rt":$n[2].HexCoord,"sn":"From"},{"a":2,"n":"To","t":4,"rt":$n[2].HexCoord,"sn":"To"}]}; }, $n);
    /*HexaTest.Logic.TransferStep end.*/

    /*HexaTest.Logic.ClearStep start.*/
    $m("HexaTest.Logic.ClearStep", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cell","t":4,"rt":$n[2].HexCoord,"sn":"Cell"},{"a":2,"n":"Color","t":4,"rt":$n[2].HexColorId,"sn":"Color","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Count","t":4,"rt":$n[3].Int32,"sn":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexaTest.Logic.ClearStep end.*/

    /*HexaTest.Integrations.PlayworksBridge start.*/
    $m("HexaTest.Integrations.PlayworksBridge", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GameEnded","is":true,"t":8,"sn":"GameEnded","rt":$n[3].Void},{"a":2,"n":"InstallFullGame","is":true,"t":8,"sn":"InstallFullGame","rt":$n[3].Void},{"a":1,"n":"FallbackStoreUrl","is":true,"t":4,"rt":$n[3].String,"sn":"FallbackStoreUrl"}]}; }, $n);
    /*HexaTest.Integrations.PlayworksBridge end.*/

    /*HexaTest.Domain.BoardModel start.*/
    $m("HexaTest.Domain.BoardModel", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"cell","pt":$n[2].CellModel,"ps":0}],"sn":"Add","rt":$n[3].Void,"p":[$n[2].CellModel]},{"a":2,"n":"BuildHexagon","is":true,"t":8,"pi":[{"n":"radius","pt":$n[3].Int32,"ps":0}],"sn":"BuildHexagon","rt":$n[2].BoardModel,"p":[$n[3].Int32]},{"a":2,"n":"Clone","t":8,"sn":"Clone","rt":$n[2].BoardModel},{"a":2,"n":"Get","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0}],"sn":"Get","rt":$n[2].CellModel,"p":[$n[2].HexCoord]},{"a":2,"n":"Neighbors","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0}],"sn":"Neighbors","rt":$n[5].IEnumerable$1(HexaTest.Domain.CellModel),"p":[$n[2].HexCoord]},{"a":2,"n":"TryGet","t":8,"pi":[{"n":"c","pt":$n[2].HexCoord,"ps":0},{"n":"cell","out":true,"pt":$n[2].CellModel,"ps":1}],"sn":"TryGet","rt":$n[3].Boolean,"p":[$n[2].HexCoord,$n[2].CellModel],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Cells","t":16,"rt":$n[5].IEnumerable$1(HexaTest.Domain.CellModel),"g":{"a":2,"n":"get_Cells","t":8,"rt":$n[5].IEnumerable$1(HexaTest.Domain.CellModel),"fg":"Cells"},"fn":"Cells"},{"a":1,"n":"_cells","t":4,"rt":$n[5].Dictionary$2(HexaTest.Domain.HexCoord,HexaTest.Domain.CellModel),"sn":"_cells","ro":true}]}; }, $n);
    /*HexaTest.Domain.BoardModel end.*/

    /*HexaTest.Domain.CellModel start.*/
    $m("HexaTest.Domain.CellModel", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].HexCoord],"pi":[{"n":"coord","pt":$n[2].HexCoord,"ps":0}],"sn":"ctor"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[3].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[3].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"Coord","t":4,"rt":$n[2].HexCoord,"sn":"Coord","ro":true},{"a":2,"n":"Stack","t":4,"rt":$n[2].StackModel,"sn":"Stack"}]}; }, $n);
    /*HexaTest.Domain.CellModel end.*/

    /*HexaTest.Domain.HexColorId start.*/
    $m("HexaTest.Domain.HexColorId", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Blue","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Cyan","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Cyan","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Green","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Green","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Magenta","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Magenta","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Purple","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Purple","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Red","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Red","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"White","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"White","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":$n[2].HexColorId,"sn":"Yellow","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}}]}; }, $n);
    /*HexaTest.Domain.HexColorId end.*/

    /*HexaTest.Domain.HexCoord start.*/
    $m("HexaTest.Domain.HexCoord", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[3].Int32,$n[3].Int32],"pi":[{"n":"q","pt":$n[3].Int32,"ps":0},{"n":"r","pt":$n[3].Int32,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"DistanceToCenter","t":8,"sn":"DistanceToCenter","rt":$n[3].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"Equals","t":8,"pi":[{"n":"obj","pt":$n[3].Object,"ps":0}],"sn":"equals","rt":$n[3].Boolean,"p":[$n[3].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"GetHashCode","t":8,"sn":"getHashCode","rt":$n[3].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Neighbor","t":8,"pi":[{"n":"dir","pt":$n[3].Int32,"ps":0}],"sn":"Neighbor","rt":$n[2].HexCoord,"p":[$n[3].Int32]},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[3].String},{"a":2,"n":"ToWorld","t":8,"pi":[{"n":"size","pt":$n[3].Single,"ps":0}],"sn":"ToWorld","rt":$n[4].Vector3,"p":[$n[3].Single]},{"a":2,"n":"S","t":16,"rt":$n[3].Int32,"g":{"a":2,"n":"get_S","t":8,"rt":$n[3].Int32,"fg":"S","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"S"},{"a":2,"n":"Directions","is":true,"t":4,"rt":System.Array.type(HexaTest.Domain.HexCoord),"sn":"Directions","ro":true},{"a":2,"n":"Q","t":4,"rt":$n[3].Int32,"sn":"Q","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"R","t":4,"rt":$n[3].Int32,"sn":"R","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*HexaTest.Domain.HexCoord end.*/

    /*HexaTest.Domain.StackModel start.*/
    $m("HexaTest.Domain.StackModel", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clone","t":8,"sn":"Clone","rt":$n[2].StackModel},{"a":2,"n":"Push","t":8,"pi":[{"n":"c","pt":$n[2].HexColorId,"ps":0}],"sn":"Push","rt":$n[3].Void,"p":[$n[2].HexColorId]},{"a":2,"n":"PushRange","t":8,"pi":[{"n":"c","pt":$n[2].HexColorId,"ps":0},{"n":"n","pt":$n[3].Int32,"ps":1}],"sn":"PushRange","rt":$n[3].Void,"p":[$n[2].HexColorId,$n[3].Int32]},{"a":2,"n":"RemoveTop","t":8,"pi":[{"n":"n","pt":$n[3].Int32,"ps":0}],"sn":"RemoveTop","rt":$n[3].Void,"p":[$n[3].Int32]},{"a":2,"n":"Set","t":8,"pi":[{"n":"discs","pt":$n[5].IEnumerable$1(HexaTest.Domain.HexColorId),"ps":0}],"sn":"Set","rt":$n[3].Void,"p":[$n[5].IEnumerable$1(HexaTest.Domain.HexColorId)]},{"a":2,"n":"TopRunLength","t":8,"sn":"TopRunLength","rt":$n[3].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Count","t":16,"rt":$n[3].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[3].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"Discs","t":16,"rt":$n[5].IReadOnlyList$1(HexaTest.Domain.HexColorId),"g":{"a":2,"n":"get_Discs","t":8,"rt":$n[5].IReadOnlyList$1(HexaTest.Domain.HexColorId),"fg":"Discs"},"fn":"Discs"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[3].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[3].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"TopColor","t":16,"rt":$n[2].HexColorId,"g":{"a":2,"n":"get_TopColor","t":8,"rt":$n[2].HexColorId,"fg":"TopColor","box":function ($v) { return Bridge.box($v, HexaTest.Domain.HexColorId, System.Enum.toStringFn(HexaTest.Domain.HexColorId));}},"fn":"TopColor"},{"a":1,"n":"_discs","t":4,"rt":$n[5].List$1(HexaTest.Domain.HexColorId),"sn":"_discs","ro":true}]}; }, $n);
    /*HexaTest.Domain.StackModel end.*/

    /*HexaTest.Config.GameConfig start.*/
    $m("HexaTest.Config.GameConfig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ColorOf","t":8,"pi":[{"n":"id","pt":$n[2].HexColorId,"ps":0}],"sn":"ColorOf","rt":$n[4].Color,"p":[$n[2].HexColorId]},{"a":2,"n":"DiscRadius","t":16,"rt":$n[3].Single,"g":{"a":2,"n":"get_DiscRadius","t":8,"rt":$n[3].Single,"fg":"DiscRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"DiscRadius"},{"a":2,"n":"TileRadius","t":16,"rt":$n[3].Single,"g":{"a":2,"n":"get_TileRadius","t":8,"rt":$n[3].Single,"fg":"TileRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"TileRadius"},{"at":[new UnityEngine.TooltipAttribute("Platform layers top -> bottom. Length = number of layers (reference ~3).")],"a":2,"n":"baseLayerColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"baseLayerColors"},{"a":2,"n":"baseLayerThickness","t":4,"rt":$n[3].Single,"sn":"baseLayerThickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Board platform (layered edge)"),new UnityEngine.TooltipAttribute("The platform is built from the same cells, so its silhouette matches exactly."),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"baseRound","t":4,"rt":$n[3].Single,"sn":"baseRound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Board"),new UnityEngine.TooltipAttribute("Ring radius of the hex board. 2 => 19 cells (matches reference).")],"a":2,"n":"boardRadius","t":4,"rt":$n[3].Int32,"sn":"boardRadius","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Center-to-center spacing of board cells. Equals the tessellation size.")],"a":2,"n":"cellSize","t":4,"rt":$n[3].Single,"sn":"cellSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How many same-color discs collapse and clear.")],"a":2,"n":"clearCount","t":4,"rt":$n[3].Int32,"sn":"clearCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Seconds to downscale one disc during a clear at speed x1.")],"a":2,"n":"clearDuration","t":4,"rt":$n[3].Single,"sn":"clearDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"cornerSegments","t":4,"rt":$n[3].Int32,"sn":"cornerSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Hex disc geometry"),new UnityEngine.TooltipAttribute("Disc circumradius as a fraction of cellSize. 1.0 => neighbors touch exactly (dist=\u221a3\u00b7R)."),new UnityEngine.RangeAttribute(0.8, 1.0)],"a":2,"n":"discFill","t":4,"rt":$n[3].Single,"sn":"discFill","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Pause between consecutive discs in a clear.")],"a":2,"n":"discInterval","t":4,"rt":$n[3].Single,"sn":"discInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"discRound","t":4,"rt":$n[3].Single,"sn":"discRound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"discSeparatorDarken","t":4,"rt":$n[3].Single,"sn":"discSeparatorDarken","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Thin darker band near the bottom of each disc so stacked levels stay readable.")],"a":2,"n":"discSeparatorThickness","t":4,"rt":$n[3].Single,"sn":"discSeparatorThickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Vertical gap between stacked discs (keep ~= thickness so they touch).")],"a":2,"n":"discSpacing","t":4,"rt":$n[3].Single,"sn":"discSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Disc height \u2014 larger reads as more 3D/chunky.")],"a":2,"n":"discThickness","t":4,"rt":$n[3].Single,"sn":"discThickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How high a grabbed stack floats above the board so it never blends into it.")],"a":2,"n":"dragLift","t":4,"rt":$n[3].Single,"sn":"dragLift","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How much wider (world units) each lower layer is \u2014 the visible rim sliver. Keep small.")],"a":2,"n":"edgeRim","t":4,"rt":$n[3].Single,"sn":"edgeRim","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Merge animation"),new UnityEngine.TooltipAttribute("Seconds to flip one disc onto a neighbor at speed x1.")],"a":2,"n":"flipDuration","t":4,"rt":$n[3].Single,"sn":"flipDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Delay before launching the next disc in a run (enables overlap).")],"a":2,"n":"flipStagger","t":4,"rt":$n[3].Single,"sn":"flipStagger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How many discs may be mid-flight at once (reference ~2).")],"a":2,"n":"maxConcurrentFlips","t":4,"rt":$n[3].Int32,"sn":"maxConcurrentFlips","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Upper cap on the accumulated speed multiplier.")],"a":2,"n":"maxSpeed","t":4,"rt":$n[3].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"palette","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"palette"},{"at":[new UnityEngine.HeaderAttribute("Interaction")],"a":2,"n":"snapDistance","t":4,"rt":$n[3].Single,"sn":"snapDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Speed multiplier growth per merge step (0.30 => +30%).")],"a":2,"n":"speedRamp","t":4,"rt":$n[3].Single,"sn":"speedRamp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Colors")],"a":2,"n":"tileColor","t":4,"rt":$n[4].Color,"sn":"tileColor"},{"at":[new UnityEngine.HeaderAttribute("Cell tile (packed, thin seam shows the platform underneath)"),new UnityEngine.TooltipAttribute("Tile radius as a fraction of cellSize. <1 leaves a thin outline seam."),new UnityEngine.RangeAttribute(0.7, 1.0)],"a":2,"n":"tileInset","t":4,"rt":$n[3].Single,"sn":"tileInset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How far the tile top sits above the platform top (y=0). Keep >= tileThickness/2.")],"a":2,"n":"tileRaise","t":4,"rt":$n[3].Single,"sn":"tileRaise","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"tileRound","t":4,"rt":$n[3].Single,"sn":"tileRound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tileThickness","t":4,"rt":$n[3].Single,"sn":"tileThickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Tray"),new UnityEngine.TooltipAttribute("How far below the board center the tray sits (world units).")],"a":2,"n":"trayDistance","t":4,"rt":$n[3].Single,"sn":"trayDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"traySpacing","t":4,"rt":$n[3].Single,"sn":"traySpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HexaTest.Config.GameConfig end.*/

    /*HexaTest.App.GameBootstrap start.*/
    $m("HexaTest.App.GameBootstrap", function () { return {"nested":[$n[9].GameBootstrap.TrayEntry],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[3].Void},{"a":1,"n":"CellStackPos","t":8,"pi":[{"n":"coord","pt":$n[2].HexCoord,"ps":0}],"sn":"CellStackPos","rt":$n[4].Vector3,"p":[$n[2].HexCoord]},{"a":1,"n":"FitCameraToAspect","t":8,"pi":[{"n":"cam","pt":$n[4].Camera,"ps":0}],"sn":"FitCameraToAspect","rt":$n[3].Void,"p":[$n[4].Camera]},{"a":1,"n":"GetTraySource","t":8,"sn":"GetTraySource","rt":$n[3].Nullable$1(UnityEngine.Vector3)},{"a":1,"n":"OnCascadeDone","t":8,"sn":"OnCascadeDone","rt":$n[3].Void},{"a":1,"n":"OnTimeUp","t":8,"sn":"OnTimeUp","rt":$n[3].Void},{"a":1,"n":"PlaceFromTray","t":8,"pi":[{"n":"view","pt":$n[1].StackView,"ps":0},{"n":"coord","pt":$n[2].HexCoord,"ps":1}],"sn":"PlaceFromTray","rt":$n[3].Boolean,"p":[$n[1].StackView,$n[2].HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"RandomDiscs","t":8,"sn":"RandomDiscs","rt":$n[5].List$1(HexaTest.Domain.HexColorId)},{"a":1,"n":"RefillTray","t":8,"sn":"RefillTray","rt":$n[3].Void},{"a":1,"n":"SeedBoard","t":8,"sn":"SeedBoard","rt":$n[3].Void},{"a":1,"n":"SetUpCamera","t":8,"sn":"SetUpCamera","rt":$n[3].Void},{"a":1,"n":"Shuffle","is":true,"t":8,"pi":[{"n":"list","pt":$n[5].IList$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"Shuffle","rt":$n[3].Void,"p":[$n[5].IList$1(System.Object)]},{"a":1,"n":"StackY","t":16,"rt":$n[3].Single,"g":{"a":1,"n":"get_StackY","t":8,"rt":$n[3].Single,"fg":"StackY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"StackY"},{"a":1,"n":"_animator","t":4,"rt":$n[9].MergeAnimator,"sn":"_animator"},{"a":1,"n":"_assets","t":4,"rt":$n[1].HexAssets,"sn":"_assets"},{"a":1,"n":"_board","t":4,"rt":$n[2].BoardModel,"sn":"_board"},{"a":1,"n":"_boardView","t":4,"rt":$n[1].BoardView,"sn":"_boardView"},{"a":1,"n":"_factory","t":4,"rt":$n[1].StackFactory,"sn":"_factory"},{"a":1,"n":"_gameOver","t":4,"rt":$n[3].Boolean,"sn":"_gameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_resolver","t":4,"rt":$n[8].MergeResolver,"sn":"_resolver"},{"a":1,"n":"_tray","t":4,"rt":$n[5].List$1(HexaTest.App.GameBootstrap.TrayEntry),"sn":"_tray","ro":true},{"a":1,"n":"_trayRoot","t":4,"rt":$n[4].Transform,"sn":"_trayRoot"},{"at":[new UnityEngine.TooltipAttribute("How much of the screen width the board fills. Higher = smaller board. Keeps framing consistent across device aspects (editor vs Luna)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cameraFitMargin","t":4,"rt":$n[3].Single,"sn":"cameraFitMargin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"config","t":4,"rt":$n[0].GameConfig,"sn":"config"},{"at":[new UnityEngine.TooltipAttribute("Assign Assets/Resources/HexBaseMaterial \u2014 referenced here so Luna bundles it reliably."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexBaseMaterial","t":4,"rt":$n[4].Material,"sn":"hexBaseMaterial"},{"at":[new UnityEngine.HeaderAttribute("Scene references (drag the HUD / tutorial objects)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hud","t":4,"rt":$n[10].TimerHudView,"sn":"hud"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packshot","t":4,"rt":$n[10].PackshotView,"sn":"packshot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"seededCells","t":4,"rt":$n[3].Int32,"sn":"seededCells","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"setUpCamera","t":4,"rt":$n[3].Boolean,"sn":"setUpCamera","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorial","t":4,"rt":$n[9].TutorialController,"sn":"tutorial"}]}; }, $n);
    /*HexaTest.App.GameBootstrap end.*/

    /*HexaTest.App.GameBootstrap+TrayEntry start.*/
    $m("HexaTest.App.GameBootstrap.TrayEntry", function () { return {"td":$n[9].GameBootstrap,"att":1048835,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Model","t":4,"rt":$n[2].StackModel,"sn":"Model"},{"a":2,"n":"Slot","t":4,"rt":$n[3].Int32,"sn":"Slot","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"View","t":4,"rt":$n[1].StackView,"sn":"View"}]}; }, $n);
    /*HexaTest.App.GameBootstrap+TrayEntry end.*/

    /*HexaTest.App.InputController start.*/
    $m("HexaTest.App.InputController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Drag","t":8,"sn":"Drag","rt":$n[3].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"cam","pt":$n[4].Camera,"ps":0},{"n":"cfg","pt":$n[0].GameConfig,"ps":1},{"n":"board","pt":$n[2].BoardModel,"ps":2},{"n":"view","pt":$n[1].BoardView,"ps":3},{"n":"isBusy","pt":Function,"ps":4},{"n":"place","pt":Function,"ps":5},{"n":"onGrab","dv":null,"o":true,"pt":Function,"ps":6},{"n":"onInvalidDrop","dv":null,"o":true,"pt":Function,"ps":7}],"sn":"Init","rt":$n[3].Void,"p":[$n[4].Camera,$n[0].GameConfig,$n[2].BoardModel,$n[1].BoardView,Function,Function,Function,Function]},{"a":1,"n":"ProjectToGround","t":8,"pi":[{"n":"point","out":true,"pt":$n[4].Vector3,"ps":0}],"sn":"ProjectToGround","rt":$n[3].Boolean,"p":[$n[4].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Release","t":8,"sn":"Release","rt":$n[3].Void},{"a":1,"n":"TryGrab","t":8,"sn":"TryGrab","rt":$n[3].Void},{"a":1,"n":"TryNearestEmpty","t":8,"pi":[{"n":"world","pt":$n[4].Vector3,"ps":0},{"n":"coord","out":true,"pt":$n[2].HexCoord,"ps":1}],"sn":"TryNearestEmpty","rt":$n[3].Boolean,"p":[$n[4].Vector3,$n[2].HexCoord],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[3].Void},{"a":1,"n":"_board","t":4,"rt":$n[2].BoardModel,"sn":"_board"},{"a":1,"n":"_cam","t":4,"rt":$n[4].Camera,"sn":"_cam"},{"a":1,"n":"_cfg","t":4,"rt":$n[0].GameConfig,"sn":"_cfg"},{"a":1,"n":"_hasHover","t":4,"rt":$n[3].Boolean,"sn":"_hasHover","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_held","t":4,"rt":$n[1].StackView,"sn":"_held"},{"a":1,"n":"_home","t":4,"rt":$n[4].Vector3,"sn":"_home"},{"a":1,"n":"_hover","t":4,"rt":$n[2].HexCoord,"sn":"_hover"},{"a":1,"n":"_isBusy","t":4,"rt":Function,"sn":"_isBusy"},{"a":1,"n":"_onGrab","t":4,"rt":Function,"sn":"_onGrab"},{"a":1,"n":"_onInvalidDrop","t":4,"rt":Function,"sn":"_onInvalidDrop"},{"a":1,"n":"_place","t":4,"rt":Function,"sn":"_place"},{"a":1,"n":"_view","t":4,"rt":$n[1].BoardView,"sn":"_view"}]}; }, $n);
    /*HexaTest.App.InputController end.*/

    /*HexaTest.App.MergeAnimator start.*/
    $m("HexaTest.App.MergeAnimator", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Clear","t":8,"pi":[{"n":"step","pt":$n[8].ClearStep,"ps":0},{"n":"speed","pt":$n[3].Single,"ps":1}],"sn":"Clear","rt":$n[6].IEnumerator,"p":[$n[8].ClearStep,$n[3].Single]},{"a":1,"n":"Downscale","is":true,"t":8,"pi":[{"n":"disc","pt":$n[4].Transform,"ps":0},{"n":"dur","pt":$n[3].Single,"ps":1}],"sn":"Downscale","rt":$n[6].IEnumerator,"p":[$n[4].Transform,$n[3].Single]},{"a":1,"n":"Flip","t":8,"pi":[{"n":"disc","pt":$n[4].Transform,"ps":0},{"n":"target","pt":$n[4].Vector3,"ps":1},{"n":"dur","pt":$n[3].Single,"ps":2}],"sn":"Flip","rt":$n[6].IEnumerator,"p":[$n[4].Transform,$n[4].Vector3,$n[3].Single]},{"a":1,"n":"FlipAndLand","t":8,"pi":[{"n":"disc","pt":$n[4].Transform,"ps":0},{"n":"target","pt":$n[4].Vector3,"ps":1},{"n":"dur","pt":$n[3].Single,"ps":2},{"n":"to","pt":$n[1].StackView,"ps":3},{"n":"toCell","pt":$n[2].CellModel,"ps":4},{"n":"color","pt":$n[2].HexColorId,"ps":5}],"sn":"FlipAndLand","rt":$n[6].IEnumerator,"p":[$n[4].Transform,$n[4].Vector3,$n[3].Single,$n[1].StackView,$n[2].CellModel,$n[2].HexColorId]},{"a":2,"n":"Init","t":8,"pi":[{"n":"cfg","pt":$n[0].GameConfig,"ps":0},{"n":"board","pt":$n[2].BoardModel,"ps":1},{"n":"view","pt":$n[1].BoardView,"ps":2}],"sn":"Init","rt":$n[3].Void,"p":[$n[0].GameConfig,$n[2].BoardModel,$n[1].BoardView]},{"a":2,"n":"Play","t":8,"pi":[{"n":"plan","pt":$n[5].List$1(HexaTest.Logic.MergeStep),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"Play","rt":$n[3].Void,"p":[$n[5].List$1(HexaTest.Logic.MergeStep),Function]},{"a":1,"n":"Run","t":8,"pi":[{"n":"plan","pt":$n[5].List$1(HexaTest.Logic.MergeStep),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"Run","rt":$n[6].IEnumerator,"p":[$n[5].List$1(HexaTest.Logic.MergeStep),Function]},{"a":1,"n":"Transfer","t":8,"pi":[{"n":"step","pt":$n[8].TransferStep,"ps":0},{"n":"speed","pt":$n[3].Single,"ps":1}],"sn":"Transfer","rt":$n[6].IEnumerator,"p":[$n[8].TransferStep,$n[3].Single]},{"a":2,"n":"IsPlaying","t":16,"rt":$n[3].Boolean,"g":{"a":2,"n":"get_IsPlaying","t":8,"rt":$n[3].Boolean,"fg":"IsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsPlaying","t":8,"p":[$n[3].Boolean],"rt":$n[3].Void,"fs":"IsPlaying"},"fn":"IsPlaying"},{"a":1,"n":"_activeFlips","t":4,"rt":$n[3].Int32,"sn":"_activeFlips","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_board","t":4,"rt":$n[2].BoardModel,"sn":"_board"},{"a":1,"n":"_cfg","t":4,"rt":$n[0].GameConfig,"sn":"_cfg"},{"a":1,"n":"_view","t":4,"rt":$n[1].BoardView,"sn":"_view"},{"a":1,"backing":true,"n":"<IsPlaying>k__BackingField","t":4,"rt":$n[3].Boolean,"sn":"IsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexaTest.App.MergeAnimator end.*/

    /*HexaTest.App.TutorialController start.*/
    $m("HexaTest.App.TutorialController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindTargetCell","t":8,"sn":"FindTargetCell","rt":$n[3].Nullable$1(UnityEngine.Vector3)},{"a":1,"n":"GestureLoop","t":8,"sn":"GestureLoop","rt":$n[6].IEnumerator},{"a":1,"n":"Hide","t":8,"sn":"Hide","rt":$n[3].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"cam","pt":$n[4].Camera,"ps":0},{"n":"cfg","pt":$n[0].GameConfig,"ps":1},{"n":"board","pt":$n[2].BoardModel,"ps":2},{"n":"getSource","pt":Function,"ps":3}],"sn":"Init","rt":$n[3].Void,"p":[$n[4].Camera,$n[0].GameConfig,$n[2].BoardModel,Function]},{"a":2,"n":"NotifyDropFailed","t":8,"sn":"NotifyDropFailed","rt":$n[3].Void},{"a":2,"n":"NotifyGrab","t":8,"sn":"NotifyGrab","rt":$n[3].Void},{"a":2,"n":"NotifyPlaced","t":8,"sn":"NotifyPlaced","rt":$n[3].Void},{"a":1,"n":"PlaceHand","t":8,"pi":[{"n":"worldPoint","pt":$n[4].Vector3,"ps":0}],"sn":"PlaceHand","rt":$n[3].Void,"p":[$n[4].Vector3]},{"a":1,"n":"Show","t":8,"sn":"Show","rt":$n[3].Void},{"a":2,"n":"StopForever","t":8,"sn":"StopForever","rt":$n[3].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[3].Void},{"a":1,"n":"_board","t":4,"rt":$n[2].BoardModel,"sn":"_board"},{"a":1,"n":"_cam","t":4,"rt":$n[4].Camera,"sn":"_cam"},{"a":1,"n":"_cfg","t":4,"rt":$n[0].GameConfig,"sn":"_cfg"},{"a":1,"n":"_getSource","t":4,"rt":Function,"sn":"_getSource"},{"a":1,"n":"_hand","t":4,"rt":$n[7].Image,"sn":"_hand"},{"a":1,"n":"_handRoot","t":4,"rt":$n[4].RectTransform,"sn":"_handRoot"},{"a":1,"n":"_idle","t":4,"rt":$n[3].Single,"sn":"_idle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_initialized","t":4,"rt":$n[3].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_loop","t":4,"rt":$n[4].Coroutine,"sn":"_loop"},{"a":1,"n":"_showing","t":4,"rt":$n[3].Boolean,"sn":"_showing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_stopped","t":4,"rt":$n[3].Boolean,"sn":"_stopped","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_waitingForDrop","t":4,"rt":$n[3].Boolean,"sn":"_waitingForDrop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Hand sprites"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseSprite","t":4,"rt":$n[4].Sprite,"sn":"baseSprite"},{"at":[new UnityEngine.TooltipAttribute("Hand height in world units."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handWorldHeight","t":4,"rt":$n[3].Single,"sn":"handWorldHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Tuning"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleDelay","t":4,"rt":$n[3].Single,"sn":"idleDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pressSprite","t":4,"rt":$n[4].Sprite,"sn":"pressSprite"}]}; }, $n);
    /*HexaTest.App.TutorialController end.*/

    }});
