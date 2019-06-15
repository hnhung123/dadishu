
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":195,"x":154,"name":"item0"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":30,"x":60,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":193,"x":344,"name":"item1"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":40,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":199,"x":543,"name":"item2"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":33,"x":65,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":29,"x":63,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":288,"x":343,"name":"item4"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":30,"x":65,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":36,"x":58,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":391,"x":115,"name":"item6"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":32,"x":57,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":390,"x":346,"name":"item7"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":37,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":390,"x":567,"name":"item8"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":36,"x":61,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":13,"x":196,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":40,"x":34,"var":"scoreNums"},"child":[{"type":"Clip","props":{"y":3,"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"y":3,"x":17,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"y":3,"x":33,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"y":3,"x":50,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"y":3,"x":66,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"y":3,"x":82,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"y":3,"x":97,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"y":3,"x":114,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"y":3,"x":129,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"y":3,"x":145,"width":18,"skin":"ui/clip_number.png","name":"item9","height":24,"clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":60,"x":71,"width":98,"skin":"ui/hammer.png","rotation":20,"pivotY":49,"pivotX":56,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":65,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":62,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"var":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":2,"key":"var","index":0},{"value":"","tweenMethod":"linearNone","tween":false,"target":2,"key":"var","index":5}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);

        }

    }
}
